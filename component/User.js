import { useEffect, useState } from "react";

const User = ({ name }) => {
  const [count] = useState(0);
  const [count2] = useState(2);

  useEffect(() => {
    const timer = setInterval(() => {
      console.log("I am updated");
    }, 1000);

    console.log("I am Use Effect");

    return () => {
      clearInterval(timer);
      console.log("I Stop Updating");
    };
  }, []);

  console.log("Render");
  return (
    <div className="user-card">
      <h1>Count :{count} </h1>
      <h1>Count2:{count2} </h1>
      <h2>Name : {name}</h2>
      <h2>Location : Nagpur</h2>
      <h2>email : sahilgraut@gmail.com</h2>
    </div>
  );
};

export default User;
