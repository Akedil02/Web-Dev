let user = { name: "John", age: 30 };
console.log(user.name);
user.isAdmin = true;
delete user.age;
console.log(user);