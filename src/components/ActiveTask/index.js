import React, { useState } from "react";
import { connect } from "react-redux";

import { faSave, faSquare } from "@fortawesome/fontawesome-free-regular";
import { faTimes, faPencilAlt } from "@fortawesome/fontawesome-free-solid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  completeActiveTaskAction,
  editActiveTaskAction,
  saveActiveTaskAction,
  deleteActiveTaskAction,
} from "../../actions/activeTaskActions";

import "./style.scss";

const ActiveTask = ({
  completeActiveTaskAction,
  editActiveTaskAction,
  saveActiveTaskAction,
  deleteActiveTaskAction,
  taskDetails,
}) => {
  const [editableInput, setEditableInput] = useState(taskDetails.name);
  const handleInputChange = (e) => {
    setEditableInput(e.target.value);
  };
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      if (editableInput) {
        setEditableInput(e.target.value);
      }
    }
  };
  return (
    <div className="active-task">
      {taskDetails.isEditable ? null : (
        <span className="active-task__checkbox">
          <FontAwesomeIcon
            icon={faSquare}
            onClick={() => completeActiveTaskAction(taskDetails.id)}
          />
        </span>
      )}
      {taskDetails.isEditable ? (
        <input
          className="active-task__input"
          type="text"
          maxLength="30"
          value={editableInput}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
        />
      ) : (
        <span className="active-task__text">{taskDetails.name}</span>
      )}
      {taskDetails.isEditable ? (
        <span className="active-task__edit">
          <FontAwesomeIcon
            icon={faSave}
            size="lg"
            onClick={() => {
              if (editableInput) {
                saveActiveTaskAction(taskDetails.id, editableInput);
              }
            }}
          />
        </span>
      ) : (
        <>
          <span className="active-task__edit">
            <FontAwesomeIcon
              icon={faPencilAlt}
              size="sm"
              onClick={() => editActiveTaskAction(taskDetails.id)}
            />
          </span>
          <span className="active-task__delete">
            <FontAwesomeIcon
              icon={faTimes}
              size="lg"
              onClick={() => deleteActiveTaskAction(taskDetails.id)}
            />
          </span>
        </>
      )}
    </div>
  );
};

export default connect(null, {
  completeActiveTaskAction,
  editActiveTaskAction,
  saveActiveTaskAction,
  deleteActiveTaskAction,
})(ActiveTask);
