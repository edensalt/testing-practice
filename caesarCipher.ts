function caesarCipher (stringInput: string, shiftFactor: number) {

  const alphabetArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

  const inputArray = stringInput.split('');

  const resultArray: string[] = [];

  for (const letter of inputArray) {

    let letterIndex = alphabetArray.findIndex(element => element === letter.toLowerCase());

    if (letterIndex < 0) {
      resultArray.push(letter)
    } else {
      let newCharacter = alphabetArray[letterIndex + shiftFactor - (26 * Math.floor((letterIndex + shiftFactor) / 26))]
      if (letter.match(/^[A-Z]*$/)) {
        resultArray.push(newCharacter.toUpperCase())
      } else resultArray.push(newCharacter)
    }
  }

  return resultArray.join("");
}

export default caesarCipher;