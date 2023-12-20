   



   class UndirectedGraph{
    constructor(){
      this.graph=[]
    }


    addVertex(vertex){
      if(!this.graph[vertex]){
        this.graph[vertex]=new Set()
      }
      return this
    }

    addEdges(vertex1,vertex2){
      if(!this.graph[vertex1]){
      return this.addVertex[vertex1]
      }

      if(!this.graph[vertex2]){
        return this.addVertex[vertex2]
      }
      this.graph[vertex1].add(vertex2);
      this.graph[vertex2].add(vertex1)
    }

    removeedge(vertex1,vertex2){
      this.graph[vertex1].delete(vertex2)
      this.graph[vertex2].delete(vertex1)
    }

    deletevertex(vertex){
      if(!this.graph[vertex]){
        return null
      }
      for(deleteE in this.graph){
        this.removeedge(vertex,deleteE)
      }

     delete this.graph[vertex]
    }

    dfs(start){
      let stack=[start]
      let visited=new Set([start])

      let data=[]

      while (stack.length) {
        let current=stack.pop()
        data.push(current)

        for(let neighbour of this.graph[current]){
          if(!visited.has(neighbour)){
            visited.add(neighbour)
            stack.push(neighbour)
          }

        }
        
      }
return console.log("dfs",data);
    }


    bfs(start){
      let queue=[start]
      let visited=new Set([start])
      let data=[]

      while (queue.length) {
        let current=queue.shift()

        data.push(current)

        for (const neighbour of this.graph) {
          if(!visited.has(neighbour)){
            visited.add(neighbour)
            queue.push(neighbour)
          }
          
        }
        
      }
      return console.log("bfs",data);
    }
   }






   const graph = new UndirectedGraph();

// Add vertices
graph.addVertex(34);
graph.addVertex(54);
graph.addVertex(3);
graph.addVertex(7);
graph.addVertex(23);
graph.addVertex(89);
graph.addVertex(90);

// Add edges
graph.addEdges(34, 54);
graph.addEdges(34, 3);
graph.addEdges(54, 7);
graph.addEdges(3, 23);
graph.addEdges(7, 89);
graph.addEdges(23, 89);
graph.addEdges(89, 90);

// Perform DFS starting from a vertex
const dfsResult = graph.dfs(34);
const bfsResult = graph.bfs(34);