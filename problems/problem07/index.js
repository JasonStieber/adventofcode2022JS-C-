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
    getPath() {
        let currentNode = this;
        const path = [];

        while (currentNode) {
            path.unshift(currentNode.name);
            currentNode = currentNode.parent;
        }

        return path.join('/');
    }
    print(indentation = ''){
        let type = "";
        if (this.children.length > 0){
            type = "dir";
        } else {
            type = "file, size=" + this.size;
        }
        console.log(`${indentation}-${this.name} (${type})`);

        if(this.children.length > 0) {
            this.children.forEach(child => {
                child.print(indentation + '  '); // adding two spaces for each level deeper
            });
        }
    }
}

// create input function
// $ means perform a command 
    // commands available are move up or down a dir
    // list out info within them
// parse function to return a node list 


// function parseTerminalInput(terminalText){
//     // loop though all commands in the terminal
//         // if cd / move back to the top directory
    
//     root = new DirectoryNode("root");


//     return 
// }

const rootNode = new DirectoryNode('/');

const folder1 = rootNode.addChild("a");
const file1 = rootNode.addChild("b",2000);
const file2 = folder1.addChild('c',100);
const folder2 = folder1.addChild('d');
const file3 = folder2.addChild('e');
const file4 = folder2.addChild('f');

rootNode.print();