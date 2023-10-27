
// Anket sual/cavab mellumatlarinin formalasdirilmasi

let surveyDatabase = [];

// get User data

class User {
  constructor(id, name, surname, email, country, counter, age, gender) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.country = country;
    this.counter = counter;
    this.age = age;
    this.gender = gender;
  }
}

// get question data (Questions, Answers, Correct answer)

// class Questions {
//   constructor(id, question) {
//     this.id = id;
//     this.question = question;
//   }
// }

// let question = new Questions(1, "First question");

// class Answers {
//   constructor(id, text, type, order) {
//     this.id = id;
//     this.text = text;
//     this.type = type;
//     this.order = order;
//   }
// }

// let answer = [
//   new Answers(1, "First option", 1, 1),
//   new Answers(2, "Second option", 1, 2),
//   new Answers(3, "Third option", 1, 3),
//   new Answers(4, "Fourth option", 1, 4),
// ];

// let questionnaireMatrix = [
//   {
//     question: new Questions(1, "First question"),
//     answers: [
//       new Answers(1, "First option", 1, 1),
//       new Answers(2, "Second option", 1, 2),
//       new Answers(3, "Third option", 1, 3),
//       new Answers(4, "Fourth option", 1, 4),
//     ],
//     correctOption: [],
//     selectedOption: [],
//     userID: new User(1, "John", "Doe", "jd@mail.com", "England", 3, 33),
//   },
//   {
//     question: new Questions(1, "Second question"),
//     answers: [
//       new Answers(1, "First option", 1, 1),
//       new Answers(2, "Second option", 1, 2),
//       new Answers(3, "Third option", 1, 3),
//       new Answers(4, "Fourth option", 1, 4),
//     ],
//     correctOption: [],
//     selectedOption: [],
//     userID: new User(1, "John", "Doe", "jd@mail.com", "England", 3, 33),
//   },
// ];

// ===================================================================================

// let questionnaire = [
//   {
//     question: {
//       id: 1,
//       question: "Question-1",
//     },
//     answer: [
//       {
//         id: 1,
//         text: "Option-1",
//         type: 1,
//         order: 1,
//       },
//       {
//         id: 2,
//         text: "Option-2",
//         type: 1,
//         order: 2,
//       },
//     ],
//     correctOption: [2, 4],
//     selectedOption: [1, 4],
//     user: {
//       id: 1,
//       name: "John",
//       surname: "Doe",
//       email: "jd@mail.com",
//       country: "England",
//       counter: "2",
//       age: "25",
//       gender: "male",
//     },
//   },
// ];

// ==========================================================

const customerLocation = document.querySelector(".survay-body-content .row");
const DATA = JSON.parse(localStorage.getItem("data"));
let customer;

if (Array.isArray(DATA) && DATA.length > 0) {
  customer = DATA.map((userData) => {
    return new User(
      userData.id,
      userData.name,
      userData.surname,
      userData.email,
      userData.country,
      userData.counter,
      userData.age,
      userData.gender
    );
  });
}

console.log(customer);

if (customerLocation) {
  customer.forEach((user) => {
    const userElem = document.createElement("div");
    userElem.className = "col-md-3 user";
    userElem.innerHTML = `
      <h3>${user.name} ${user.surname}</h3>
      <p>${user.email}</p>
      <p>${user.country}</p>
      <p>${user.age}</p>
    `;
    customerLocation.appendChild(userElem);
  });
}
