import React, { Component } from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

export default class StatusDropDown extends Component {
  constructor(props) {
    super(props)

    this.handleChange = (event, index, value) => {
      var change = {}
      change[this.props.name] = value
      this.props.setFormState(change)
    }

  }

  render() {
    const items = this.props.menuItems.map(item => {
      return <MenuItem value={item} key={item} primaryText={item} />
    })

    return (
      <div>
      <SelectField value={this.props.value}  floatingLabelText={this.props.placeHolder} onChange={this.handleChange}>
        {items}
      </SelectField>
      </div>
    )
  }

}
