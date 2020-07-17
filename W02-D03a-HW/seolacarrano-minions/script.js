const minions = ['bob', 'kevin', 'stuart', 'dave', 'jerry', 'mark', 'tim', 'phil', 'carl']

//for each
minions.forEach((currentElement) => {
    console.log(currentElement + " here");
})

//map
const capitilizedMinions = minions.map((newName, index) => {
    if (index !== 1) {
        first = newName[0].toUpperCase()
        last = newName.slice(1)
        all = first + last
        return all
    } else {
        return newName
    }
});
console.log(capitilizedMinions)

//every
function isCapitalized(element){
    return element[0] === element[0].toUpperCase()
}
console.log(capitilizedMinions.every(isCapitalized));

//filter
const actuallyCapitalizedMinions = capitilizedMinions.filter((element)=>{
    if (element[0] === element[0].toUpperCase()){
      return element
    } else {
      return 
    }
  });

  console.log(actuallyCapitalizedMinions)

//every 
/*function isCapitalized(element){
    return element[0] === element[0].toUpperCase()
}
console.log(actuallyCapitalizedMinions.every(isCapitalized));*/


//find
const uncapitilizedMinions = capitilizedMinions.find((element)=>{
    return element[0] !== element[0].toUpperCase()
});
console.log (uncapitilizedMinions);

//findIndex
const find = capitilizedMinions.findIndex(minion => minion === "kevin");
console.log(find);

//reduce
const minionNameLengths = capitilizedMinions.map((element, index) => {
   return element.length;
})

console.log(minionNameLengths)


const sumUp = minionNameLengths.reduce((acc,cur)=>{
    return acc+cur
})
console.log(sumUp)

//some
const allLengths = capitilizedMinions.some((element) => {
  return element.length >= 6
});

console.log(allLengths);

// sort
function compareMinions(a, b) {
  if (a.length < b.length) {
    return -1;
  }
  if (a.length > b.length) {
    return 1;
  }
  // a must be equal to b
  return 0;
}
const sorting = capitilizedMinions.sort(compareMinions);

console.log(sorting)


