// Theory

// const array = ['Privet!', 2, 3, 42]
// // const arrayStrings = ['a', 'b', 'c']
// // const array = new Array(1, 2, 3, 42)
// // console.log(array.length)

// console.log(array[0])
// console.log(array[array.length - 1])
// console.log(array)
// // console.log(array[10])
// array[array.length] = 'Ruslan'
// console.log(array)

const inputElement = document.getElementById("title");
const createBtn = document.getElementById("create");
const listElement = document.getElementById("list");

// console.log(inputElement.value)

// const notes = ["записать блок про массивы", "рассказать про теорию объектов"];
// function render() {
//   // for (let i = 0; i < notes.length; i++) {
//   //     listElement.insertAdjacentHTML("beforeend", getNoteTemplate(notes[i]));
//   // }

//   for (let note of notes) {
//     listElement.insertAdjacentHTML("beforeend", getNoteTemplate(note));
//   }
// }
// render();

// createBtn.onclick = function () {
//   if (inputElement.value.length === 0) {
//     return;
//   }
//   listElement.insertAdjacentHTML(
//     "beforeend",
//     getNoteTemplate(inputElement.value)
//   );
//   inputElement.value = "";
// };

// function getNoteTemplate(title) {
//   return `<li
//     class="list-group-item d-flex justify-content-between align-items-center"
//     >
//     <span>${title}</span>
//     <span>
//       <span class="btn btn-small btn-success">&check;</span>
//       <span class="btn btn-small btn-danger">&times;</span>
//     </span>
//     </li>`;
// }

/**
 * Object Theory

const person = {
firstName: 'Ruslan',
lastName: 'Minin',
year: 1986,
hasGirfriend: true,
languages: ['ru', 'en', 'he'],
getFullName: function() {
    console.log(person.firstName + ' ' + person.lastName)
}
}

console.log(person.year)
console.log(person['languages'])
const key = 'hasGirfriend'
console.log(person[key])
person.hasGirfriend = false
console.log(person['hasGirfriend'])
person.getFullName()

 */

const notes = [
  {
    title: "записать блок про массивы",
    completed: false,
  },
  {
    title: "рассказать про теорию объектов",
    completed: true,
  },
];

listElement.onclick = function (event) {
  if (event.target.dataset.index) {
    const index = parseInt(event.target.dataset.index);
    const type = event.target.dataset.type;

    if (type === "toggle") {
      notes[index].completed = !notes[index].completed;
    } else if (type === "remove") {
      notes.splice(index, 1);
    }
  }
  render();
};

function render() {
  listElement.innerHTML = "";
  if(notes.length === 0) {
    listElement.innerHTML = '<p>Заметки помогают дисциплине</p>'
  }
  for (let i = 0; i < notes.length; i++) {
    listElement.insertAdjacentHTML("beforeend", getNoteTemplate(notes[i], i));
  }
}
render();

createBtn.onclick = function () {
  if (inputElement.value.length === 0) {
    return;
  }
  const newNote = {
    title: inputElement.value,
    completed: false,
  };
  notes.push(newNote);
  render();
  inputElement.value = "";
};

function getNoteTemplate(note, index) {
  return `<li
      class="list-group-item d-flex justify-content-between align-items-center"
      >
      <span class = "${note.completed ? "text-decoration-line-through" : ""}">${
    note.title
  }</span>
      <span>
        <span class="btn btn-small btn-${
          note.completed ? "warning" : "success"
        }" data-index="${index}"
         data-type="toggle">&check;</span>
        <span class="btn btn-small btn-danger" data-type="remove" data-index="${index}">&times;</span>
      </span>
      </li>`;
}
