// Функція fetchUsers повертає проміс, який через fetch отримує список користувачів з API.




// interface User {
//     id: number;
//     name: string;
//     username: string;
// }


// const fetchUsers = async(): Promise<User[]> => {
//     const response = await fetch("https://jsonplaceholder.typicode.com/users");
//     console.log(response);
    
//   const data = await response.json();
//   return data;
// };

// fetchUsers()
//     .then((users) => console.log(users));




// Завдання:

// Оголосіть інтерфейс User для користувача (перевірте, які властивості користувача містяться у відповіді бекенда).
// Типізуйте функцію fetchUsers.