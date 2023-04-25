const data = require("./puzzleinput06");

function nieveConditoinal(shortStr){
    let a = shortStr[0];
    let b = shortStr[1];
    let c = shortStr[2];
    let d = shortStr[3];
    if(a === b || a === c || a === d || b === c || b === d || c === d) {
        return false;
    }
    return true;
}

function findStartOfPacketLoc(packet) {
    for(let i = 4; i < packet.length; i++){
        if(nieveConditoinal(packet.slice(i-4,i))){
            return i
        }
    }
    throw new Error("no 4 character packet was found, we should find one");
    return -1;
}
// optimized solution 
function locateUniqueSubset(packet, subsetLength){
    let uniqueChars = {};
    // set the first subset window
    for(let i = 0; i < subsetLength; i++){
    // check to see if first subset is solution
        let char = packet[i];
        if(uniqueChars[char]){
            uniqueChars[char]++;
        } else {
            uniqueChars[char]=1;
        }
    }
    // loop though the rest of the packet
    for(let j = subsetLength; j < packet.length; j++){
        let newChar = packet[j];
        let oldChar = packet[j-subsetLength];
        // add the new character to the object
        if(uniqueChars[newChar]){
            uniqueChars[newChar]++;
        } else {
            uniqueChars[newChar] = 1;
        }
        // remove character out of scope from the object
        if(uniqueChars[oldChar] > 1){
            uniqueChars[oldChar]--;
        } else if (uniqueChars[oldChar]=== 1){
            delete uniqueChars[oldChar];
        } else {
            throw new Error("There should never be a value that is not >= 1 here");
        }
        //check to see if new subset is solution
        if(Object.keys(uniqueChars).length === subsetLength){
            // return location +1 due to the face that the pos 0 is referred to as pos 1 in teh answer key
            return j+1;
        }
    }
    // if no solution throw error
    throw new Error("Didn't find a subset solution");
}


function messageChecker(packet){
    let unique = {};
    for(let j =0; j < packet.length; j++){
        let character = packet[j];
        if(unique[character]){
            return false;
        }
        unique[character] = true;
    }
    return true;
}

function findStartOfMessage(packet) {
    for(let i = 14; i < packet.length; i++){
        if(messageChecker(packet.slice(i-14,i))){
            return i;
        }
    }
    throw new Error("no 4 character packet was found, we should find one");
    return -1;
}

console.log(findStartOfPacketLoc(data.puzzleString));
console.log(findStartOfMessage(data.puzzleString));
console.log(locateUniqueSubset(data.testString1, 4));

module.exports = {findStartOfPacketLoc, findStartOfMessage, locateUniqueSubset};