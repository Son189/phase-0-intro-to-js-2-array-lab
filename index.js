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
    var catts= cats.slice(0,cats.length-1);
    return catts;
  }

  function removeFirstCat(){
    var catss= cats.slice(1);
    return catss;
  }