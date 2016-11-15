export default class ColdBrew {
  caffeinate(text) {
    let letters = text.split('')

    let caffeinated = letters.map(letter => {
      return 'aeiou'.includes(letter) ? 'coffee' : letter
    })

    return caffeinated.join('')
  }
}
