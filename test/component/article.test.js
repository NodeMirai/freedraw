import React from 'react'
import { shallow, renderer, mount, configure } from 'enzyme'
import { expect } from 'chai'
import Adapter from 'enzyme-adapter-react-16';
import Chat from '../../src/component/chat/chat.jsx'

configure({ adapter: new Adapter() });

describe('test', () => {

  it('hehe', () => {
    let article = shallow(<Chat />)
    expect(article.find('.chat').text()).to.equal('hehe')
    done();
  })

})
