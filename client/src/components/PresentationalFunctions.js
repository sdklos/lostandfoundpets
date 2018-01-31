import React from 'react';
import {Card, CardText} from 'material-ui/Card';
import { NavLink } from 'react-router-dom';
import '../App.css';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';

export const DataLoadingMessage = () => {
  return (
    <h1>Please Wait While The Data Is Loaded</h1>
  )
}

const ShowPet = (props) => {
  const pet = props.pet
  return (
    <Paper>
      <NavLink to={`/pets/${pet.id}`}>View {pet.name}</NavLink>
      <p>
        {pet.name} is a {pet.primary_color} {pet.primary_breed} ({pet.pet_type})
      </p>
      <p>
        Reported {pet.status} at {pet.address_string}
      </p>
    </Paper>
  )
}

const ShowPets = (props) => {
  function displayPets() {
    return props.pets.map(pet => {
      return (<div key={pet.id} className="item-1"><ShowPet pet={pet} /></div>)
    })
  }

  return (
    <div className="container-1">{displayPets()}</div>
  )
}


export const ConditionalRender = (props) => {
  if (props.isLoading) {
    return (<DataLoadingMessage />)
  } else {
    return (
      <ShowPets pets={props.pets} />
    )
  }
}

export const ConfirmDelete = (props) => {
  return (
    <div>
      <h1>Are You Sure You Want To Do That?</h1>
      <br /> <br /> <br /> <br />
      <div><RaisedButton type="button" onClick={props.onReject} label="NO!!" /></div>
      <br /><br /><br /> <br /> <br /> <br /> <br />
      <span><RaisedButton type="button" onClick={props.onConfirm} label="yes" /></span>
    </div>
  )
}

export const PetCard = (props) => {
  const pet = props.pet

  return (
    <div key={pet.id}>
      <Card>
        <CardText>
          <p>Name: {pet.name}</p>
          <p>Age: {pet.age}</p>
          <p>Pet Type: {pet.pet_type}</p>
          <p>Primary Breed: {pet.primary_breed}</p>
          <p>Primary Color: {pet.primary_color}</p>
          <p>Status: {pet.status}</p>
          <p>Reported At: {pet.address_string}</p>
          <p>Contact Phone: {pet.contact_phone}</p>
        </CardText>
          <span>
            <RaisedButton
              type="button"
              onClick={props.onClickEdit}
              label="Edit Pet"
            />
          </span>
          <span>
            <RaisedButton
              type="button"
              onClick={props.onClickDelete}
              label="Delete Pet"
            />
          </span>
      </Card>
    </div>
  )

}
