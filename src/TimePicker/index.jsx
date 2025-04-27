import React, { useState } from "react";

const TimePicker = () => {
  const [data, setData] = useState([]);

  function addTimePicker() {
    setData((prevData) => [...prevData, { day: "select", time: "" }]);
  }

  function deleteTimePicker(id) {
    setData((prevData) => prevData.filter((_, index) => index !== id));
  }

  function handleDayChange(id, e) {
    const day = e.target.value;

    setData((prevData) =>
      prevData.map((item, i) => (i === id ? { ...item, day } : item))
    );
  }

  function handleTimeChange(id, e) {
    const time = e.target.value;

    setData((prevData) =>
      prevData.map((item, i) => (i === id ? { ...item, time } : item))
    );
  }

  return (
    <div>
      <button onClick={addTimePicker}>Add a Time Picker</button>
      {data.map((item, index) => {
        return (
          <React.Fragment key={index}>
            <br />
            <select
              value={item.day}
              onChange={(e) => handleDayChange(index, e)}
            >
              <option>Select</option>
              <option>Sunday</option>
              <option>Monday</option>
              <option>Tuesday</option>
              <option>Wednesday</option>
              <option>Thursday</option>
              <option>Friday</option>
              <option>Saturday</option>
            </select>
            <input
              type="time"
              value={item.time}
              onChange={(e) => handleTimeChange(index, e)}
            />
            <button onClick={() => deleteTimePicker(index)}>delete</button>
            <br />
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default TimePicker;
