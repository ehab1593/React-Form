import React, { useState } from "react";

import styles from "./styles.module.css";

function Input() {
  const [formInput, setFormInput] = useState({
    firstName: "",
    lastName: "",
    age: "",
    address: "",
    classNumber: "",
    studentId: "",
    lunch: "",
  });

  const handleFormInput = (e) => {
    const { name, value } = e.target;
    setFormInput((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <>
      <h1 className={styles.h1} >Student Form</h1>
      <form className={styles.form} >
        <label for="fname">First Name </label>
        <input
          value={formInput.firstName}
          onChange={handleFormInput}
          id="fname"
          type="text"
          name="firstName"
        ></input>

        <label for="lname">Last Name </label>
        <input
          value={formInput.lastName}
          onChange={handleFormInput}
          id="lname"
          type="text"
          name="lastName"
        ></input>

        <label for="age">Age </label>
        <input
          value={formInput.age}
          onChange={handleFormInput}
          id="age"
          type="text"
          name="age"
        ></input>

        <label for="address">Address </label>
        <input
          value={formInput.address}
          onChange={handleFormInput}
          id="address"
          type="text"
          name="address"
        ></input>

        <label for="classNum">Homeroom Class number </label>
        <input
          value={formInput.classNumber}
          onChange={handleFormInput}
          id="classNum"
          type="text"
          name="classNumber"
        ></input>

        <label for="id">Student ID </label>
        <input
          value={formInput.studentId}
          onChange={handleFormInput}
          id="id"
          type="text"
          name="studentId"
        ></input>

        <p>Select choice of lunch</p>
        <input
          type="radio"
          id="lasagne"
          name="lunch"
          value="Lasagne"
          onChange={handleFormInput}
        />

        <label forHtml="lasagne">Lasagne</label>

        <input
          type="radio"
          id="lohi"
          name="lunch"
          value="Lohikeitto"
          onChange={handleFormInput}
        />
        <label forHtml="lohi">Lohi-keitto</label>

        <input
          type="radio"
          id="pasta"
          name="lunch"
          value="Tonnikala Pasta"
          onChange={handleFormInput}
        />
        <label forHtml="pasta">Tonnikala Pasta</label>

        <input
          type="radio"
          id="burger"
          name="lunch"
          value="Hampurilainen"
          onChange={handleFormInput}
        />
        <label forHtml="burger">Hampurilainen</label>
      </form>

      <div className={styles.div}>
        <h2>Your entered info:</h2>
        <h4>First Name: {formInput.firstName}</h4>
        <h4>Last Name: {formInput.lastName}</h4>
        <h4>Age: {formInput.age}</h4>
        <h4>Address: {formInput.address}</h4>
        <h4>Class: {formInput.classNumber}</h4>
        <h4>Student ID: {formInput.studentId}</h4>
        <h4>Today's lunch choice: {formInput.lunch}</h4>
      </div>
    </>
  );
}

export default Input;
