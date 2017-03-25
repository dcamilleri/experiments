import React from 'react'
import renderer from 'react-test-renderer'
import CustomForm from '../component'

const renderJsonComponent = (props) => {
  return renderer.create(
    <CustomForm {...props} />
  ).toJSON()
}

const onSubmit = () => {
  console.log('Hey')
}

const inputs = [
  {
    type: 'text',
    name: 'foo',
    className: 'foo',
    label: 'foo',
    placeholder: 'foo'
  }
]

describe('CustomForm', () => {
  it('should render correctly without any props', () => {
    const comp = renderJsonComponent()
    expect(comp).toMatchSnapshot()
  })

  it('should render correctly with onSubmit', () => {
    const comp = renderJsonComponent({
      onSubmit
    })
    expect(comp).toMatchSnapshot()
  })

  it('should render correctly with inputs', () => {
    const comp = renderJsonComponent({
      inputs
    })
    expect(comp).toMatchSnapshot()
  })

  it('should render correctly all props', () => {
    const comp = renderJsonComponent({
      inputs,
      onSubmit
    })
    expect(comp).toMatchSnapshot()
  })
})
