import { useState } from "react";
import { initialWorkouts, generateWorkout } from "./Workouts.js";
import "./App.css";
import Workout from "./Workout.js";
import AddNewWorkoutButton from "./AddNewWorkoutButton.js";
import ShowDoneOnly from "./ShowDoneOnly.js";

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
      <AddNewWorkoutButton addNewWorkout={addNewWorkout} />
      <ShowDoneOnly setCheck={setChecked} />

      <ul>
        {workouts.map((workout, index) => (
          <Workout
            workout={workout}
            index={index}
            completeWorkout={completeWorkout}
            deleteWorkout={deleteWorkout}
          />
        ))}
      </ul>
    </div>
  );
}

export default App;
