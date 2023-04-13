

const mydata = require("./puzzleinput02.js");

function winLooseDraw(opp, user){
    // check for a win
    if(opp == "A" && user == "Y" || opp == "B" && user == "Z" || opp == "C" && user == "X"){
        return 6;
    } else if (opp == "A" && user == "Z" || opp == "B" && user == "X" || opp == "C" && user == "Y") {// check for a loss
        return 0;
    } else if (opp == "A" && user == "X" || opp == "B" && user == "Y" || opp == "C" && user == "Z") { // check for a draw
        return 3;
    } else {// throw error
        throw new Error("Invate thorw.  Either the Opp or the User.")
    }

}

function decodeRPSEncryption(encrypt){
    sum = 0;
    encrypt.forEach(element => {
        sum += winLooseDraw(element.opp, element.user) + element.user.charCodeAt(0) - 'W'.charCodeAt(0);
    });
    return sum;
}

function convert(opp, ldw){
    if (opp == 'A' && ldw == 'X' || opp == 'C' && ldw == 'Y' || opp == 'B' && ldw == 'Z'){
        return 'Z';
    } else if (opp == 'A' && ldw == 'Z' || opp == 'C' && ldw == 'X' || opp == 'B' && ldw == 'Y'){
        return 'Y';
    } else if (opp == 'A' && ldw == 'Y' || opp == 'C' && ldw == 'Z' || opp == 'B' && ldw == 'X'){
        return 'X';
    } else {
        throw new Error("Cannot ilvalid convert of Loose Draw Win code");
    }
}

function correctDecodeRPSEncryption(encrypt){
    sum = 0;
    encrypt.forEach(element => {
        dummyArr = [{opp: '', user: ''}]
        dummyArr[0].opp = element.opp;   
        dummyArr[0].user = convert(element.opp, element.user);
        sum += decodeRPSEncryption(dummyArr);
    });
    return sum;
}

module.exports = { 
    decodeRPSEncryption,
    correctDecodeRPSEncryption
};