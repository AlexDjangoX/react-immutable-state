import React from "react";

const ShowDoneOnly = ({ setCheck }) => {
  return (
    <div>
      <input type="checkbox" onChange={setCheck} />

      <label for="show-done"> Show done only</label>
    </div>
  );
};

export default ShowDoneOnly;
