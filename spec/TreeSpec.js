describe("Tree", function() {
    var Tree = require('../lib/Tree');
    var tree, treeTxt, treeStructure;

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
    });

    it("should be able to get contents of four trees", function() {
      expect(tree.getTrees().length).toEqual(4);
    });

    it("should be able to get first root", function() {
        expect(tree.getTrees()[0].parent).toEqual('22');
    });

    it("should be able to get first root of first child", function() {
        expect(tree.getTrees()[0].children[0].parent).toEqual('5');
    });

    it("should be able to get first root of first child of first child", function() {
        expect(tree.getTrees()[0].children[0].children[0].parent).toEqual('4');
    });

    it("should be able to get first root of first child of first child of first child", function() {
        expect(tree.getTrees()[0].children[0].children[0].children[0].parent).toEqual('11');
    });

    it("should be able to get first root of first child of first child of first child", function() {
        expect(tree.getTrees()[0].children[0].children[0].children[0].parent).toEqual('11');
    });

    it("should be able to get first root of first child of first child of first child of first child", function() {
        expect(tree.getTrees()[0].children[0].children[0].children[0].children[0].parent).toEqual('7');
    });

    it("should be able to get first root of first child of first child of second child", function() {
        expect(tree.getTrees()[0].children[0].children[0].children[1].children[0].parent).toEqual('2');
    });

    it("should be able to get third root", function() {
        expect(tree.getTrees()[2].parent).toEqual('10');
    });
    it("should be able to get first child of third root", function() {
        expect(tree.getTrees()[2].children[0].parent).toEqual('3');
    });


});
