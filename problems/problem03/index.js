const data = require("./puzzleinput03");


function typeToScore(letter){
    if(letter.length != 1){
        throw new Error("should only pass a single character to convert to score");
    }
    if(letter <= 'z' && letter >= 'a'){
        return letter.charCodeAt(0) - 'a'.charCodeAt(0)+1;
    } else if(letter <= 'Z' && letter >= 'A'){
        return letter.charCodeAt(0) - 'A'.charCodeAt(0)+27;
    } else {
        throw new Error("Tried to convert a non letter character");
    }
}

function findMatchingChars(str){
    // split the string in half
    var firstHalf = str.slice(0,str.length/2);
    var secondHalf = str.slice(str.length/2);
    var existsInFirstHalf = {};
    var unSortedItems = "";
    // turn the first half into an object for O1 time lookup in 2nd part
    for(var i =0; i < firstHalf.length; i++){
        existsInFirstHalf[firstHalf[i]] = "exist";
    }
    // compare 2nd string with object looking for repeated characters
    for(j = 0; j < secondHalf.length; j++){
        if(existsInFirstHalf[secondHalf[j]] == "exist"){
        // if found add to master list (long string)
            existsInFirstHalf[secondHalf[j]] = "loaded";
            unSortedItems += secondHalf[j];
        }
    }
    return unSortedItems;
    // returning matching characer string
}

function compareFullDataset(arrStr){
    var totalUnsortedItems = "";
    var totalScore = 0;
    // create master list varable set to ""
    for(k = 0; k < arrStr.length; k++){
    // start a loop to compare each str
        // check for repeat characters

        totalUnsortedItems += findMatchingChars(arrStr[k]);
    }
    // take full list of repeats and loop though them and calculates the total score
    for(l = 0; l < totalUnsortedItems.length; l++) {
        totalScore += typeToScore(totalUnsortedItems[l]);
    }
    return totalScore;
}

function findLikeItems(arrTrupleOfSacks){
    // loop though [0] and find all the 
    sack1 = arrTrupleOfSacks[0];
    sack2 = arrTrupleOfSacks[1];
    sack3 = arrTrupleOfSacks[2];
    sackChecker = {};
    for(i = 0; i < sack1.length; i++){
        sackChecker[sack1[i]] = 1;
    }
    for(j = 0; j < sack2.length; j++){
        if(sackChecker[sack2[j]] == 1){
            sackChecker[sack2[j]] +=1 ; 
        }
    }
    for(k =0; k < sack3.length; k++) {
        if(sackChecker[sack3[k]] == 2){
            return sack3[k];
        }
    }
}

function needStinkingBadges(arrStr){
    // create badge strings
    var badges = "";
    var sum = 0;
    //looping though our data set
    for(a = 0; a < arrStr.length; a+=3){
        // grab the next 3 entries
        // send to findLikeItems function and return badge number add the coripsonding sting to the final string
        badges += findLikeItems([arrStr[a],arrStr[a+1],arrStr[a+2]]);
    }
    for(j = 0; j < badges.length; j++){
    // loop new string and send to the 
        // type to score function add the sum
        sum += typeToScore(badges[j]);
    }
    // return score 
    return sum;
}

// console.log("do you see" + compareFullDataset(data.puzzleInput03));
// console.log("\n\n\n\n*******The answer for the number with regards to badges is: " + needStinkingBadges(data.puzzleInput03));

module.exports = {compareFullDataset, needStinkingBadges};