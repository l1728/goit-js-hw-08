
// Отримання посилань на елементи DOM
  const colorSpan = document.querySelector('.color'); // span, де відображається колір
  const changeColorButton = document.querySelector('.change-color'); // кнопка зміни кольору

  // Функція для генерації випадкового кольору у форматі HEX
  function getRandomHexColor() {
    return `#${Math
      .floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, '0')}`;
  }

  // Додавання обробника події для кнопки зміни кольору
  changeColorButton.addEventListener('click', function() {
    // Генеруємо випадковий кольор
    const randomColor = getRandomHexColor();

    // Зміна фону елемента <body> на випадковий кольор
    document.body.style.backgroundColor = randomColor;

    // Встановлення текстового вмісту span.color на випадковий кольор
    colorSpan.textContent = randomColor;
  });
