// Write your solution here!

var cats = ["Milo", "Otis", "Garfield"]

function destructivelyAppendCat(Ralph){
    cats.push(Ralph);
    return cats;
}
function destructivelyPrependCat(Ralph){
    cats.unshift(Ralph);
    return cats;
}
function destructivelyRemoveLastCat(){
    cats.pop();
    return cats;
}
function destructivelyRemoveFirstCat(Milo){
    cats.shift(Milo)
    return cats;
}
function appendCat(Broom){
    var name_1=[...cats,Broom];
    return name_1;
}
function prependCat(Arnold){
    var name_2=[Arnold,...cats];
    return name_2;
}
function removeLastCat(){
    var kittens = cats.slice(0,cats.length-1);
    return kittens;
}
function removeFirstCat(){
    var kittens = cats.slice(1)
    return kittens;
}



