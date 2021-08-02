class MyClass {
  static convertNumberToRoman2 (number) {
    let roman = ''
    if (number < 1 || number > 3999) {
      return 'Bitte Nummer zwischen 1 und 3999 eingeben'
    }

    for (const key in romanNumList) {
      const flooredNumber = Math.floor(number / romanNumList[key])
      console.log('Debug flooredNumber: ' + flooredNumber)

      if (flooredNumber >= 0) {
        for (let i = 0; i < flooredNumber; i++) {
          roman += key
        }
      }
      number = number % romanNumList[key]
      console.log('Debug Number: ' + number)
    }
    console.log('Debug roman: ' + roman)
    return roman
  }

  static convertNumberToRoman (number) {
    let roman = ''
    if (number < 1 || number > 3999) {
      return 'Bitte Nummer zwischen 1 und 3999 eingeben'
    }
    for (const key in romanNumList) {
      while (number >= romanNumList[key]) {
        roman += key
        number -= romanNumList[key]
      }
    }
    return roman
  }

  static convertNumberToRoman1 (number) {
    if (number === 0) {
      return '';
    }
    if (number < 1 || number > 3999) {
      return 'Bitte Nummer zwischen 1 und 3999 eingeben'
    }

    for (let i = 0; i < romanMatrix.length; i++) {
      if (number >= romanMatrix[i][0]) {
        return romanMatrix[i][1] + this.convertNumberToRoman(number - romanMatrix[i][0]);
      }
    }
  }
}

const romanNumList = {
  M: 1000,
  CM: 900,
  D: 500,
  CD: 400,
  C: 100,
  XC: 90,
  L: 50,
  XL: 40,
  X: 10,
  IX: 9,
  V: 5,
  IV: 4,
  I: 1
}

const romanMatrix = [
  [1000, 'M'],
  [900, 'CM'],
  [500, 'D'],
  [400, 'CD'],
  [100, 'C'],
  [90, 'XC'],
  [50, 'L'],
  [40, 'XL'],
  [10, 'X'],
  [9, 'IX'],
  [5, 'V'],
  [4, 'IV'],
  [1, 'I']
]

module.exports = MyClass
