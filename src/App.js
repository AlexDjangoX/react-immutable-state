import { useState } from "react";
import { initialWorkouts, generateWorkout } from "./Workouts.js";
import "./App.css";

function App() {
  const [workouts, setWorkouts] = useState(initialWorkouts);

  const addNewWorkout = () => {
    const newWorkout = generateWorkout();
    const newWorkoutList = [...workouts, newWorkout];
    setWorkouts(newWorkoutList);
  };

  const deleteWorkout = (workout) => {
    const newWorkoutList = workouts.filter((el) => el !== workout);
    setWorkouts(newWorkoutList);
  };

  const completeWorkout = (workout) => {
    const newWorkoutList = workouts.map((el) => {
      if (el === workout) {
        const newEl = { ...el, done: true };
        return newEl;
      }
      return el;
    });

    setWorkouts(newWorkoutList);
  };

  const [check, setCheck] = useState(false);
  const [originalState, setOriginalState] = useState();

  const setChecked = () => {
    setOriginalState(workouts);
    if (!check) {
      const newWorkoutList = workouts.filter((el) => {
        return el.done === true;
      });
      setWorkouts(newWorkoutList);
    } else {
      setWorkouts(originalState);
    }
    setCheck(true);
  };

  return (
    <div className="App">
      <h1>🏋️‍♀️Workout Generator</h1>
      <button onClick={addNewWorkout}>Add New Workout</button>
      <div>
        <input type="checkbox" onChange={setChecked} />

        <label for="show-done"> Show done only</label>
      </div>
      <ul>
        {workouts.map((workout, index) => (
          <li key={index}>
            <p>
              {workout.sets}x sets of{" "}
              <strong>
                {workout.reps}x{workout.exercise}
              </strong>{" "}
              with {workout.rest} seconds rest
            </p>
            {!workout.done && (
              <button onClick={(e) => completeWorkout(workout)}>Done</button>
            )}
            {workout.done && <p>✅</p>}
            <button onClick={(e) => deleteWorkout(workout)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
