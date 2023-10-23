// Given a list of points, a central point, and an integer k, find the nearest k points from the central point.
// For example, given the list of points [(0, 0), (5, 4), (3, 1)], the central point (1, 2), and k = 2, return [(0, 0), (3, 1)].

type Point = [x: number, y: number]

const nearestPoints = (points: Array<Point>, central: Point, k: number) => {
  // Iterate over the point array and generate a new array that represents the difference in x and y
  // Given [(0, 0), (5, 4), (3, 1)] => diff against central point => [(-1, -2), (4, 2), (2, -1)]
  const valueDiffMap = points.map((item) => {
    return {
      src: item,
      diff: [item[0] - central[0], item[1] - central[1]]
    }
  })
  const sorted = valueDiffMap.sort((a, b) => {
    const aCoeficcient = a.diff[0] + a.diff[1]
    const bCoeficcient = b.diff[0] + b.diff[1]
    if (aCoeficcient > bCoeficcient) {
      return 1
    }
    return -1

  })
  return sorted.map((item) => item.src).slice(0, k)

}


const n = nearestPoints([[0, 0], [5, 4], [3, 1]], [1, 2], 2)
