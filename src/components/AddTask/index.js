import React, { useState } from "react";
import { connect } from "react-redux";
import { v4 as uuidv4 } from "uuid";

import { faPlusSquare } from "@fortawesome/fontawesome-free-regular";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { addTaskAction } from "../../actions/addTaskActions";

import "./style.scss";

const AddTask = ({ addTaskAction }) => {
  const [taskName, setTaskName] = useState("");
  const handleInputChange = (e) => {
    setTaskName(e.target.value);
  };
  const handleTaskSubmit = () => {
    if (taskName) {
      addTaskAction({ id: uuidv4(), name: taskName });
      setTaskName("");
    }
  };
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      if (taskName) {
        addTaskAction({ id: uuidv4(), name: taskName });
        setTaskName("");
      }
    }
  };
  return (
    <div className="add-task">
      <input
        className="add-task__input"
        type="text"
        maxLength="30"
        value={taskName}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
      />
      <span className="add-task__button">
        <FontAwesomeIcon
          icon={faPlusSquare}
          onClick={() => {
            handleTaskSubmit();
          }}
        />
      </span>
    </div>
  );
};

export default connect(null, { addTaskAction })(AddTask);
