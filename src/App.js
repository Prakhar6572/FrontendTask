import React, { useState,Fragment } from 'react'
import "./App.css"
import data from "./mock-data.json"
import ReadOnlyRow from './components/ReadOnlyRow';
import EditableRow from './components/EditableRow';
const App = () => {
  const [contacts, setContacts] = useState(data);
  const [addFormData, setAddFormData] = useState({
    name: "",
    email: ""
  });
  const [editFormData, setEditFormData] = useState({  
    Id:"",
    name: "",
    email: ""
  });
  const [editContactId, setEditContactId] = useState(null);
  const handleAddFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...addFormData };
    newFormData[fieldName] = fieldValue;

    setAddFormData(newFormData);
  };
  const handleEditFormChange = (event) => {
    event.preventDefault();
    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...editFormData };
    newFormData[fieldName] = fieldValue;

    setEditFormData(newFormData);
  };
  const handleAddFormSubmit = (event) => {
    event.preventDefault();

    const newContact = {
      id: parseInt(Math.random()*100),
      name: addFormData.name,
      email: addFormData.email,
    };

    const newContacts = [...contacts, newContact];
    setContacts(newContacts);
  };
  const handleEditFormSubmit = (event) => {
    event.preventDefault();

    const editedContact = {
      id: editFormData.Id,
      name: editFormData.name,
      email: editFormData.email,
    };
    const newContacts = [...contacts];

    const index = contacts.findIndex((contact) => contact.id === editContactId);

    newContacts[index] = editedContact;

    setContacts(newContacts);
    setEditContactId(null);
  };
  const handleEditClick = (event, contact) => {
    event.preventDefault();
    setEditContactId(contact.id);

    const formValues = {
      name: contact.name,
      email: contact.email,
    };

    setEditFormData(formValues);
  };
  const handleCancelClick = () => {
    setEditContactId(null);
  };
  const handleDeleteClick = (contactId) => {
    const newContacts = [...contacts];

    const index = contacts.findIndex((contact) => contact.id === contactId);

    newContacts.splice(index, 1);

    setContacts(newContacts);
  };
  return (
    <div className='app'>
      <div className='container'>
      <h4>Add</h4>
        <input type='text' name='name' required placeholder='Enter a Name' onChange={handleAddFormChange}/><br/>
        <input type='text' name='email' required placeholder='Enter a Email' onChange={handleAddFormChange}/><br/>
        <button type='submit 'onClick={handleAddFormSubmit}>Add User</button>
      </div>
    <div className='app-container'>
    <form onSubmit={handleEditFormSubmit}>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact)=>(
            <Fragment>
              {editContactId === contact.id ?
              (<EditableRow 
                editFormData={editFormData} 
                handleEditFormChange={handleEditFormChange} 
                handleCancelClick={handleCancelClick}/>):
              (<ReadOnlyRow 
              contact={contact} 
              handleEditClick={handleEditClick} 
              handleDeleteClick={handleDeleteClick}/>)}
            </Fragment>
          ))}
        </tbody>
      </table>
      </form>
    </div>
    </div>
  )
}

export default App
