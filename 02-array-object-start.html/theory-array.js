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

const people = [
    {name: 'Ruslan', budget: 4200},
    {name: 'Maria', budget: 15100},
    {name: 'Ilia', budget: 300},
    {name: 'Oleg', budget: 7520},
]

console.log(people.indexOf({ budget: 7520}))
