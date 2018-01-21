import React, { Component } from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

export default class DynamicStatusDropDown extends Component {
  constructor(props) {
    super(props)

    this.handleChange = (event, index, value) => {
      var change = {}
      change[this.props.name] = value
      this.props.setFormState(change)
    }

  }

  shouldComponentUpdate(nextProps) {
    if(nextProps.pet_type !== this.props.pet_type) {
      return true
    } else {
      return false
    }
  }

  componentWillUpdate(nextProps) {
    this.props.populateBreeds(nextProps.pet_type)
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
