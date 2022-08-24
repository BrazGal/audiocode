import React, { useState, Fragment } from "react";
import ReadOnlyRow from "../components/ReadOnlyRow";
import EditableRow from "../components/EditableRow";
import '../pages/Suite.css'
import data from "../mock-data.json";
import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';
import Filter from "../components/Filter";
import $ from 'jquery';



const Suite = () => {
  const [contacts, setContacts] = useState(data);
  const [editFormData, setEditFormData] = useState({
    fullName: "",
    Description: "",
    Requirement: "ST functional",
    Run: "No Run",
    Status: "Open",
  });

  const [editContactId, setEditContactId] = useState(null);

  const handleEditFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...editFormData };
    newFormData[fieldName] = fieldValue;

    setEditFormData(newFormData);
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
  var $TABLE = $('#table');

  $(document).on('change', 'table thead [type="checkbox"]', function(e){
    e && e.preventDefault();
    var $table = $(e.target).closest('table'), $checked = $(e.target).is(':checked');
    $('tbody [type="checkbox"]',$table).prop('checked', $checked);
    $("#btn-del-reports").toggle();
  });

  return (
    <div>
        <br/>
          <div className='SuiteTitle'>
            Suite
          </div>
        <Link to = "/TestCasesAdd" className="AddButton" > <Icon icon="carbon:add"/></Link>
        <Link to="/TestCases" className="CancelButton" > <Icon icon="iconoir:cancel" /></Link>
        <Filter/>
        <hr width="-80%"/>
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
  )
}

export default Suite