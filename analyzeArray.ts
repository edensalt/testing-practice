function analyzeArray (inputArray: number[]) {
  let totalOfInts = 0;

  for (let i = 0; i < inputArray.length; i++) {
    totalOfInts += inputArray[i]
  }

  return {
    average: totalOfInts / inputArray.length,
    min: Math.min.apply(Math, inputArray),
    max: Math.max.apply(Math, inputArray),
    length: inputArray.length,
  }
}

export default analyzeArray;