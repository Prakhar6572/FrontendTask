import React from "react";

const EditableRow = ({
  editFormData,
  handleEditFormChange,
  handleCancelClick,
}) => {
  return (
    <tr>
      <td>
      <input
          type="number"
          required="required"
          placeholder="Enter a Id..."
          name="Id"
          value={editFormData.Id}
          onChange={handleEditFormChange}
          style={{width:'100px'}}
        ></input>
        </td>
        <td>
        <input
          type="text"
          required="required"
          placeholder="Enter a name..."
          name="name"
          value={editFormData.name}
          onChange={handleEditFormChange}
          style={{width:'250px'}}
        ></input>
      </td>
      <td>
        <input
          type="email"
          required="required"
          placeholder="Enter an email..."
          name="email"
          value={editFormData.email}
          onChange={handleEditFormChange}
          style={{width:'450px'}}
        ></input>
      </td>
      <td>
        <button type="submit" style={{backgroundColor:'rgb(78, 177, 235)',color:'#ffffff',fontSize:'20px',
    width: '100px',
    height: '36px',
    border: 'none',
    borderRadius: '5px',
    textAlign: 'center',}}>Save</button>
        <button type="button" style={{backgroundColor:'rgb(237, 54, 54)',color:'#ffffff',fontSize:'20px',
    width: '100px',
    height: '36px',
    border: 'none',
    borderRadius: '5px',
    textAlign: 'center'}} onClick={handleCancelClick}>
          Cancel
        </button>
      </td>
    </tr>
  );
};

export default EditableRow;
