import { useState } from "react";

const User = () => {

  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);

  return (
    <div className="user-card">
      <h1>Count = {count}</h1>
      <h2>Name: Jay</h2>
      <h3>Location: Ahmedabad</h3>
      <h4>Contact: @jy_patel9</h4>
    </div>
  );
};

export default User;
