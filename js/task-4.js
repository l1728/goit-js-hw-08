 // Отримання посилання на форму логіна
  const loginForm = document.querySelector('.login-form');

  // Додавання обробника події submit до форми
  loginForm.addEventListener('submit', function(event) {
    // Заборона перезавантаження сторінки під час відправлення форми
    event.preventDefault();

    // Отримання значень полів електронної пошти та паролю
    const emailInput = this.elements['email'];
    const passwordInput = this.elements['password'];

    // Очищення значень полів від пробілів по краях
    const emailValue = emailInput.value.trim();
    const passwordValue = passwordInput.value.trim();

    // Перевірка на заповненість полів форми
    if (emailValue === '' || passwordValue === '') {
      // Виведення повідомлення, якщо є незаповнені поля
      alert('All form fields must be filled in');
      return;
    }

    // Створення об'єкта з даними форми
    const formData = {
      email: emailValue,
      password: passwordValue
    };

    // Виведення об'єкта з даними у консоль
    console.log(formData);

    // Очищення значень полів форми
    this.reset();
  });
