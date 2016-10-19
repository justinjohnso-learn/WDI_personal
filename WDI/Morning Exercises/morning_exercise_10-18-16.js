// Question 1
var a = 5;
var b = 4;
a = b;
console.log('Question 1: a = ',a);
console.log('Question 1: b = ',b);
  //At the end of this program, what are the values of a and b? Try to explain, in plain English, how you got your answer for each one.
    // a = b makes var a the same as var b, hence 4

// Question 2
var e = 3;
var f = 9;
var g = e + f; //g=12
f = g; //f=12
e = 5; //e=5
console.log('Question 2: e = ',e);
console.log('Question 2: f = ',f);
console.log('Question 2: g = ',g);
  //At the end of this program, what are the values of e, f, and g? Try to explain, in plain English, how you got your answer for each one.
    // e = 5, f = 12, g = 12
    // e is redefined as 5; g is defined as 12; f is redefined as g, or 12

// Question 3
var weather = "cloudy"
weather === "cloudy"
console.log('Question 3: weather = ',weather);
console.log('Question 3: weather === "cloudy" returns ',weather==="cloudy");
  // What is the difference between the first two statements? Explain your answer.
    // First statement sets var weather to 'cloudy'
    // Second statement returns true, because var weather == 'cloudy'

// Question 4
var x = 2;

if(x === 3) {
  console.log("In Question 4, the sushi is tasty!");
} else if (x > 0) {
  console.log("In Question 4, the sushi is cheap and good for the value");
} else {
  console.log("In Question 4, we couldn't find any sushi!")
}
  //Imagine that you run this code. What sushi-based statement would be the output? Explain your answer.
    // Returns the sushi is cheap and good for the value, because x (2) > 0

// Question 5
  var q = "4" + 10;
  console.log("Question 5: q = ",q);
  //What are the two datatypes being added in the definition of q? What would happen here and why?
    //String and integer
    //It would return (410)

// Question 6
 var turtles = ["Leonardo", "Raphael", "Michelangelo", "Donatello"];
 console.log('Question 6: turtles[0] = ',turtles[0]);
 console.log('Question 6: turtles[1] = ',turtles[1]);
 console.log('Question 6: turtles[2] = ',turtles[2]);
 console.log('Question 6: turtles[3] = ',turtles[3]);
 console.log('Question 6: turtles[4] = ',turtles[4]);
  //What is the index value of "Michelangelo"?
    //turtles.indexOf('Michelangelo') = 2
    //the third item in the array, but arrays count from 0

// Question 7
var turtles = ["Leonardo", "Raphael", "Michelangelo", "Donatello"]

for(i = 0; i < 2; i++){
  console.log('Question 7: turtles[' + i + '] = ',turtles[i]);
}
  //Examine the above code and imagine that you run it.
  //What do you expect the outcome will be? Explain your answer.
    //turtles[0]= Leonardo
    //turtles[1]= Raphael
  //Would you make any changes to this code?
    //it currently only logs the first two turtles (i < 2, so i = 0,1)
    //I would change it to log all 4
    //or to retain functionality, change i < 2 to i <= 1
      //same thing, reads more clearly

// Question 8
var turtles = ["Leonardo", "Raphael", "Michelangelo", "Donatello"]

 turtles.forEach(function(turtle) {
   console.log("Question 8:", turtle + "!");
 });
  //Examine the above code and imagine that you run it.
  //What do you expect the outcome will be? Explain your answer.
    //Leonardo!, Raphael!, Michelangel!, Donatello!
  //Why would you use a forEach loop instead of the for loop in question 7?
    //less code?

// Question 9
var turtles = {};

turtles.names = ["Leonardo", "Raphael", "Michelangelo", "Donatello"];
turtles.group = "Ninga Turtles";

turtles.message = turtles.names.map(function(turtle) {
  return turtle + " is one of the " + turtles.group;
})

console.log("Question 9:", turtles.names);
console.log("Question 9:", turtles.message);
  //Examine the above code and imagine that you run it.
  //What do you expect the outcome will be? Explain your answer.
    //Leonardo, Raphael, Michelangelo, Donatello
    //Returns each name, "is one of the Ninga Turtles"
  //What is different between .forEach and .map? When would you want to use .map?
    //.forEach applies the function to each element in an array
    //.map creates a new array with the results of applying the function to each element in an array

// Question 10
var turtles = {
  leonardo = {
    name: "Leonardo",
    color: "blue",
    weapon: "katanas",
    named_after: "Leonardo da Vinci"
  }
}

turtles.donatello = {};
turtles.donatello.name= "Donatello";
turtles.donatello.color= "purple";
turtles.donatello.weapon= "staff";
turtles.donatello.named_after= "Donato di Niccolò di Betto Bardi";

turtles["raphael"] = {};
turtles["raphael"]["name"] = "Raphael";
turtles["raphael"]["color"] = "red";
turtles["raphael"]["weapon "]= "twin sai";
turtles["raphael"]["named_after"] = "Raffaello Sanzio da Urbino";

console.log("Question 10:", turtles.raphael.name);
console.log("Question 10:", turtles["donatello"]);
console.log("Question 10:", turtles)
  //What will be the output of the console.logs?
    //Raphael
    //object for Donatello
    //array for all turtles
  //How would you console.log who Donatello is named after?
    //console.log(turtles.donatello.named_after);
  //Which character in the turtle object was created using bracket notation? What is the difference between dot and bracket notation?
    //Raphael
    //Different ways to access different parts of the object
  //How would you add Michelangelo to the turtles object? Give him the color orange, nunchucks for weapon, and note that he is named after Michelangelo Buonarroti.
    //turtles.michelangelo = {};
    //turtles.michelangelo.name = "Michelangelo";
    //turtles.michelangelo.color = "orange";
    //turtles.michelangelo.weapon = "nunchucks";
    //turtles.michelangelo.named_after = "Michelangelo Buonarroti";















