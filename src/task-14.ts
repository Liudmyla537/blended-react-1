// Функція fetchMessage повертає проміс, який повертає рядок.

function fetchMessage(): Promise<string> {
  return new Promise((resolve) => {
    resolve("Hello from server!");
    // resolve(123);
  });
}

fetchMessage()
    .then(message => console.log(message));

// Завдання:

// Додайте до функції явну типізацію, яка вказує, що вона повертає проміс який приводиться до рядка.
// Переконайтеся, що якщо message має тип відмінний від рядка, то виникає помилка.
