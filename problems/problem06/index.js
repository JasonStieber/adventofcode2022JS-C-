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

module.exports = {findStartOfPacketLoc, findStartOfMessage};