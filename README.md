# WebAR Real-Time Changes

This project demonstrates how to make real-time changes to a 3D model in a WebAR environment using A-Frame and AR.js.

## Project Structure

- `index.html`: The main HTML file that sets up the A-Frame scene and AR.js.
- `script.js`: A JavaScript file that contains the logic for changing the color of the 3D model in real-time.
- `README.md`: This file, providing an overview of the project.

## How to Run

1. **Clone the repository:**
    ```sh
    git clone https://github.com/your-repo/WebAR-RealTime.git
    cd WebAR-RealTime
    ```

2. **Open `index.html` in a web browser.**

3. **Allow access to the webcam when prompted.**

4. **Point the webcam at a Hiro marker (you can print one from [here](https://jeromeetienne.github.io/AR.js/three.js/examples/marker-training/examples/hiro.png)).**

5. **Click on the 3D box to change its color.**

## Dependencies

- [A-Frame](https://aframe.io/)
- [AR.js](https://ar-js-org.github.io/AR.js/)

## Real-Time Changes

The `script.js` file adds an event listener to the 3D box. When the box is clicked, its color is toggled between blue and red.

```javascript
document.addEventListener('DOMContentLoaded', () => {
  const box = document.getElementById('interactive-box');
  box.addEventListener('click', () => {
    const currentColor = box.getAttribute('color');
    const newColor = currentColor === 'blue' ? 'red' : 'blue';
    box.setAttribute('color', newColor);
  });
});


