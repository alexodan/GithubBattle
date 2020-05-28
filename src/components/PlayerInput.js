import React from "react";

const PlayerInput = ({ onSubmit, handleChange }) => {
  return (
    <form onSubmit={onSubmit}>
      <input type="text" onChange={handleChange} />
      <button type="submit">Submit</button>
    </form>
  );
};

export default PlayerInput;
