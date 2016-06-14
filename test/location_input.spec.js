

import React from 'react'
import {mount, shallow} from 'enzyme'
import {expect} from 'chai'

import LocationInput from '../src/components/LocationInput'

describe('<LocationInput/>', function () {
  stubGoogle()

  const wrapper = mount(<LocationInput/>)

  it('has an input', function () {
    expect(wrapper.find('input')).to.have.length(1)
  })

  // TODO write me!
})
