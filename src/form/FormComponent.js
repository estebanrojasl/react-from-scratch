import React from "react";

const FormComponent = (props) => {
  return (
    <main>
      <form>
        <input
          placeholder="First Name"
          onChange={props.handleChange}
          name="firstName"
        />
        <br />
        <input
          placeholder="Last Name"
          onChange={props.handleChange}
          name="lastName"
        />
        <br />
        <input placeholder="Age" onChange={props.handleChange} name="age" />
        <br />
        <label>
          <input
            type="radio"
            name="gender"
            value="Female"
            onChange={props.handleChange}
          />
          Female
        </label>
        <label>
          <br />
          <input
            type="radio"
            name="gender"
            value="Male"
            onChange={props.handleChange}
          />
          Male
        </label>
        <br />
        <select
          value={props.destination}
          onChange={props.handleChange}
          name="destination"
        >
          <option value="Iceland">Iceland</option>
          <option value="Holland">Holland</option>
          <option value="Australia">Australia</option>
        </select>
        <br />
        <input
          type="checkbox"
          name="isKosher"
          checked={props.restrictions.isKosher}
          onChange={props.handleChange}
        />
        Kosher
        <br />
        <input
          type="checkbox"
          name="isVegetarian"
          checked={props.restrictions.isVegetarian}
          onChange={props.handleChange}
        />
        Vegetarian
        <br />
        <input
          type="checkbox"
          name="isVegan"
          checked={props.restrictions.isVegan}
          onChange={props.handleChange}
        />
        Vegan
        <br />
        <button>Submit</button>
      </form>
      <hr />
      <h2>Entered information:</h2>
      <p>Your name: {`${props.firstName} ${props.lastName}`}</p>
      <p>Your age: {props.age}</p>
      <p>Your gender: {props.gender}</p>
      <p>Your destination: {props.destination}</p>
      <div>
        {
          <p>
            {`Your dietary restrictions: `}
            {props.restrictions.isKosher ? "Kosher " : null}
            {props.restrictions.isVegetarian ? "Vegetarian " : null}
            {props.restrictions.isVegan ? "Vegan " : null}
          </p>
        }
      </div>
    </main>
  );
};

export default FormComponent;
