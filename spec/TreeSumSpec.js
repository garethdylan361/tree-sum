describe("Tree", function() {

    var Tree = require('../lib/Tree');
    var TreeSum = require('../lib/TreeSum');


    beforeEach(function() {
        tree = Tree;

        treeTxt = "22 (5(4(11(7()())(2()()))()) (8(13()())(4()(1()()))))"+
            "20 (5(4(11(7()())(2()()))()) (8(13()())(4()(1()()))))"+
            "10 (3"+
            "(2 (4 () () )"+
            "(8 () () ) )"+
            "(1 (6 () () )"+
            "(4 () () ) ) )"+
            "5 ()";

        tree.setTrees(treeTxt);

        treeSum = TreeSum;
        treeSum.setTree(tree.getTrees());
    });

    it("should be able to get tree", function() {
      expect(treeSum.getTree().length).toEqual(4);
    });

   it("should be able to validate first tree line adds up to sum", function() {
        expect(treeSum.addsUp(0)).toEqual(true);
    });

    it("should return false because second tree line doesnt add up to sum", function() {
        expect(treeSum.addsUp(1)).toEqual(false);
    });

    it("should return true for third line", function() {
        expect(treeSum.addsUp(2)).toEqual(true);
    });

    it("should return false for fourth line", function() {
        expect(treeSum.addsUp(3)).toEqual(false);
    });

    it("should return yes,no,yes,no for all four lines", function() {
        expect(treeSum.logIfSumsAddUp()).toEqual("yes no yes no");
    });

});
