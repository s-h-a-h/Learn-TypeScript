// js object syntax
let user = {
    name: "Shah",
    isAdmin: false,
    isActive: true
}
// returning object from function
function createUser(): { name: string, isAdmin: boolean } {
    return {
        name: "Shah",
        isAdmin: true
    }
};

function userSubscription({ }): void { }
userSubscription({ name: "Shah", isPaid: true })

function createCourse(cName: string, rate: number): { courseName: string, price: number } {
    return {
        courseName: cName,
        price: rate
    }
}

createCourse("Learn ts", 2000)
