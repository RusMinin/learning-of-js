const names = ['Ruslan', 'Igor', 'Maria', 'Bublik']

// names.push('Alena')
// names.unshift('Alena')
// const firstName = names.shift()
// const name = names.pop()
// console.log(names, name)

// console.log(names.reverse())
// const letters = ['e', 'd', 'c', 'b', 'a']
// console.log(letters.toSorted())
// console.log(names)

// console.log(names.toSpliced(2, 2))
// console.log(names)

// const greatWoman = 'Maria'
// const index = names.indexOf(greatWoman)
// console.log(index)
// const newNames = names.with(index, 'Elena Velikaya')
// console.log(names)
// console.log(newNames)

// console.log(names[index])
// names[index] = 'Elena Velikaya'
// console.log(names)

// const capitalNames = names.map(function(name, index) {
    // return name.toLocaleUpperCase()
    // if(index === 2) {
        // return 'Maria Velikaya'
    // }
    // return name
// })
// // console.log(capitalNames)

// // console.log(names.includes('Igor')) 
// // console.log(names.indexOf('Igor!') !== -1)



// let findedPerson

// for (let person of people) {
//     if (person.budget === 4200){
//         findedPerson = person
//     }
// }
// console.log(findedPerson)
// const findedPerson = people.find((p) => p.budget === 4200)
// console.log(people.indexOf({name: 'Ruslan', budget: 7520}))

// const finded = people.findIndex(function(person) {
//     return person.budget === 4200
// })
// Находим нужный элемент массива по индексу с помощью метода findIndex который возвращает
// булевое значение и если значение true то элемент находиться а если false то выводит udefind
// С помощью метода with первым параметром принимаем найденный элемент а вторым параметром 
// меняем его 
// const changeArray = people.with(finded, 42)
// console.log(changeArray)



// const filtered = people.filter(function(p) {
//     return p.budget > 5000
// })
// Методом filter мы фильтруем массив возвращая элементы массива которые подходят под заданное 
// условие.Оригинальный массив не меняется а возвращается другой массив
// console.log(filtered)
// console.log(people)
// let sumBudget = 0
// const filtered = people.filter(function(p) {
//     return p.budget > 5000
// })
// console.log(filtered)
// filtered.forEach(function(p) {
//     sumBudget += p.budget
// })
// console.log(sumBudget) 

//  const sumBudget = people
//  .filter(p => p.budget > 5000)
//  .map(p => p.budget)
//  .reduce((acc, p) => acc + p, 0)

//  console.log(sumBudget)

//Методом filter возвращаем все элементы массива соответствующие условию, filter возвращает 
// новый массив не меняя оригинала.Метод map пробегает по всему новому массиву записывая в 
// в параметр p найденное значение и далее reduce принимает два параметра acc который равен 0
// и p который равен значению ключа budget .Далее происходит сложение всех найденных значений


// const people = [
//     {name: 'Ruslan', budget: 4200},
//     {name: 'Maria', budget: 15100}, 
//     {name: 'Ilia', budget: 300},
//     {name: 'Oleg', budget: 7520},
// ]

//  const sumBudget = people.filter(p => p.budget > 5000)
 
//  console.log(sumBudget)

// const byBudget = (p) => p.budget > 5000
// const pickBudgetNumber = (p) => p.budget
// const calculation = function(acc, p) { return (acc + p, 0)}

// const sumBudget = people
// .filter(byBudget)
// .map(pickBudgetNumber)
// .reduce(calculation)

// console.log(sumBudget)

// const string = 'Привет как дела'
// const reversed = string.split('').reverse().join('')

// console.log(reversed)