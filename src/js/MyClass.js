class MyClass {
  static convertRomanToNumber (roman) {
    let result = 0

    console.log('##### Roman to convert = ' + roman)

    if (!roman) return result

    for (let i = 0; i < roman.length - 1; i++) {
      const valueOfToken1 = romanLiterals[roman[i]]
      const valueOfToken2 = romanLiterals[roman[i + 1]]
      // console.log('i = ' + i + " -> roman[i] = " + roman[i])
      console.log('Roman1 = ' + [roman[i]] + ' -> Roman2 = ' + [roman[i + 1]])
      console.log('valueOfToken1 = ' + valueOfToken1 + ' -> valueOfToken2 = ' + valueOfToken2)

      if (valueOfToken1 < valueOfToken2) {
        result -= valueOfToken1
      } else {
        result += romanLiterals[roman[i]]
      }
    }
    // console.log('roman length: ' + [roman.length - 1])
    console.log('##### result before: ' + result)
    result += romanLiterals[roman[roman.length - 1]]

    console.log('##### result after: ' + result)
    return result
  }
}
const romanLiterals = {
  M: 1000,
  D: 500,
  C: 100,
  L: 50,
  X: 10,
  V: 5,
  I: 1
}
module.exports = MyClass
