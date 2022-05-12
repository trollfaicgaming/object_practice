// written by chapel1337
// 5/12/2022

let information = new Object;

information = {
    name: undefined,
    age: undefined,
    hobby: undefined
}

let question1 = prompt("what is your name?");
let question2 = prompt("what is your age?");
let question3 = prompt("what is your favorite hobby?");

function inform() {
    // probably could've made this a little neater lol
    alert(
    "your name is " + information.name
     + "\n" + 
    "your age is " + information.age
    + "\n" +
    "your favorite hobby is " + information.hobby
    );
}

if (question1 || question2 || question3) {
    information.name = question1;
    information.age = question2;
    information.hobby = question3;
    inform();
} else {
    alert("you did not specify your name/age/favorite hobby")
    // can't put a break :(
}
