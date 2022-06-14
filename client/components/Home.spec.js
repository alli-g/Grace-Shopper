/* global describe beforeEach it */

import {expect} from 'chai'
import React from 'react'
import enzyme, {shallow} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import AllUsers from './AllUsers'

const adapter = new Adapter()
enzyme.configure({adapter})

describe('AllUsers', () => {
  let AllUsers

  beforeEach(() => {
    AllUsers = shallow(<AllUsers />)
  })

  it('renders the email in an h3', () => {
    expect(AllUsers.find('h3').text()).to.be.equal('All Users')
  })
})
