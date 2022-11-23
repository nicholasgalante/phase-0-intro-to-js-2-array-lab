// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

destructivelyAppendCat = (name) => cats.push(name);
destructivelyPrependCat = (name) => cats.unshift(name);
destructivelyRemoveLastCat = () => cats.pop();
destructivelyRemoveFirstCat = () => cats.shift();

appendCat = (name) => {
    let newCatArray = [...cats, name];
    return newCatArray;
}

prependCat = (name) => {
    let newCatArray = [name, ...cats];
    return newCatArray;
}

removeLastCat = () => cats.slice(0, cats.length - 1);
removeFirstCat = () => cats.slice(1);