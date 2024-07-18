document.addEventListener('DOMContentLoaded', () => {
    const box = document.getElementById('interactive-box');
    box.addEventListener('click', () => {
      const currentColor = box.getAttribute('color');
      const newColor = currentColor === 'blue' ? 'red' : 'blue';
      box.setAttribute('color', newColor);
    });
  });
  