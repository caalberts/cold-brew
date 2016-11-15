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
  })
})
