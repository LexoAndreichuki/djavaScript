const names = prompt("what is your name?");
const age = prompt("what is your age??");
function myFirstApp(name, age) {
  alert(
    `hello, my name is ${name} and it my first programm! and i am ${age} years old`
  );

  function showSkills() {
    let skills = ["html", "css", "js"];
    document.write(skills[0], skills[1], skills[2]);
  }
  showSkills();
  checkAge(age);
}

function checkAge(age) {
  if (age > 18) {
    alert("you are cool");
  } else {
    alert("continue studing " + names);
  }
}

myFirstApp(names, age);
