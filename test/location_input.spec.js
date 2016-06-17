import React from 'react'
import {mount, shallow} from 'enzyme'
import {expect} from 'chai'
import chai from 'chai'
import chaiEnzyme from 'chai-enzyme'
import sinon from 'sinon'

chai.use(chaiEnzyme())

import LocationInput from '../src/components/LocationInput'

describe('<LocationInput/>', function () {
  stubGoogle()

  const wrapper     = mount(<LocationInput/>)
  const input       = wrapper.find('input')
  const resetButton = wrapper.find('.bpe--location-input--reset')

  wrapper.setProps( { changeLocation: function() { /* stub */ } })

  it('has an input', function () {
    expect(input).to.have.length(1)
  })

  it('sets the input value', function () {
    wrapper.setProps({ value: 'Berlin' })
    expect(input).to.have.value('Berlin')
  })

  it('has a reset button', function () {
    expect(resetButton).to.have.length(1)
  })

  it('the reset button resets the input', function () {
    wrapper.setProps({ value: 'Berlin' })
    resetButton.simulate('click')
    expect(input).to.have.value('')
  })

  describe('handlePlacesChanged()', function () {
    context('if no place has been found', function() {
      it('does nothing', function () {
        wrapper.instance().getGeometry = function () {
          return null
        }
        expect(wrapper.instance().handlePlacesChanged()).to.eq(false)
      })
    })

    context('if a place with viewport has been found', function() {
      it('triggers the changeBounds callback', function () {
        wrapper.instance().getGeometry = function () {
          return { viewport: { toJSON: function(){} } }
        }
        var callback = sinon.spy()
        wrapper.setProps({ changeBounds: callback })
        wrapper.instance().handlePlacesChanged()
        expect(callback).to.be.calledOnce
      })
    })

    context('if a place without viewport but with a location has been found', function() {
      it('triggers the changeBounds callback', function () {
        wrapper.instance().getGeometry = function () {
          return { viewport: null, location: { lat: function() { 42 }, lng: function() { 42 } } }
        }
        var callback = sinon.spy()
        wrapper.setProps({ changeBounds: callback })
        wrapper.instance().handlePlacesChanged()
        expect(callback).to.be.calledOnce
      })
    })
  })
})
