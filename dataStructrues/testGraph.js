import Dictionary from './testDictionary'

function Graph () {
  let vertices = []; // 存储图中所有顶点的名字
  let adjList = new Dictionary(); // 存储邻接表 

  this.addVertex = function (v) { // 向图中添加一个新的顶点
    vertices.push(v);
    adjList.set(v, []);
  }

  this.addEdge = function (v, w) { // 向图中添加顶点之间的边
    adjList.get(v).push(w);
    adjList.get(w).push(v);
  }

  this.toString = function () {
    let s = '';
    for (let i = 0; i < vertices.length; i++) {
      s += vertices[i] + ' -> ';
      let neighbors = adjList.get(vertices[i]);
      for (let j = 0; j < neighbors.length; j++) {
        s += neighbors[j] + ' ';
      }
      s += '\n';
    }
    return s;
  }

  // 白色：表示该顶点还没有被访问
  // 灰色：表示该顶点被访问过，但并未被探索过
  // 黑色：表示该顶点被访问过且被完全探索过
  var initializeColor = function () { // 初始化为白色
    let color = [];
    for (let i = 0; i < vertices.length; i++) {
      color[vertices[i]] = 'white'
    }
    return color;
  }
}


var graph = new Graph();
var myVertices = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I'];
for (let i = 0; i < myVertices.length; i++) {
  graph.addVertex(myVertices[i]);
}
graph.addEdge('A', 'B');
graph.addEdge('A', 'C');
graph.addEdge('A', 'D');
graph.addEdge('C', 'D');
graph.addEdge('C', 'G');
graph.addEdge('D', 'G');
graph.addEdge('D', 'H');
graph.addEdge('B', 'E');
graph.addEdge('B', 'F');
graph.addEdge('E', 'I');
console.log(graph.toString());