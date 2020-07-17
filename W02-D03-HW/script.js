const tamagotchi = {
name: "Meemoo", //Meemoo is my fish's name>.<
weight: 2,
age: 1,
birthday: "July 9th",
description: function() {
    console.log(`My name is ${this.name} and I am ${this.age} year old.`)
},
hungerLevel: 9,
happinessLevel: 10,
attentionLevel: 10,
lifeStage: "baby",
//time cases: 7am, 12pm, 6pm
isHungry: function (eatingtime){
  switch (eatingtime) {
      case "7am":
       console.log("I want breakfast")
       break;

      case "12pm":
       console.log("I want lunch")
       break;

      case "6pm":
       console.log("I want dinner")
       break;

      default:
          console.log("I'm not hungry")
  }
},
wantsToPlay: true,
isHappy: true,
needsAttention: true,
//option: candy, pizza, cheese
eat: function(food) {
  if(food==="candy"){
    this.happinessLevel += 1
    this.weight += 0.1
  }else if(food==="pizza"){
    this.happinessLevel += 1.5
    this.weight += 0.3
  }else if(food==="cheese"){
    this.happinessLevel += 0.5
    this.weight += 0.2
  }else{
    this.happinessLevel -= 0.5
    this.weight -= 0.5
  }
},
//option: yes or no
speak: function(talk){
  if(talk === "yes") {
    this.attentionLevel += 0.5
  } else {
    this.attentionLevel -= 0.5
  }
},
//option: yes or no
play: function(yay){
  if(yay==="yes"){
    this.happinessLevel += 2
  } else {
    this.happinessLevel -= 2
  }
}
}



//usage
//description of Meemoo, the tamagotchi
console.log(tamagotchi.description());

//Meemoo eats at 7am, 12pm, 6pm
console.log(tamagotchi.isHungry("7am"));

//When Meemoo eats candy, her happinesslevel goes up and gains weight.
console.log(tamagotchi.eat("cheese"))
console.log(tamagotchi.weight)
console.log(tamagotchi.happinessLevel)

//When Meemoo talks with me, her attention level goes up otherwise it goes down.
console.log(tamagotchi.speak("yes"));
console.log(tamagotchi.attentionLevel);

//When Meemoo plays with me, her happiness level goes up otherwise it goes down.
console.log(tamagotchi.play("yes"))
console.log(tamagotchi.happinessLevel)