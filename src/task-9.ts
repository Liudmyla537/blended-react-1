// Завдання:

// 1. Створіть інтерфейс Container, що містить:

// масив items однакового типу для зберігання елементів.
// метод addItem, який додає елемент до контейнера.
// метод getItem, який повертає елемент за індексом.

// 2.  Створіть два контейнери:

// numberContainer, який містить числа та використовує відповідну типізацію.
// stringContainer, який містить рядки та також використовує відповідну типізацію.

// 3. Використовуйте методи addItem, getItem для перевірки роботи контейнера.

// 4. Створіть функцію getLastElement, яка приймає масив елементів контейнера Container і повертає останній елемент масиву.

// 5. Переконайтесь, що функція getLastElement працює коректно для різних типів контейнерів (масиви чисел, масиви рядків).

// Примітка:

// Контейнер має підтримувати тільки один тип елементів.




// // 1. Створили загальний інтерфейс Container 
// interface Container<T>{
//     items: T[];
//     addItem(item: T): void;
//     getItem(index: number): T;
// }

// // 2. Створила 2 контейнери numberContainer та stringContainer
// const numberContainer: Container<number> = {
//     items: [1, 2, 3],

//     //  3 . Використала методи addItem та getItem
//     addItem(item) {
//         this.items.push(item);
//     },
//     getItem(index) {
//         return this.items[index]
//     } 

// }

// const stringContainer: Container<string> = {
//     items: ["Alice", "Petya"],
//     addItem(item) {
//         this.items.push(item);
//     },
//     getItem(index) {
//         return this.items[index]
//     } 
// }

// // 4. Створила ф-цію getLastElement, яка приймає масив елементів контейнера Container і повертає останній елемент масиву.

// function getLastElement<T>(items: T[]): T {
// return items[items.length - 1]
// };


// // 5. Перевірка
// numberContainer.addItem(4);
// console.log(getLastElement(numberContainer.items));

// stringContainer.addItem("Olha");
// console.log(getLastElement(stringContainer.items));


