document.addEventListener('DOMContentLoaded', () => {
  const box = document.getElementById('interactive-box');

  // Change color on click
  box.addEventListener('click', () => {
    const currentColor = box.getAttribute('color');
    const newColor = currentColor === 'blue' ? 'red' : 'blue';
    box.setAttribute('color', newColor);
  });

  // Variables for touch events
  let initialDistance = null;

  const calculateDistance = (touch1, touch2) => {
    return Math.hypot(touch1.pageX - touch2.pageX, touch1.pageY - touch2.pageY);
  };

  const handleTouchMove = (event) => {
    if (event.touches.length === 2) {
      const currentDistance = calculateDistance(event.touches[0], event.touches[1]);
      if (initialDistance === null) {
        initialDistance = currentDistance;
      } else {
        const scale = box.getAttribute('scale');
        const scaleFactor = 0.005;
        if (currentDistance > initialDistance) {
          // Zoom in
          box.setAttribute('scale', {
            x: scale.x + scaleFactor,
            y: scale.y + scaleFactor,
            z: scale.z + scaleFactor
          });
        } else if (currentDistance < initialDistance) {
          // Zoom out
          box.setAttribute('scale', {
            x: Math.max(scale.x - scaleFactor, 0.1),
            y: Math.max(scale.y - scaleFactor, 0.1),
            z: Math.max(scale.z - scaleFactor, 0.1)
          });
        }
        initialDistance = currentDistance;
      }
    }
  };

  const handleTouchEnd = () => {
    initialDistance = null;
  };

  window.addEventListener('touchmove', handleTouchMove);
  window.addEventListener('touchend', handleTouchEnd);
});
