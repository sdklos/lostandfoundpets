import React, { Component } from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

export default class DynamicStatusDropDown extends Component {

  handleChange = (event, index, value) => {
    var change = {}
    change[this.props.name] = value
    this.props.setFormState(change)
  }

  render() {
    const items = this.props.menuItems.map((item, index) => {
      return <MenuItem value={item} key={index} primaryText={item} />
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
