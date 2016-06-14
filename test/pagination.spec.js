import React from 'react'
import {mount, shallow} from 'enzyme'
import {expect} from 'chai'

import Pagination from '../src/components/Pagination'

describe('<Pagination/>', function () {
  const wrapper = mount(<Pagination/>)

  it('has no "previous" button if currentPage is 1', function () {
    wrapper.setProps({ currentPage: 1 })
    expect(wrapper.find('.previous')).to.have.length(0)
  })

  it('shows the "previous" button if currentPage gt 1', function () {
    wrapper.setProps({ currentPage: 2 })
    expect(wrapper.find('.previous')).to.have.length(1)
  })

  it('shows the "next" button if totalPages is not reached', function () {
    wrapper.setProps({ currentPage: 2, totalPages: 10 })
    expect(wrapper.find('.next')).to.have.length(1)
  })

  it('has no "next" button if totalPages is reached', function () {
    wrapper.setProps({ currentPage: 10, totalPages: 10 })
    expect(wrapper.find('.next')).to.have.length(0)
  })
})
