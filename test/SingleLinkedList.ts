import { SinglyLinkedList } from '../src/SinglyLinkedList'
import { describe, it } from 'mocha';
import { assert } from 'chai';

const myList = new SinglyLinkedList<number>();

describe('SinglyLinkedList - Insert at beginning', () => {
  it('should insert { data: 2, next: null } at beginning', () => {
    myList.insertAtBegin(2)
    assert.deepEqual(myList.nodes, { data: 2, next: null })
  })
  it('should insert { data: 1, next: null } at beginning', () => {
    myList.insertAtBegin(1)
    assert.deepEqual(myList.nodes, { data: 1, next: { data: 2, next: null } })
  })
  it('should insert { data: 0, next: null } at beginning', () => {
    myList.insertAtBegin(0)
    assert.deepEqual(myList.nodes, { data: 0, next: { data: 1, next: { data: 2, next: null } } })
  })
})
