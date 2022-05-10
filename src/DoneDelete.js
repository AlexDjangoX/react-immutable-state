import React from "react";

const DoneDelete = ({ workout, completeWorkout, deleteWorkout }) => {
  return (
    <React.Fragment>
      {!workout.done && (
        <button onClick={(e) => completeWorkout(workout)}>Done</button>
      )}
      {workout.done && <p>✅</p>}
      <button onClick={(e) => deleteWorkout(workout)}>Delete</button>
    </React.Fragment>
  );
};

export default DoneDelete;
