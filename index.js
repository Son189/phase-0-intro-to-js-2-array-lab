// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
    return cats.push(name);
}

function destructivelyPrependCat(name) {
    cats.unshift(name);
    return cats;
}

function destructivelyRemoveLastCat() {
    cats.pop();
    return cats;
}

function destructivelyRemoveFirstCat() {
    cats.shift();
    return cats;
}

function appendCat(name) {
    var name1 = [...cats, name];
    return name1;
}

function prependCat(name) {
    var name2 = [name, ...cats];
    return name2;
}

function removeLastCat(){
    var cats= cats.slice(0,cats.length-1);
    console.log("Original:",cats);
    console.log ("new",cats);
    console.log(cats);
}
  function removeFirstCat(){
 var cats= cats.slice(0);
    return cats;
    cats.slice(0);
 
}