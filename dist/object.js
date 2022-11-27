"use strict";
let user = {
    name: "Shah",
    isAdmin: false,
    isActive: true
};
function createUser() {
    return {
        name: "Shah",
        isAdmin: true
    };
}
;
function userSubscription({}) { }
userSubscription({ name: "Shah", isPaid: true });
function createCourse(cName, rate) {
    return {
        courseName: cName,
        price: rate
    };
}
createCourse("Learn ts", 2000);
//# sourceMappingURL=object.js.map