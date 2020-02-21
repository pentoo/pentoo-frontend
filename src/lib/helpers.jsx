import * as R from 'ramda'

export const notEmpty = R.complement(R.isEmpty)

export const notNil = R.complement(R.isNil)

export const notNilOrEmpty = R.complement(R.either(R.isNil, R.isEmpty))

export const notEquals = R.curry((a, b) => R.complement(R.equals(a))(b))

export const nilOrEmpty = R.either(R.isNil, R.isEmpty)

export const mapIndexed = R.addIndex(R.map)

export const isOdd = R.modulo(R.__, 2)

export function isSet(target) {
  return typeof target !== 'undefined' && target !== null
}

export function randomRangeNum(min, max) {
  return Math.random() * (max - min) + min
}

export function rangeFloor(min, max) {
  // Return a random whole number between min and max
  return Math.floor(Math.random() * (max - min) + min)
}

export function pick(array) {
  // Pick a random item out of an array
  if (array.length === 0) return undefined
  return array[rangeFloor(0, array.length)]
}

export const radians = degrees => {
  return (degrees * Math.PI) / 180
}

export const distance = (x1, y1, x2, y2) => {
  return Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2))
}

export const map = (value, start1, stop1, start2, stop2) => {
  return ((value - start1) / (stop1 - start1)) * (stop2 - start2) + start2
}

export function mapEdgesToNodes(data) {
  if (!data.edges) return []
  return data.edges.map(edge => edge.node)
}

export function buildImageObj(source) {
  const imageObj = {
    asset: { _ref: source.asset._ref || source.asset._id },
  }

  if (source.crop) imageObj.crop = source.crop
  if (source.hotspot) imageObj.hotspot = source.hotspot

  return imageObj
}
