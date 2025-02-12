import { useState } from "react";

function Form() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [items, setItems] = useState([]);

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setFormData({
      name: "",
      email: "",
      password: "",
    });
    setItems([...items, formData]);
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        <label>Password:</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>
      <ul>
        {items.map((item, index) => {
          return (
            <>
              <li key={index}>{item.name}</li>
              <li key={index}>{item.email}</li>
              <li key={index}>{item.password}</li>
              <hr></hr>
            </>
          );
        })}
      </ul>
    </>
  );
}

export default Form;
