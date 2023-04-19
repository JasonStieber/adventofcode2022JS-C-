const data = require("./puzzleinput05");



function moveABox(stacks, from, to){
    stacks[to].push(stacks[from].pop());
    return stacks;
}

function doAnInstruction(stacks, instruction){
    for(let i = 0; i < instruction.numOfBoxes; i++){
        stacks = moveABox(stacks, instruction.from-1, instruction.to-1);
    }
    return stacks;
}

function parseStack(stringStack){
    stacks = [];
    eachLine = stringStack.split('\n');
    // fill the stacks with each emmpy stack
    if(eachLine[0].length < 4) {
        throw new Error("The top parseable string shouldn't be empty");
    }
    numOfBays = eachLine[0].length/4;
    for(let j = 0; j < numOfBays; j++){
        stacks.push([]);
    }

    eachLine.forEach(line => {
        for(let i = 0; i*4 < line.length; i++){
            if(line[i*4 + 1] >= 'A' && line[i*4 +1] <= 'Z'){
                stacks[i].push(line[i*4 + 1]);
            }
        }
    });
    // flip all the arrays
    stacks.forEach(stack => {
        stack.reverse();
    });
    return stacks;
}

function moveAllTheBoxes(stacksString, instructionList){
    stacks = parseStack(stacksString);
    instructionList.forEach(step => {
        stacks = doAnInstruction(stacks, step);
    });
    topRow = returnTopRowOfStacks(stacks);
    return topRow;
}

function returnTopRowOfStacks(stacks){
    let topRow = '';
    for(let i = 0; i < stacks.length; i++){
        back = (stacks[i].length) -1;
        topRow += stacks[i][back];
    }
    return topRow;
}

function instructionWithCM9001(stacks, step){
    let fromArr = stacks[step.from-1];

    let toArr = stacks[step.to-1];
    let startPlace = fromArr.length - step.numOfBoxes;
    let boxesToMove = fromArr.splice(startPlace);
    stacks[step.to-1] = toArr.concat(boxesToMove);
    return stacks;
}


function moveWithCrateMover9001(stackString, instructionList){
    stacks = parseStack(stackString);
    instructionList.forEach(step => {
        stacks = instructionWithCM9001(stacks, step);
    });
    topRow = returnTopRowOfStacks(stacks);
    return topRow;
}

console.log(moveAllTheBoxes(data.puzzleStack, data.puzzleInstructions));
console.log(moveWithCrateMover9001(data.puzzleStack, data.puzzleInstructions));

module.exports = {doAnInstruction, moveAllTheBoxes, parseStack, moveWithCrateMover9001}