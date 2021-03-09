import React from "react";
import { connect } from "react-redux";
import moment from "moment";

import { faSquare } from "@fortawesome/fontawesome-free-regular";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { terminateCompletedTaskAction } from "../../actions/completedTaskActions";

import "./style.scss";

const CompletedTask = ({ taskDetails, terminateCompletedTaskAction }) => {
  return (
    <div className="completed-task">
      <span className="completed-task__checkbox">
        <FontAwesomeIcon
          icon={faSquare}
          onClick={() => terminateCompletedTaskAction(taskDetails.id)}
        />
      </span>
      <span className="completed-task__text">{taskDetails.name}</span>
      <span className="completed-task__date">
        {moment(taskDetails.date).format("DD/MM/YYYY")}
      </span>
    </div>
  );
};

export default connect(null, {
  terminateCompletedTaskAction,
})(CompletedTask);
