export default class ColdBrew {
  caffeinate(text) {
    let letters = text.split('')

    let caffeinated = letters.map((letter, index) => {
      if ('aeiou'.includes(letter)) {
        if (!'aeiou'.includes(letters[index - 1])) {
          return 'coffee'
        } else {
          return ''
        }
      } else {
        return letter
      }
    })

    return caffeinated.join('')
  }
}
