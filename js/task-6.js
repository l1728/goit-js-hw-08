
  // Отримання посилань на елементи DOM
    const input = document.querySelector('input[type="number"]');
    const createBtn = document.querySelector('button[data-create]');
    const destroyBtn = document.querySelector('button[data-destroy]');
const boxesDiv = document.querySelector('#boxes');
    
// Функція для отримання випадкового кольору у форматі HEX
    function getRandomHexColor() {
      return `#${Math
        .floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, '0')}`;
    }

    // Функція для створення колекції елементів
    function createBoxes(amount) {
      destroyBoxes(); // Очищення попередніх елементів
      let size = 30; // Початковий розмір блоку
      for (let i = 0; i < amount; i += 1) {
        // Створення нового елемента блоку
        const box = document.createElement('div');
        // Задання випадкового кольору фону
        box.style.backgroundColor = getRandomHexColor();
        // Задання розмірів блоку
        box.style.width = `${size}px`;
        box.style.height = `${size}px`;
        // Додавання блоку до контейнера
        boxesDiv.appendChild(box);
        size += 10; // Збільшення розмірів для наступного блоку
      }
    }

    // Функція для очищення колекції елементів
    function destroyBoxes() {
      boxesDiv.innerHTML = ''; // Видалення всіх дочірніх елементів
    }

     // Обробник події для кнопки "Create"
    createBtn.addEventListener('click', () => {
      const amount = Number(input.value); // Отримання кількості елементів
      // Перевірка на правильність введеного числа
      if (amount >= 1 && amount <= 100) {
        createBoxes(amount); // Створення елементів
        input.value = ''; // Очищення поля введення
      } else {
        alert('Введіть число між 1 та 100'); // Повідомлення про помилку
        input.value = ''; // Очищення поля введення
      }
    });

    // // Обробник події для кнопки "Destroy"
    // destroyBtn.addEventListener('click', () => {
    //   destroyBoxes(); // Очищення колекції елементів
    // });
// Обробник події для кнопки "Destroy"
// Визначення іменованої функції для обробки події кнопки "Destroy"
function nandleDestroyButtonClick() {
  destroyBoxes();  // Очищення колекції елементів
}
// Прикріплення обробника подій до кнопки "Destroy"
destroyBtn.addEventListener('click', nandleDestroyButtonClick);