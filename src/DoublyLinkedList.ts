// A bi-directioncal linked list


// Work in progresss || still implementing

type NodeOrNodes<T> = {
  prev: NodeOrNodes<T> | null
  data: T | null
  next: NodeOrNodes<T> | null
}

class DLLNode<T>{
  data: T
  prev: DLLNode<T>
  next: DLLNode<T>
  constructor(data: T, next?: DLLNode<T>, prev?: DLLNode<T>) {
    this.prev = prev || null
    this.data = data
    this.next = next || null
  }

}

class DoublyLinkedList<T>{
  nodes: NodeOrNodes<T> | null = null
  length: number = 0
  insertAtBegin(data: T) {
    // create a new node
    // set old nodes prev to the new node
    if (this.nodes) {

      const temp = { ...this.nodes }
      const node: NodeOrNodes<T> = { prev: null, data, next: null }
      temp.prev = { ...node }
      node.next = temp

      this.nodes = node
      return
    }
    // nodes is null and empty
    const node = new DLLNode(data, null, this.nodes)
    this.nodes = node
  }
}

const myList = new DoublyLinkedList<number>()

myList.insertAtBegin(0)
myList.insertAtBegin(1)
console.log(myList.nodes)