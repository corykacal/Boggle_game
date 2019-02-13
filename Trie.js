




/*
 * Constructor for node in tree
 *
 */
class TrieNode {

    constructor() {
        //Array to get it working. impliment a dictionary later
        //Preallocated array has time complexity but horrible space
        //Array has bad time but good space
        //dictionary has both
        this.children = new Array(26);
    }


contains(character) {
    var value = this.getAlphabetValue(character);
    return this.children[value] != undefined;
}

add(character) {
    this.children.push(character);
    this.children[this.getAlphabetValue(character)] = new TrieNode();
}

get(character) {
    var value = this.getAlphabetValue(character);
    return this.children[value];
}


remove(character) {
    var alphabetValue = this.getAlphabetValue(character);
    this.children[alphabetValue] = undefined;

}

getAlphabetValue(character) {
    var asciiValue = character.charCodeAt(0);
    var alphabetValue = asciiValue - 61;
    return alphabetValue;
}

}
class Trie
{
    constructor()
    {
        this.rootTrieNode = new TrieNode();
    }
    add(String)
    {
        var recursiveAdd = function(string, node) {
            if(string.length == 0)
                return;
            else
            {
                var firstLetter = string.charAt(0);
                node.add(firstLetter);
                var newNode = node.get(firstLetter);
                var newString = string.substring(1, string.length);
                recursiveAdd(newString, newNode);
            }


        }
        recursiveAdd(String, this.rootTrieNode);
    }
    contains(string)
    {
        var recursiveContains = function(string, node) {
            if(node == undefined)
                return false;
            //we know string is '' and node is defined
            else if(string.length == 0) {
                //node has attributes 'isEndOfWord'
                return true;
            }
            else
            {
                var firstLetter = string.charAt(0);
                var newString = string.substring(1, string.length);
                var newNode = node.get(firstLetter);
                return recursiveContains(newString, newNode);
            }


        }
        return recursiveContains(string, this.rootTrieNode);
    }
    remove(TrieNode)
    {

    }
}







let trie = new Trie()
trie.add("word");
console.log(trie.contains("word"));
console.log(trie.contains("wor"));
console.log(trie.contains("w"));
console.log(trie.contains("wa") == false);