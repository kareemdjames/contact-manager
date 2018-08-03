import React from 'react';
import { Card } from 'semantic-ui-react';
import ContactCard from './contact-card';

export default function ContactList({contacts, deleteContact}) {
  console.log({contacts})
  
  const cards = () => {
    return contacts.map(contact => {
      return (
        <ContactCard 
        key={contact._id} 
        contact={contact}
        deleteContact={deleteContact}
        />
      )
    })
  }
  
  return(
    <div>
      <Card.Group>
        { cards() }
      </Card.Group>  
    </div>
  )
}