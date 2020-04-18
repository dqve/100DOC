import React, {Component} from 'react';
import ListContacts from './ListContact';



class App extends Component {
  state = { 
    contacts : [
      {
        "id": "ryan",
        "name": "Dan Florence",
        "email": "ryan@reacttraining.com",
        "avatarURL": "http://localhost:5001/ryan.jpg"
      },
      {
        "id": "michael",
        "name": "Michael Jackson",
        "email": "michael@reacttraining.com",
        "avatarURL": "http://localhost:5001/michael.jpg"
      },
      {
        "id": "tyler",
        "name": "Tyler McGinnis",
        "email": "tyler@reacttraining.com",
        "avatarURL": "http://localhost:5001/tyler.jpg"
      }
    ]
  }

  deleteContact = (contact) => {
    this.setState(state => ({
      contacts: state.contacts.filter((person) => person.id !== contact.id )
      }))
  }

  render(){
    return (
      <div>
      <ListContacts contacts={this.state.contacts} deleteContact={this.deleteContact}/>
      </div>

    )
  }
}

export default App;