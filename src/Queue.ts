

// Operates FIFO || Uni-directional linked list

class QueueNode<T>{
  data: T
  next: QueueNode<T>
  constructor(data: T) {
    this.data = data
    this.next = null
  }
}


// head -----> node -----> node -----> node -----> node -----> tail
// Queue should push to the tail 
// Head acts as the end
// Tai lacts as the beginning
// Queue should pop from the head

// First pass at a queue
class Queue<T>{
  head: QueueNode<T>
  tail: QueueNode<T>
  nodes: QueueNode<T>
  length: number = 0
  constructor() {
    this.head = null
    this.tail = null
  }
  initialize(data: T) {
    const node = new QueueNode(data)
    this.head = node
    this.nodes = node
    this.length += 1
  }
  push(data: T) {
    if (this.head === null) {
      this.initialize(data)
    } else {
      const node = new QueueNode(data)
      let cur = this.nodes
      while (cur.next !== null) {
        cur = cur.next
      }
      cur.next = node
      this.tail = node
      this.length += 1
    }
  }
  pop() {
    const val = this.head.data
    this.head = this.nodes.next
    this.nodes = this.head
    this.length -= 1
    if (this.length === 0) {
      this.tail = null
    }
    return val
  }
}


const myQueue = new Queue<number>()
myQueue.push(0)
myQueue.push(1)
myQueue.push(2)
myQueue.push(3)
myQueue.push(4)
console.log('head', myQueue.head)
console.log('nodes', myQueue.nodes)
console.log('tail', myQueue.tail)
console.log(myQueue.pop())
console.log(myQueue.pop())
console.log('pop operation')
console.log('head', myQueue.head)
console.log('nodes', myQueue.nodes)
console.log('tail', myQueue.tail)

