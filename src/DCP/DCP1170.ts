import fetch from "node-fetch"
import * as streamToString from 'stream-to-string'
import parse, { Node } from "node-html-parser"
const pages = [
  'https://en.wikipedia.org/wiki/Friedrich_Nietzsche'
]

let count = 0
type TagCount = {
  [key: string]: number
}
let tagCount: TagCount = {}

type NodeEl = Node & {
  rawTagName: string
}

const printTree = (node: NodeEl, cb: (n: NodeEl) => void) => {
  if (node.rawTagName) {
    if (tagCount[node.rawTagName]) {
      tagCount[node.rawTagName] += 1
    } else {
      tagCount[node.rawTagName] = 1
    }
  }
  if (node.childNodes) {
    node.childNodes.forEach((item: any) => {
      printTree(item, cb)
    })
  }
  count += 1
  cb(node)
}


const tagsToRemove = [
  'style',
  'script',
  'link',
  'cite',
  'input',
  'form',
  'label',
  'code',
  'meta'
]



const stripPageContent = async () => {
  const data = await fetch('https://en.wikipedia.org/wiki/Friedrich_Nietzsche')
  const res = await streamToString(data.body)
  const root = parse(res)
  let content: Array<string> = []
  tagsToRemove.forEach((tag) => {
    const els = root.querySelectorAll(tag)
    els.forEach((item) => {
      item.remove()
    })
  })
  root.childNodes.forEach((item) => {
    printTree(item as NodeEl, (n) => {
      if (n.textContent) {
        content.push(n.textContent)
      }
    })
  })
  return content.join(' <|**|> ')

}


stripPageContent().then((res) => console.log(res))






