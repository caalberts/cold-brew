export default class ColdBrew {
  caffeinate(text) {
    let letters = text.split('')

    let caffeinated = letters.map((letter, index) => {
      if (this.isVowel(letter)) {
        let previousLetter = letters[index - 1]
        return this.isVowel(previousLetter) ? '' : 'coffee'
      } else {
        return letter
      }
    })

    return caffeinated.join('')
  }

  isVowel(letter) {
    return 'aeiou'.includes(letter)
  }
}
