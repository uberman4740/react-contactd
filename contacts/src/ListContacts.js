import React, {Component} from 'react'
import PropTypes from 'prop-types'
import escapeRegExp from 'escape-string-regexp'
import sortBy from 'sort-by'

class ListContacts extends Component{
  static propTypes={
    contacts: PropTypes.array.isRequired,
    onDeleteContact: PropTypes.func.isRequired
  }
  state ={
    query:''
  }
  updateQuery = (query)=>{
    this.setState({query:query.trim()})
  }


  render(){
    const {contacts, onDeleteContact} = this.props
    let showingContacts
    if(this.state.query) {
      const match = new RegExp(escapeRegExp(this.state.query), 'i')
      showingContacts = contacts.filter((contact)=> match.test(contact.name))
    }
    else {
      showingContacts = contacts
    }
    showingContacts.sort(sortBy('name'))

    return (
      <div className={'list-contacts'}>
        {JSON.stringify(this.state)}
        <div className='list-contacts-top'>
          <input
            className='search-contacts'
            type='text'
            placeholder='Search contacts'
            value={this.state.query}
            onChange={(event) => this.updateQuery(event.target.value)}
          />
          <a
            href="#create"
            onClick={this.props.onNavigate}
            className="add-contact"
          >
            Add Contact
          </a>

        </div>
        <ol className='contact-list'>
          {showingContacts.map((contact)=>(
            <li key={contact.id} className={'contact-list-item'}>
              <div className='contact-avatar' style={{
                backgroundImage: `url(${contact.avatarURL})`
              }}/>

              <div className='contact-details'>
                <p>{contact.name}</p>
                <p>{contact.email}</p>

              </div>
              <button onClick={()=>onDeleteContact(contact)} className="contact-remove">
                Remove
              </button>

            </li>
          ))}

        </ol>

      </div>

    )
  }
}



export  default ListContacts
