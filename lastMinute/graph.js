



class grapLast{

  constructor(){
    this.graph=[]
  }
  addVertex(vertex){
    if(!this.graph[vertex]){
      this.graph[vertex]=new Set()
    }
  }

  addEdges(vertex1,veretex2){
    if(!this.graph[vertex1]){
      this.addVertex(vertex1)
    }
    if(!this.graph[veretex2]){
      this.addVertex(veretex2)
    }
    this.graph[vertex1].add(veretex2)
    this.graph[veretex2].add(vertex1)

  }
  deleteVertexEdge(vertex1,vertex2){
   this.graph[vertex1].delete(vertex2)
   this.graph[vertex2].delete(vertex1)
  }
  deleteEdges(vertex){
    if(!this.graph[vertex]){
      return null
    }

    for(let deleteEdge of this.graph[vertex]){
          this.deleteVertexEdge(vertex,deleteEdge)
    }
    delete this.graph[vertex]
  }

  bfs(){
    let queue=[]
    queue.push()
  }
}