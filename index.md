#Prototype in JavaScript

We always say that **JavaScript** is a **Dynamic** language. But, what makes **JavaScript** a **Dynamic** language? Answer to this question is **"Prototype"**.

**Dynamic** behaviour of **JavaScript** can be achieved through **Prototype**. One can add, remove, update **properties/function** of a **function/object** on fly in **JavaScript**.

First, let me share a use case of **prototype** in my current project then we will understand **Prototype**.

**USE CASE**: In one of my **HTML5** Gaming project, we are generating lots of random number, and maximum of them are in a range e.g. generating random number between X to Y.

How were we achieving this in my project? We made a common utility js file, and defined a **function** there with named **getRandom** which were having all the logic of generating random number. e.g.

**CommonUtility.js**
```JavaScript
getRandom = function (min, max) {  // Adding getRandom function to Math object
    if (min && max) {
        // If min and max both are provided
        if(max <= min) {
            return new Error("Max number can not be equal or less then min");
        } else {
            return parseInt(min + (Math.random() * (max - min))); // Our logic for getting a random number
        }
    } else if (min) { //  If only min provide, then that min will be max and min will be 0
        if(min < 1) {
            return new Error("Min number can not be less 1");
        } else {
            return parseInt(Math.random() * min)
        }
    } else { // If min and max both are not provided then return whatever Math.random returns.
        return Math.random();
    }
};
```

And then, where were we needing that **getRandom** **function**, we were requiring that module/js file, and were calling **getRandom** **function** on that object, which is having **getRandom** **function**. e.g.

```JavaScript
var commonUtility = require("commonUtility") // requiring that common module.
commonUtility.getRandom(45, 65);
```

How are we achieving this in my project now?? We injected **getRandom** **function** to **Math** class, with the help of **__proto__**. e.g.

```JavaScript
Math.__proto__.getRandom = function (min, max) {  // Adding getRandom function to Math object
    if (min && max) {
        // If min and max both are provided
        if(max <= min) {
            return new Error("Max number can not be equal or less then min");
        } else {
            return parseInt(min + (Math.random() * (max - min))); // Our logic for getting a random number
        }
    } else if (min) { //  If only min provide, then that min will be max and min will be 0
        if(min < 1) {
            return new Error("Min number can not be less 1");
        } else {
            return parseInt(Math.random() * min)
        }
    } else { // If min and max both are not provided then return whatever Math.random returns.
        return Math.random();
    }
};
```

After injecting **getRandom** **function** to **Math** object, we can call **getRandom** **function** on **Math** object, just like ```Math.radom()```. Well.. do you want to check the above code? Let's check if it works at all?

Let us try to find a random number between 45 and 65 twice, both time we will get different random number, and if we call ```getRandom()``` **function** with one number then it will return any random number where max number will be that number.

```JavaScript
console.log(typeof Math.getRandom === "function"); // true
console.log(Math.getRandom(45, 65)); // Passing the range in which we need to generate a random number
console.log(Math.getRandom(45, 65)); // getRandom function will return any random number between 45 to 65
console.log(Math.getRandom(65)); // getRandom function will return any random number between 45 to 65
```

We do not need to require any common utility module/js file, just have to call ```Math.getRandom(x, y)```, that's it, and we will get random number between that range.

Now, may be you are thinking that, from where **__proto__/prototype** property came?? And how all the objects getting that behaviour, which are injecting with the help of **__proto__/prototype**.

All the **JavaScript** **functions** have a property named **prototype**, while all the **JavaScript** **objects** have property named **__proto__**. Both the property( **prototype** in **functions** and **__proto__** in **objects**) are set by **JavaScript** itself. And whatever we are reading on any **JavaScript** object, first **JavaScript** will search into that object only, if it do not fine one, then it will search into **__proto__** object. So whatever we inject into **__proto__** object, will be available in the future.

This is how **JavaScript** is a **Dynamic** language, we tweaked a well defined **JavaScript** object according to our own sweet wish!

Follow Me
---
[Github](https://github.com/NamitaMalik)

[Twitter](https://twitter.com/namita13_04)

[LinkedIn](https://in.linkedin.com/in/namita-malik-a7885b23)

[More Blogs By Me](https://namitamalik.github.io/)