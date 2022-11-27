function addTwo(numb: number): number {
    return numb + 2;
}
// addTwo(2);


function getUpperCase(value: string): string {
    return value.toUpperCase();
}
// console.log(getUpperCase("shah"));

function signUpUser(name: string, email: string, password: string, isPaid: boolean = false) {
    return `${name}, ${email}, ${password}, ${isPaid}`;
}
// console.log(signUpUser("shah", "Raza", "Heelsdhiuw"));

// Using array function
const greeting = (name: string): string => {
    return `Hello ${name}, Good morning! 😊`
}
// console.log(greeting("Shah"));

const heros: string[] = ["thor", "spiderman", "ironman", "1"];

heros.map((hero: string): string => {
    console.log(`Hero is ${hero}`);
    return hero;
})

const consoleLogError = (errMsg: string): void => {
    console.log(errMsg);
}
consoleLogError("1")

// never => used to throw error
const handleError = (errMsg: string): never => {
    throw new Error(errMsg);
}