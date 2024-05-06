function reverseString(string: string): string {
  const stringArray: string[] = string.split('');
  const resultArray: string[] = []
  for (let i = stringArray.length - 1; i >= 0; i--) {
    resultArray.push(stringArray[i]);
  }
  return resultArray.join("")
}

export default reverseString