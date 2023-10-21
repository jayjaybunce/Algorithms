

// Operates FIFO || Uni-directional linked list

type QueueNode<T> = {
  data: T
  next?: QueueNode<T>
}

// head -----> node -----> node -----> node -----> node -----> tail
// Queue should push to the tail 
// Head acts as the end
// Tai lacts as the beginning
// Queue should pop from the head

// First pass at a queue
class Queue<T>{
  // tail and head should be private || change after confirmed working
  head?: QueueNode<T> //private
  tail?: QueueNode<T> //private
  public length: number
  constructor() {
    this.head = this.tail = undefined
    this.length = 0
  }
  initialize(data: T) {
    this.tail = this.head = { data } as QueueNode<T>
  }
  enqueue(data: T): void {
    if (!this.head) {
      this.initialize(data)
    } else {
      const node: QueueNode<T> = { data } as QueueNode<T>
      this.tail.next = node
      this.tail = node
    }
  }
  deque(): T | undefined {
    if (!this.head) {
      return undefined
    }
    const head = this.head
    this.head = this.head.next
    this.length--
    if (this.length === 0) {
      this.tail = null
    }
    return head.data
  }
  peel(): T | undefined {
    return this.head?.data
  }
}


const myQueue = new Queue<number>()
myQueue.enqueue(0)
myQueue.enqueue(1)
myQueue.enqueue(2)
myQueue.enqueue(3)
myQueue.enqueue(4)
console.log('deque operation')
console.log(myQueue.deque())
console.log(myQueue.deque())
console.log(myQueue.head)



