import React, { useState, Fragment } from "react";
import { nanoid } from "nanoid";
import data from "../mock-data.json";
import ReadOnlyRow from "../components/ReadOnlyRow";
import EditableRow from "../components/EditableRow";
import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom'
import $ from 'jquery';




const Suite = () => {
  const [contacts, setContacts] = useState(data);
  const [addFormData, setAddFormData] = useState({
    fullName: "",
    Description: "",
    Requirement: "ST functional",
    Run: "No Run",
    Status: "Open",
  });

  const [editFormData, setEditFormData] = useState({
    fullName: "",
    Description: "",
    Requirement: "ST functional",
    Run: "No Run",
    Status: "Open",
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
      id: nanoid(),
      fullName: addFormData.fullName,
      Description: addFormData.Description,
      Requirement: addFormData.Requirement,
      Run: addFormData.Run,
      Status: addFormData.Status,
    };

    const newContacts = [...contacts, newContact];
    setContacts(newContacts);
  };

  const handleEditFormSubmit = (event) => {
    event.preventDefault();

    const editedContact = {
      id: editContactId,
      fullName: editFormData.fullName,
      Requirement: "ST functional",
      Description: editFormData.Description,
      Run: "No Run",
      Status: "Open",
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
      fullName: contact.fullName,
      Description: contact.Description,
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

  $(document).on('change', 'table thead [type="checkbox"]', function(e){
    e && e.preventDefault();
    var $table = $(e.target).closest('table'), $checked = $(e.target).is(':checked');
    $('tbody [type="checkbox"]',$table).prop('checked', $checked);
    $("#btn-del-reports").toggle();
  });

  return (
    <div>
      <br/>
      <div>
        <Link to="/TestCases" className="CancelButton" > <Icon icon="iconoir:cancel" /></Link>
      </div>
      <form onSubmit={handleAddFormSubmit}>
        <input
          type="text"
          name="fullName"
          required="required"
          placeholder="Name"
          className="Fname"
          onChange={handleAddFormChange}
        />
        <input
          type="text"
          name="Description"
          required="required"
          placeholder="Description"
          className="Description"
          onChange={handleAddFormChange}
        />
        <button className="buttonAddButton" type="submit"><Icon icon="carbon:add" /></button>
      </form>
      <br />
      <div className="container">
        <form onSubmit={handleEditFormSubmit}>
          <table>
            <thead>
              <tr>
                <th>
                  <span >
                    <input type="checkbox" id="check-all" /><label>All</label>
                  </span>
                </th>
                <th>Title</th>
                <th>Requirement</th>
                <th>Assignee</th>
                <th>Run</th>
                <th>Status</th>
                <th>Options</th>
              </tr>
            </thead>
            <tbody>
              {contacts.map((contact) => (
                <Fragment>
                  {editContactId === contact.id ? (
                    <EditableRow
                      editFormData={editFormData}
                      handleEditFormChange={handleEditFormChange}
                      handleCancelClick={handleCancelClick}
                    />
                  ) : (
                    <ReadOnlyRow
                      contact={contact}
                      handleEditClick={handleEditClick}
                      handleDeleteClick={handleDeleteClick}
                    />
                  )}
                </Fragment>
              ))}
            </tbody>
          </table>
        </form>
      </div>
    </div>

  );
};

export default Suite;