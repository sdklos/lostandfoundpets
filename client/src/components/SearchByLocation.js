import React, { Component } from 'react';
import PlacesAutocomplete from 'react-places-autocomplete';
import '../App.css';

class SearchByLocation extends Component {
  constructor(props) {
    super(props)
    this.onChange = (payload) => this.props.handleChange(payload)

  }

  render() {
    const inputProps = {
      value: this.props.value,
      onChange: this.onChange,
      placeholder: this.props.placeholder,
    }

    const shouldFetchSuggestions = ({ value }) => value.length > 2

    const AutocompleteItem = ({formattedSuggestion}) => (
      <div>
        <strong>
          {formattedSuggestion.mainText}
        </strong>{' '}
      </div>
    )

    return(
      <div>
        <PlacesAutocomplete onSelect={this.onChange} renderSuggestion={AutocompleteItem} onEnterKeyDown={this.onChange} inputProps={inputProps} shouldFetchSuggestions={shouldFetchSuggestions} />
      </div>
    )
  }
}

export default SearchByLocation;
