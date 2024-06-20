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
        >
          Edit
        </button>
        <button type="button" onClick={() => {
            const confirmBox = window.confirm("Do you really want to delete this Record?")
        if (confirmBox === true) {
        handleDeleteClick(contact.id)
    }
    }}>
          Delete
        </button>
      </td>
    </tr>
  );
};

export default ReadOnlyRow;