import React, { Component } from 'react';
import ListContacts from './ListContacts'
import CreateContact from "./CreateContact";





class App extends Component {
  state={
    screen: 'list',
    contacts:[
      {
        "id": "ryan",
        "name": "Ryan Florence",
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
  removeContact = (contact)=>{
    this.setState((state)=>({
      contacts: state.contacts.filter((c)=>(c.id !== contact.id))

    }))
  }



  render() {
    return (
      <div>
        {this.state.screen === 'list' && (
          <ListContacts
            onDeleteContact = {this.removeContact}
            contacts={this.state.contacts}
            onNavigate={()=>{
              this.setState({screen:'create'})
            }}
          />

        )}
        {this.state.screen === 'create' && (
          <CreateContact/>

        )}



      </div>
    )
  }
}

export default App;
