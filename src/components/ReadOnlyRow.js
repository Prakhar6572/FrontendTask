import React from "react";

const ReadOnlyRow = ({ contact, handleEditClick, handleDeleteClick }) => {
  return (
    <tr>
            <td>{contact.id}</td>
            <td>{contact.name}</td>
            <td>{contact.email}</td>
      <td>
        <button
          type="button"
          onClick={(event) => handleEditClick(event, contact)} 
          style={{backgroundColor:'rgb(78, 177, 235)',color:'#ffffff',fontSize:'20px',
            width: '100px',
            height: '36px',
            paddingLeft: '1px',
            paddingTop: '5px',
            paddingBottom: '5px',
            paddingRight: '1px',
            border: 'none',
            borderRadius: '5px',
            textAlign: 'center',}}
        >
          Edit
        </button>
        <button type="button" onClick={() => {
            const confirmBox = window.confirm("Do you really want to delete this Record?")
        if (confirmBox === true) {
        handleDeleteClick(contact.id)
    }
    }} style={{backgroundColor:'rgb(237, 54, 54)',color:'#ffffff',fontSize:'20px',
      width: '100px',
      height: '36px',
      paddingLeft: '1px',
      paddingTop: '5px',
      paddingBottom: '5px',
      paddingRight: '1px',
      border: 'none',
      borderRadius: '5px',
      textAlign: 'center'}} >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default ReadOnlyRow;
