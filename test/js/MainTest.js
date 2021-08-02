const chai = require('chai')
const expect = chai.expect

const MyClass = require('../../src/js/MyClass')

describe('MyClass', function () {
  describe('#convertNumberToRoman', function () {
    it('should always convert 1 to I', function () {
      expect(MyClass.convertNumberToRoman(1)).to.be.equal("I")
    })
    it('should always convert 2 to II', function () {
      expect(MyClass.convertNumberToRoman(2)).to.be.equal("II")
    })
    it('should always convert 3 to III', function () {
      expect(MyClass.convertNumberToRoman(3)).to.be.equal("III")
    })
    it('should always convert 4 to IV', function () {
      expect(MyClass.convertNumberToRoman(4)).to.be.equal("IV")
    })
    it('should always convert 42 to XLII', function () {
      expect(MyClass.convertNumberToRoman(42)).to.be.equal("XLII")
    })

    it('should always convert 1234 to MCCXXXIV', function () {
      expect(MyClass.convertNumberToRoman(1234)).to.be.equal("MCCXXXIV")
    })

    it('should return message if number <1 or >3999', function () {
      expect(MyClass.convertNumberToRoman(5000)).to.be.equal("Bitte Nummer zwischen 1 und 3999 eingeben")
    })
  })
})


