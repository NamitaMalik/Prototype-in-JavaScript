**Prototype in JavaScript**

We always say that **JavaScript** is a **dynamic** language. But, what makes **JavaScript** a dynamic language? Answer to this question is **"Prototype"**.
Dynamic behaviour of JavaScript can be achieved through **Prototype**. One can add, remove, update a class or object on fly in **JavaScript**.

Now, let us take a situation where we can make use of this **prototype** property. During one of my gaming projects, I had encountered a situation where I had to generate a random number between specific range at many places. Since the same logic was getting repeated at lot of places, therefore I thought of making a getRandom() utility as given below:

```
Math.__proto__.getRandom = function(x,y){ //Adding getRandom function to Math object
return parseInt(x + (Math.random()*(y-x))) //Our logic for getting a random number
}
```

This function gives us a random number.

Note: In objects, we refer property __proto__ while in function, we use prototype. Both are same.

In the above code, we updated the **Math** object by adding our own getRandom() function. I wrote this getRandom() function at the beginning of the code and accessed it everywhere.

Well..do you want to check the above code? Let's check if it works at all?

Let us try to find a random number between 45 and 65 and check the results.

```
Math.getRandom(45,65); //Passing the range in which we need to generate a random number
```
I got ```56``` as the output which is a number between 45 and 65.

This is how **JavaScript** is a **dynamic** language, we tweaked a well defined JavaScript object according to our own sweet wish!