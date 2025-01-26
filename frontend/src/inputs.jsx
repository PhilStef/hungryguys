import { useState, useEffect } from 'react';
import './inputstyles.css';
import axios from 'axios';

function Inputs() {
  // Event handler for checkbox changes
  const handleCheckboxChange = async (event) => {
    // Get the ID of the checkbox
    let checkboxId = event.target.id;
    checkboxId = JSON.stringify(checkboxId); // Handle input for Flask
    // Check if the checkbox is checked
    const isChecked = event.target.checked;

    if (isChecked) {
      try {
        // Make a POST request to Flask backend with the data
        const response = await axios.post('http://localhost:5000/submit', {
          data: checkboxId,
        });

        // Handle the response from Flask
        console.log(response.data); // This will log the response received from Flask
      } catch (error) {
        console.error('There was an error sending data to the Flask backend!', error);
      }
    }
  };

  return (
    <>
      <fieldset className="absolute right-0 left-auto mx-auto top-10 p-4 border-2 border-gray-300">
        <legend>Options</legend>
        <div>
          <input
            type="checkbox"
            id="gunviolence"
            onChange={handleCheckboxChange}
          />
          <label htmlFor="gunviolence">Gun Violence</label>
        </div>
        <div>
          <input
            type="checkbox"
            id="airquality"
            onChange={handleCheckboxChange}
          />
          <label htmlFor="airquality">Air Quality</label>
        </div>
        <div>
          <input
            type="checkbox"
            id="schools"
            onChange={handleCheckboxChange}
          />
          <label htmlFor="schools">Schools</label>
        </div>
        <div>
          <input
            type="checkbox"
            id="parks"
            onChange={handleCheckboxChange}
          />
          <label htmlFor="parks">Parks</label>
        </div>
      </fieldset>
    </>
  );
}

export default Inputs;

