var chocolateBars = [
  'snickers',
  'hundred grand',
  'kitkat',
  'skittles'
]

function addElementToBeginningOfArray(array, element) {
  return ['Pie', ...chocolateBars]
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  chocolateBars.unshift('Pie')
  return chocolateBars
}

function addElementToEndOfArray(array, element) {
  return [...chocolateBars, 'Pie']
}

function destructivelyAddElementToEndOfArray(array, element) {
  chocolateBars.push('Pie')
  return array
}

function accessElementInArray(array, index) {
  console.log(chocolateBars[2]);
}
