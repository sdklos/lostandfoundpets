import React, { Component } from 'react';
import PlacesAutocomplete from 'react-places-autocomplete';
import '../App.css';

class SearchByLocation extends Component {

  onChange = (payload) => this.props.handleChange(payload)


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
        <small>{formattedSuggestion.secondaryText}</small>
      </div>
    )

    const defaultStyles = {
      autocompleteContainer: {
        border: 'none',
        border: '1px solid #555555',
      },
      autocompleteItem: {
        fontSize: '.8em',
        width: '500px',
      },
      input: {
        display: 'inline-grid',
        width: '150%',
        padding: '10px',
        border: '0 0 1px 0 solid',
        fontFamily: 'Roboto',
        fontSize: '1em',
        alignSelf: 'bottom',
        paddingTop: '30px'
},
    }

    return(
      <div>
        <PlacesAutocomplete
          styles={defaultStyles}
          onSelect={this.onChange}
          renderSuggestion={AutocompleteItem}
          onEnterKeyDown={this.onChange}
          inputProps={inputProps}
          shouldFetchSuggestions={shouldFetchSuggestions} />
      </div>
    )
  }
}

export default SearchByLocation;
