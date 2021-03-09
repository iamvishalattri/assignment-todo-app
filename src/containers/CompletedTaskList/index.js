import React from "react";
import { connect } from "react-redux";

import CompletedTask from "../../components/CompletedTask";

const CompletedTaskList = ({ completedTasks }) => {
  return (
    <>
      {completedTasks.length ? (
        completedTasks.map((task) => (
          <CompletedTask key={task.id} taskDetails={task} />
        ))
      ) : (
        <div className="completed-task">
          <span className="completed-task__noData">No Records</span>
        </div>
      )}
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    completedTasks: state.completedTasks,
  };
};

export default connect(mapStateToProps)(CompletedTaskList);
