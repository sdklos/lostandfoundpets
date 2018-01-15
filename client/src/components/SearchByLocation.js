import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PlacesAutocomplete from 'react-places-autocomplete';
import { updateAddress } from '../actions/index';
import '../App.css';

class SearchByLocation extends Component {
  constructor(props) {
    super(props)
    this.onChange = (address) => this.props.updateAddress(address)

  }

  render() {
    const inputProps = {
      value: this.props.address,
      onChange: this.onChange,
      placeholder: 'Enter an Address to Search',
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
      <div className="input">
        <PlacesAutocomplete onSelect={this.props.updateAddress} renderSuggestion={AutocompleteItem} onEnterKeyDown={this.props.updateAddress} inputProps={inputProps} shouldFetchSuggestions={shouldFetchSuggestions} />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    address: state.address
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    updateAddress: updateAddress
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchByLocation);
