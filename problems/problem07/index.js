const data = require("./puzzleinput07");

// will use recursion to search a tree

// need to turn the sample data into a tree 
// define class directory structure
class DirectoryNode {
    constructor(dirName, size = 0, parent = null){
        this.name = dirName;
        this.children = [];
        this.parent = null || parent;
        this.size = size;
        
        if(!DirectoryNode.root){
            DirectoryNode.root = this;
        }
    }
    addChild(name, size = 0){
        const childNode = new DirectoryNode(name, size, this);
        this.children.push(childNode);
        return childNode;
    }
    removeChild(name) {
        this.children = this.children.filter(child => child.name !== name);
    }
    traverse(callback) {
        callback(this);

        if(this.children.length > 0) {
            this.children.forEach(child => child.traverse(callback));
        }
    }
    findNode(name) {
        let foundNode = null;

        this.traverse(node => {
            if (node.name === name) {
                foundNode = node;
            }
        });
        return foundNode;
    }
    findChild(name) {
        let foundNode = null;
        this.children.forEach(child => {
            if(child.name === name){
                foundNode = child;
            }
        });
        return foundNode;
    }
    getPath() {
        let currentNode = this;
        const path = [];

        while (currentNode) {
            path.unshift(currentNode.name);
            currentNode = currentNode.parent;
        }

        return path.join('/');
    }
    toString(indentation = ''){
        let outputString = "";
        let type = "";
        if (this.children.length > 0){
            type = "dir";
        } else {
            type = "file, size=" + this.size;
        }
        outputString +=(`${indentation}- ${this.name} (${type})\n`);

        if(this.children.length > 0) {
            this.children.forEach(child => {
                outputString += child.toString(indentation + '  '); // adding two spaces for each level deeper
            });
        }
        return outputString;
    }
}

// create input function
// $ means perform a command 
    // commands available are move up or down a dir
    // list out info within them
// parse function to return a node list 

function addChildFiles(terminalLines, lineNum, parentNode){
    let currentLine = terminalLines[lineNum];
    do{
        let sizeName = currentLine.split(" ");
        // make sure the file/folder doesn't already exist. 
        if(parentNode.findChild(sizeName[1])){
            // do not add a second copy of the same child do nothing here
        } else if(sizeName[0] === "dir"){
            parentNode.addChild(sizeName[1], 0, parentNode);
        } else {
            parentNode.addChild(sizeName[1], parseInt(sizeName[0]), parentNode);
        }
        lineNum++; 
        currentLine = terminalLines[lineNum];
    } while (lineNum < terminalLines.length && currentLine[0] !== "$");
    return lineNum - 1;
}

function parseTerminalInput(terminalText){
    let root = new DirectoryNode('/');
    let currentNode = root;
    let terminalLines = [];
    // separate all the commands in the input
    terminalLines = terminalText.split("\n");
    // loop though all commands in the terminal skip command 1 as our root node is already creating the root directory
    for(let i = 1; i < terminalLines.length; i++) {
        let script = terminalLines[i];
        let commands = script.split(" ")
        if (commands[0] === "$" && commands[1] === "cd"  && commands[2] === ".."){
            currentNode = currentNode.parent;
        } else if (commands[0] === "$" && commands[1] === "ls") {
            i = addChildFiles(terminalLines, i + 1, currentNode);
        } else if (commands[0] === "$" && commands[1] === "cd" && typeof commands[2] === "string") {
            currentNode = currentNode.findChild(commands[2]);
        } else {
            throw new Error ("unregognised command given in the terminal");
        }
    }
    return root;
}

function sumDirectoriesWithMaxSizeX(rootNode, maxSize){
    let i = 0;

    return i;
}

console.log(parseTerminalInput(data.testInput).toString());



module.exports = {parseTerminalInput, sumDirectoriesWithMaxSizeX};