import { isEqual } from "lodash";

const DEBUG = false


const debug = (message: any) => {
  if (DEBUG) {
    console.log(message)
  }
}

type NodeOrNodes<T> = {
  data: T | null;
  next: NodeOrNodes<T> | null;
} | null

// Singly linked list opertations
// 1. Insert at beginning || Complete
// 2. Insert at end || Complete
// 3. Size || Complete
// 4. Search || Complete
// 5. Traverse || Complete
// 6. Delete || Complete
// 7. Insert at position || Complete

export class SinglyLinkedList<T> {
  nodes: NodeOrNodes<T>;
  constructor() {
    this.nodes = null
  }
  size() {
    let count = 0
    let node: NodeOrNodes<T> | null = this.nodes
    while (node) {
      count++
      node = node.next
    }
    debug(`Size of the list is ${count}`)
    return count
  }
  insertAtBegin(data: T) {
    if (this.nodes) {
      this.nodes = { data, next: this.nodes }
    } else {
      this.nodes = { data, next: null }
    }
    debug(JSON.stringify(this.nodes))
  }
  insertAtEnd(data: T) {
    let node = this.nodes
    while (node && node.next != null) {
      node = node.next
    }
    if (node) {
      node.next = { data, next: null }
    }
    debug(JSON.stringify(this.nodes))
  }
  search(data: T) {
    let node = this.nodes
    let count = 1
    let found = false
    while (node !== null) {
      if (node.data === data) {
        found = true
        break
      }
      node = node.next
      count++
    }
    if (found) {
      debug(`Found ${data} at index ${count}`)
      return count
    }
    debug(`Value ${data} not found in the list`)
    return -1
  }
  traverse() {
    let node = this.nodes
    while (node !== null) {
      console.log(node.data)
      node = node.next
    }
  }
  delete(ntd: NodeOrNodes<T>) {
    let node = this.nodes
    let prev = null
    while (node !== null && !isEqual(node, ntd)) {
      prev = node
      node = node.next
    }
    if (isEqual(node, ntd)) {
      prev.next = node.next
      return node
    }
    return null
  }
  insertAtPosition(data: T, position: number) {
    let count = 1
    let node = this.nodes
    let prev = null
    while (count <= position && node !== null) {
      prev = node
      node = node.next
      count++
    }
    if (node && prev) {
      prev.next = { data, next: node }
      return this.nodes
    }
    return null


  }

}

const myList = new SinglyLinkedList<number>();

myList.insertAtBegin(2)
myList.insertAtBegin(1)
myList.insertAtBegin(0)
myList.insertAtEnd(3)
myList.insertAtEnd(4)
myList.size()
myList.search(20)
myList.traverse()
myList.delete({ data: 3, next: { data: 4, next: null } })
myList.insertAtPosition(5, 1)
myList.insertAtPosition(6, 2)
myList.insertAtPosition(22, 9)
