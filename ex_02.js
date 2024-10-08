window.onload = function() {
    let currentRotation = 0
    function rotateCircle(step) {
        const circle = document.getElementById("circle");
        if (step === 0) {
            currentRotation = 0
            circle.style.transform = `rotate(${currentRotation}deg)`;
        } else {
            currentRotation += step/100
            circle.style.transform = `rotate(${currentRotation}deg)`;
        }
    } 
    document.querySelectorAll(".rotate-button").forEach(button => {
        button.addEventListener('click', function() {
            const step = parseInt(this.value);
            rotateCircle(step);
        });
    })};
