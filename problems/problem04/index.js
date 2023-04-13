const data = require("./puzzleinput04")

function howManyOverlapping(packOfElves){
    doops = 0;
    for(let i =0; i < packOfElves.length; i++){
        if(isOverlapping(packOfElves[i].elf1, packOfElves[i].elf2)){
            doops++;
        }
    }
    return doops;
}

function anyPartOverlaps(packOfElves){
    overlapping = 0;
    for(let j = 0; j < packOfElves.length; j++){
        if(anyOverlapping(packOfElves[j].elf1,packOfElves[j].elf2)){
            overlapping++;
        }
    }
    return overlapping;
}

function anyOverlapping(elf1, elf2){
    if(elf1.start >= elf2.start && elf1.start <= elf2.end || elf1.end <= elf2.end && elf1.end >= elf2.start ||elf2.start >= elf1.start && elf2.start <= elf1.end || elf2.end <= elf1.end && elf2.end >= elf1.start){
        return true;
    }
    return false;

}

function isOverlapping(elf1, elf2){
    if( elf1.start >= elf2.start && elf1.end <= elf2.end || elf2.start >= elf1.start && elf2.end <= elf1.end) {
        return true;
    }
    return false;
}

console.log(howManyOverlapping(data.puzzleInput04));
console.log(anyPartOverlaps(data.puzzleInput04));
module.exports = {howManyOverlapping,anyPartOverlaps};