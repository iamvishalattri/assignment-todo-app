import React from "react";
import { connect } from "react-redux";

import ActiveTask from "../../components/ActiveTask";

const ActiveTaskList = ({ activeTasks }) => {
  return (
    <>
      {activeTasks.length ? (
        activeTasks.map((task) => (
          <ActiveTask key={task.id} taskDetails={task} />
        ))
      ) : (
        <div className="active-task">
          <span className="active-task__noData">No Records</span>
        </div>
      )}
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    activeTasks: state.activeTasks,
  };
};

export default connect(mapStateToProps)(ActiveTaskList);
