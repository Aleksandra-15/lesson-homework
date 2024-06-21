//1.Отримати масив імен усіх користувачів (поле name).
const getUserNames = (users) => {
  return users.map((user) => user.name);
};

// Example usage:
const users = [
  { id: "1", name: "Moore Hensley" },
  { id: "2", name: "Sharlene Bush" },
  { id: "3", name: "Ross Vazquez" },
  { id: "4", name: "Elma Head" },
  { id: "5", name: "Carey Barr" },
  { id: "6", name: "Blackburn Dotson" },
  { id: "7", name: "Sheree Anthony" },
];

console.log(getUserNames(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Ross Vazquez', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony' ]

//2. Отримати масив об'єктів користувачів за кольором очей (поле eyeColor).
const getUsersWithEyeColor = (users1, color) => {
  return users1.filter((user1) => user1.eyeColor);
};

const users1 = [
  { eyeColor: "blue", name: "Moore Hensley" },
  { eyeColor: "blue", name: "Sharlene Bush" },
  { eyeColor: "green", name: "Ross Vazquez" },
  { eyeColor: "brown", name: "Elma Head" },
  { eyeColor: "blue", name: "Carey Barr" },
  { eyeColor: "brown", name: "Blackburn Dotson" },
  { eyeColor: "green", name: "Sheree Anthony" },
];

console.log(getUsersWithEyeColor(users1, "blue")); // [об'єкт Moore Hensley, об'єкт Sharlene Bush, об'єкт Carey Barr]

//3.Отримати масив імен користувачів за статтю (поле gender).
const getUsersWithGender = (maleName, gender) => {
  return maleName.map((male) => male.gender);
};
const maleName = 
  [
    { gender:male, eyeColor: "blue", name: "Moore Hensley" },
    { gender:female, eyeColor: "blue", name: "Sharlene Bush" },
    { gender:male, eyeColor: "green", name: "Ross Vazquez" },
    { gender:female, eyeColor: "brown", name: "Elma Head" },
    { gender:male, eyeColor: "blue", name: "Carey Barr" },
    { gender:male, eyeColor: "brown", name: "Blackburn Dotson" },
    { gender:female, eyeColor: "green", name: "Sheree Anthony" },

];
console.log(getUsersWithGender(maleName, "male")); // [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]

