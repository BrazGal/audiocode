import React from "react";

const ReadOnlyRow = ({ contact, handleEditClick, handleDeleteClick }) => {
  return (
    <tr>
      <td> 
      <span>
      <input type="checkbox" id="selectAll" />
      <label for="selectAll"></label>
      </span>
      </td>
      <td>{contact.Description}</td>
      <td> {contact.Requirement}</td>
      <td>{contact.fullName}</td>
      <td>{contact.Run}</td>
      <td>{contact.Status}</td>
      <td>
        <button 
          type="button" className="EditButton"
          onClick={(event) => handleEditClick(event, contact)}
        >
          Edit
        </button>
        <button type="button" className="DeleteButton"
         onClick={() => handleDeleteClick(contact.id)}>
          Delete
        </button>
      </td>
    </tr>
  );
};

export default ReadOnlyRow;
