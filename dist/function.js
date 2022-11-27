"use strict";
function addTwo(numb) {
    return numb + 2;
}
function getUpperCase(value) {
    return value.toUpperCase();
}
function signUpUser(name, email, password, isPaid = false) {
    return `${name}, ${email}, ${password}, ${isPaid}`;
}
const greeting = (name) => {
    return `Hello ${name}, Good morning! 😊`;
};
const heros = ["thor", "spiderman", "ironman", "1"];
heros.map((hero) => {
    console.log(`Hero is ${hero}`);
    return hero;
});
const consoleLogError = (errMsg) => {
    console.log(errMsg);
};
consoleLogError("1");
//# sourceMappingURL=function.js.map