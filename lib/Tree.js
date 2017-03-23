var XRegExp = require('xregexp');

var Tree = (function() {
    var self = {};

    var trees = new Array();

   //Private Methods :(
    var getTreeRoots = function(treeArray, treeString) {
        treeArray.forEach(function(current, key, value) {
            treeString = treeString.replace(current, "").replace("()", " ").trim();
        });
        return treeString.split(" ");
    }

    var buildTreeStructure = function(txt, treeArray, resultArray) {
        var treeRoots = getTreeRoots(treeArray, txt);
        treeArray.forEach(function (current, key, value) {
            resultArray = addTreeResult(treeArray, treeRoots, key, resultArray);
        });
        return resultArray;
    }

    var addTreeResult = function(treeArray, treeRoots, key, resultArray) {
        var treeRoot = (treeRoots.length > 1) ? treeRoots[key] : treeRoots[0];
        resultArray.push({parent: treeRoot, children: getContentsOfRoots(treeArray[key])});
        return resultArray;
    }

    var getContentsOfRoots = function(txt) {
        //Recursion and bracket matching is not possible or it is very challenging to say the least in native JavaScript RegEx library.
        // Searched and found interesting articles about .NET RegEx recursion, and came across XRegExp library.
        // Potentially many lines of code for complex RegEx became one with this easy to use library :D
        var treeArray = XRegExp.matchRecursive(txt, '\\(', '\\)', 'g');
       //treeArray = treeArray.filter(function(n){ return n != ''});
        var resultArray = new Array();
        if(treeArray.length && treeArray[0] === '') treeArray = new Array('');
        return (treeArray.length) ? buildTreeStructure(txt, treeArray, resultArray) : resultArray;
    }

    //Public Methods :)
    self.setTrees = function(rawTreeString) {
        //removed white spaces (they were irrelevant and were a nuisance :()
        trees = getContentsOfRoots(rawTreeString.replace(/ /g,''));
    }

    self.getTrees = function() {
        return trees;
    }

    return self;
})();


module.exports = Tree;
