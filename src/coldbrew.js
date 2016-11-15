export default class ColdBrew {
  caffeinate(text) {
    if (text === '') return ''
    return 'aeiou'.includes(text) ? 'coffee' : text
  }
}
