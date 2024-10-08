window.onload = () => {
  const robot = document.getElementById("robot");
  const screenText = document.getElementById("screen-text");
  const speechBubble = document.getElementById("speech-bubble");
  const inputField = document.getElementById("robot-input");

  let eyeClickCount = 0;
  const eyes = robot.querySelectorAll(".eye-right-pupil, .eye-left-pupil");

  robot.addEventListener("click", () => {
    speechBubble.textContent = "Ouch, that hurts!";
    setTimeout(() => {
      speechBubble.textContent = "Hello!";
    }, 2000);
  });

  robot.addEventListener("mousemove", (event) => {
    const { offsetX, offsetY } = event;
    screenText.textContent = `X: ${offsetX}, Y: ${offsetY}`;
  });

  inputField.addEventListener("input", () => {
    screenText.textContent = "Don't worry, I'll take care of it!";
    setTimeout(() => {
      screenText.textContent = "Bip bip bip!";
    }, 2000);
  });

  eyes.forEach((eye) => {
    eye.addEventListener("click", () => {
      eyeClickCount++;
      if (eyeClickCount >= 10) {
        eyes.forEach((eye) => {
          eye.style.fill = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
        });
        eyeClickCount = 0;
      }
    });
  });
};