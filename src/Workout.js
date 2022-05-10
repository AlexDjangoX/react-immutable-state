import React from "react";
import Sets from "./Sets";
import DoneDelete from "./DoneDelete";

const Workout = ({ workout, index, completeWorkout, deleteWorkout }) => {
  return (
    <li key={index}>
      <Sets />
      <DoneDelete
        completeWorkout={completeWorkout}
        deleteWorkout={deleteWorkout}
        workout={workout}
      />
    </li>
  );
};

export default Workout;
