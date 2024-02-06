// singleton
// Object.create

// object literals

const mySym = Symbol("kye1");

const JsUser = {
    name: "Aritra",
    "full name": "Aritra Sarkar",
    [mySym] : "mykey1",
    age: "26",
    email: "aritra@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

console.log(JsUser.email);
console.log(JsUser["email"]);
console.log(JsUser["full name"]);
console.log(JsUser[mySym]);

JsUser.email = "saritra6464@gmail.com";
//Object.freeze(JsUser);
JsUser.email = "saritra33@gmail.com";
console.log(JsUser);

JsUser.greeting = function() {
    console.log("Hello JS user");
}
JsUser.greetingTwo = function() {
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());