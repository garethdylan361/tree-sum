var TreeSum = (function() {
    var self = {};
    var tree;

    //get's the sums of branches in a line and loops until there are no more.
    var getChildrenSums = function (currentChild, totalSum, addsUp, sum) {
        currentChild.forEach(function (current) {
            var total = totalSum + Number(current.parent);
            if (current.children.length === 0 && total == sum) addsUp = true;
            addsUp = getChildrenSums(current.children, total, addsUp, sum);
        });
        return addsUp;
    }

    //basic getter
    self.getTree = function() {
        return tree;
    }
    //basic setter
    self.setTree = function(treeStructure) {
        tree = treeStructure;
    }

    // calculates if any tree path under a sum adds up and return true if yes.
    self.addsUp = function(index) {
        var sum = tree[index].parent;
        var children = tree[index].children;
        var addsUp = false;
        children.forEach(function (current) {
            var totalSum = Number(current.parent);
            addsUp = getChildrenSums(current.children, totalSum, addsUp, sum);
        });
        return addsUp;
    }

    // changes a true or false answer into a yes or no and sends it back
    self.logIfSumsAddUp = function() {
        var sumLog = "";
        tree.forEach(function(current, key) {
           sumLog += (self.addsUp(key)) ? " yes" : " no";
        });
        return sumLog.trim();
    }

    return self;
})();


module.exports = TreeSum;
