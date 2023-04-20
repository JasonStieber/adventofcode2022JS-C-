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
    for(let i = 4, i < packet.length; i++){
        if(nieveConditoinal(packet.slice(i-4,i))){
            return i
        }
    }
    return loc;
}

module.exports = {findStartOfPacketLoc};