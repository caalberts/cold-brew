import ColdBrew from '../src/coldbrew'
import { expect } from 'chai'

describe('ColdBrew#caffeinate', () => {
  let coldBrew

  before('set up test', () => {
    coldBrew = new ColdBrew()
  })

  it('should keep empty string', () => {
    expect(coldBrew.caffeinate('')).to.equal('')
  })

  it('should replace vowel with coffee', () => {
    expect(coldBrew.caffeinate('a')).to.equal('coffee')
    expect(coldBrew.caffeinate('e')).to.equal('coffee')
    expect(coldBrew.caffeinate('i')).to.equal('coffee')
    expect(coldBrew.caffeinate('o')).to.equal('coffee')
    expect(coldBrew.caffeinate('u')).to.equal('coffee')
  })

  it('should keep consonants', () => {
    expect(coldBrew.caffeinate('b')).to.equal('b')
  })

  it('should replace a vowel in a word with coffee', () => {
    expect(coldBrew.caffeinate('ab')).to.equal('coffeeb')
    expect(coldBrew.caffeinate('ba')).to.equal('bcoffee')
  })
})
