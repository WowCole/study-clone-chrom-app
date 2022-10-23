# Clone coding to learn basic JavaScript

    - Im going to clone simple chrome app called Momentum

## What can i learn?

1. How to make app to remember the User?
2. How can app get information of Time, Date,Weather, Geolocation?
3. How to bring random Photo, String Data?
4. How to save to local storage?
5. How to make To Do List in the app?

### why javascript is so popular?

1. In the past web was so static. counldnt be interavtive
2. Only programming language that can be used in front-end
3. Every web-browser include javascript

---

#### role of the Js,html,css

- JavaScript: Brain
- Html: main structure
- CSS: skin
  browser bring JS and CSS through the HTML

# Basic JS

- JS is different with Java (it changed thier name in the past for advertise purpose)

#### const VS let

- Const cant be change but let can be
- When i need to update some variable i should use let
- If i think in easy way if i use 'let' it just giving name or title to undifiend variable and give value whenever i want
- But constant it just tell to the JS that' This should this ' its like directly paring name with value

```
let a = 5;

a = 10;
```

- Var is too old method Dont USE!

#### booleans

- true or false

- null

  - nothing/none

- undifined
  - its allocated in memory but value is not given yet

#### array

- list
  - `const a=[1,2,3,4];`
  - `console.log(a[1]);`= 2
    - index is starting from 0
  - `a.push(5);`
    - add value in the last of array
  - `console.log(a);` = 1,2,3,4,5

#### object

- dictionary
  - match keys and value

```
const player ={
    name:"a",
    points: 10,
    fat:true,
};
```

- `console.log(player);`
  - =`{name:'a',points:10, fat:true};`
- `console.log(player.name)`
  - =`a`
- `console.log(player.points);`
- `console.log(player.fat);`
- `console.log(player["name"]);`
  - =`a`
- objects values can be update
  - `player.fat=false;`
- can add additional data in the objects
  - `player.lastName="woo"`

#### function

- if there is some code that frequently using then that code can make as a function so we can use same code more easey and briefly

```
function hello(a){
    console.log("Hello!"+"a")
}
```

- `hello()`
  - =`Hello!`
- function can made inside of the objects

```
const WHS = {
  name: "WHS",
  age:: "30",
  sayHello: function (otherPersonsName) {
    console.log("hello!" + otherPersonsName);
  },
};

WHS.sayHello();
```

#### conditionals

- if /or /and

  - if == `===`

    ```
    if(condition){
      ///condition === true
    }else {
      ///condition === false
    }
    ```

    ```
    const age= parseInt(prompt("How old are you?));

    if(isNan(age)){
      console.log("Please write a number");
    } else if (age <18>){
     console.log("You are too young.");
    } else{
      console.log("You can drink.");
    }
    ```

    - if isNaN is true then print("Please write a number")

  - and == `&&`

  - or == `||`

  - not == `!==`

- prompt("Hey")
  - Function for grab some string input from users
    - Its appear as alert type of looking

```
const age = prompt("How old are you ?");
```

- Alert screen will appear with input box and it will contain 'How old are you ?'

- `typeof` : show us type of the value

- `parseInt()` : change type of the value

```
console.log(typeof "15", typeof paresInt("15"))
-> string number
```

- `isNaN()`: is this not number?
- ``

#### JS can modify html in console

#### some grammers!!

##### `console.log()`

##### `console.dir()`

##### `getElements`

```

```

##### `querySelector()`

```

```

##### `Event`

```

```
