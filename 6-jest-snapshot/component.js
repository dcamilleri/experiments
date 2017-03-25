import React from 'react'

export default class CustomForm extends React.Component {
  constructor (props) {
    super(props)
    this.renderInput = this.renderInput.bind(this)
  }

  renderInput ({
    type = 'text',
    name,
    className,
    label,
    placeholder = ''
  }, i) {
    return (
      <div className='Input-ctn' key={i}>
        <label htmlFor={name}>{label}</label>
        <input
          type={type}
          className={`Input ${className}`}
          name={name}
          placeholder={placeholder}
        />
      </div>
    )
  }

  render () {
    return (
      <div className='CustomForm'>
        <form onSubmit={this.props.onSubmit}>
          {this.props.inputs && this.props.inputs.map(this.renderInput)}
        </form>
      </div>
    )
  }
}

CustomForm.PropTypes = {
  onSubmit: React.PropTypes.func,
  inputs: React.PropTypes.arrayOf(React.PropTypes.object)
}
