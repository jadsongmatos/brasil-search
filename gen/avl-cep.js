const AVLTree = require("avl");
var fs = require("fs");

//           9999999;
const size = 5000000;

const tree = new AVLTree();

var i = 0;

for (let index = 0; index <= 9999999; index++) {
  i++;
  if (i % 10000 == 0) {
    console.log("a", index);
    i = 0;
  }

  tree.insert(index);
}

const root = 5000000; //tree.at(Math.round(size / 2)).key;

let data = [...Array(size)];
i = 0;
tree.forEach((node) => {
  i++;
  if (i % 10000 == 0) {
    console.log("b", i);
  }
  if (i <= 5000000) {
    data[i] = {
      node: node.key,
      parent: node.parent ? node.parent.key : root,
      left: node.left ? node.left.key : root,
      right: node.right ? node.right.key : root,
    };
  }
});

tree.destroy()

fs.writeFile("./avl0.json", JSON.stringify(data), function (err) {
  if (err) throw err;
  console.log("complete");
});
