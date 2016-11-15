export default class ColdBrew {
  caffeinate(text) {
    let letters = text.split('')
    let result = ''

    let vowelRatio = this.calculateVowelRatio(letters)
    if (vowelRatio > 0.3) {
      let caffeinated = letters.map((letter, index) => {
        if (this.isVowel(letter)) {
          let previousLetter = letters[index - 1]
          return this.isVowel(previousLetter) ? '' : 'coffee'
        } else {
          return letter
        }
      })
      result = caffeinated.join('')
    } else {
      result = text
    }

    return result
  }

  isVowel(letter) {
    return 'AEIOUaeiou'.includes(letter)
  }

  calculateVowelRatio(letters) {
    let vowelCount = letters.reduce((count, letter) => {
      return this.isVowel(letter) ? count += 1 : count
    }, 0)

    return vowelCount / letters.length
  }
}
