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
    let vowels = 0
    let consonants = 0
    letters.forEach(letter => {
      if (this.isVowel(letter)) {
        vowels += 1
      } else {
        consonants += 1
      }
    })

    return vowels / (vowels + consonants)
  }
}
