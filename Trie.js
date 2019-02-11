




/*
 * Constructor for node in tree
 *
 */
function TrieNode(key) {
    this.character = character;
    this.parent = null;
    //Array to get it working. impliment a dictionary later
    //Preallocated array has time complexity but horrible space
    //Array has bad time but good space
    //dictionary has both
    this.children = [];
    this.wordEnd = false;
    this.childCount = 0
}

TrieNode.prototype.contains = function(character) {
    return children.includes(character);
};

TrieNode.prototype.add = function(character) {
    children.push(character);
};

TrieNode.prototype.get = function(character) {

};


TrieNode.prototype.remove = function(character) {


};



TrieNode.prototype.isEnd = function(character) {


};



TrieNode.prototype.isWordEnd = function(character) {


};




