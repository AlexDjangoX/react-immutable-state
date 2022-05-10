import React from "react";

const Sets = (workout) => {
  return (
    <p>
      {workout.sets}x sets of{" "}
      <strong>
        {workout.reps}x{workout.exercise}
      </strong>{" "}
      with {workout.rest} seconds rest
    </p>
  );
};

export default Sets;
