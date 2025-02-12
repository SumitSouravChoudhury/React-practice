import { useState } from "react";

function Forms() {
  const [data, setData] = useState({
    username: "",
    password: "",
  });

  const [submitted, setSubmitted] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();
    setData({
      username: "",
      password: "",
    });
    setSubmitted([...submitted, data]);
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>Username:</label>
        <input
          type="text"
          name="username"
          value={data.username}
          onChange={handleChange}
          placeholder="Enter the username"
        />
        <label>Password:</label>
        <input
          type="password"
          name="password"
          value={data.password}
          onChange={handleChange}
          placeholder="Enter the password"
        />
        <button type="submit">Submit</button>
      </form>
      <ul>
        {submitted.map((d, i) => {
          return (
            <>
              <li key={i}>{d.username}</li>
              <li key={i}>{d.password}</li>
              <hr></hr>
            </>
          );
        })}
      </ul>
    </>
  );
}

export default Forms;
