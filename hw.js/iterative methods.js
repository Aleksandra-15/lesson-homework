//7.Отримати загальну суму балансу (поле balance) всіх користувачів

const calculateTotalBalance = [3416, 10044, 2156, 5300];
const user = calculateTotalBalance.reduce((acc, value) => acc + value);

console.log(user); // 20916

//8.Масив імен всіх користувачів у яких є друг із зазначеним ім'ям.

const getUsersWithFriend = (users, friendName) => [
  { name: "Sharlene Bush", friend: "Sheree Anthony" },
  { name: "Elma Head", friend: "Sheree Anthony" },
];
const user3 = getUsersWithFriendz.reduce((users, friendName) => {
  return users + friendName;
}, []);
console.log(getUsersWithFriend(users, "Briana Decker")); // [ 'Sharlene Bush', 'Sheree Anthony' ]
console.log(getUsersWithFriend(users, "Goldie Gentry")); // [ 'Elma Head', 'Sheree Anthony' ]

//9. Масив імен (поле name) людей, відсортованих в залежності від кількості їх друзів (поле friends)

const getNamesSortedByFriendsCount = [
  { name: "Moore Hensley", friend: 2 },
  { name: "Sharlene Bush", friend: 7 },
  { name: "Elma Head", friend: 5 },
  { name: "Carey Barr", friend: 6 },
  { name: "Blackburn Dotson", friend: 9 },
  { name: "Sheree Anthony", friend: 4 },
  { name: "Ross Vazquez", friend: 8 },
];

const users = (a, b) => a.friend - b.friend;
const usersWay = (a, b) => a.friend - b.friend;

console.log(getNamesSortedByFriendsCount.sort(users));
const names = (a, b) => a.name.localeCompare(b.name);

console.log(getNamesSortedByFriendsCount.sort(names));
// [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez' ]

//10.Отримати масив всіх умінь всіх користувачів (поле skills), при цьому не має бути повторюваних умінь і вони повинні бути відсортовані в алфавітному порядку.

const getSortedUniqueSkills = [
  {
    id: "289",
    skill: ["ipsum", "nulla", "proident", "adipisicing", "lorem", "anim"],
  },
  {
    id: "733",
    skill: ["mollit", "ex", "culpa", "elit", "irure", "laborum", "non"],
  },
  {
    id: "022",
    skill: ["nostrud", "commodo", "tempor", "velit", "amet", "veniam"],
  },
];

const sortSkills = getSortedUniqueSkills.reduce((acc, skills) => {
  skills.skill.forEach((skil) => {
    acc[skil] = (acc[skil] || 0) + 1;
  });
  return acc;
}, []);
console.log(sortSkills);

// [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit', 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]
