const bunny = {
    name: "Bunny",
    age: 3,
    isHappy: true,
};
// values declared above
let bunnyInfo = `My name is ${bunny.name}, I am ${bunny.age} years old, and it is ${bunny.isHappy} I am happy`;
// about rabbit to be checked in console
console.log(bunnyInfo);
// to display the bunny info in the webpage
document.getElementById("bunnyInfo").textContent = bunnyInfo;