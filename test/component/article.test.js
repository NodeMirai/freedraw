import React from 'react'
import { shallow, renderer, mount } from 'enzyme'
import { expect } from 'chai'

import Chat from '../../src/component/chat/chat'

describe('test', () => {
  it('hehe', () => {

    try {
      let article = shallow(<Chat />)
      expect(article.find('.chat').text()).to.equal('hehe')
      done();
    } catch (e) {
      console.log(e)
    }

  })
})
