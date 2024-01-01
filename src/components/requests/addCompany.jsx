import React, { useState } from 'react';
import emailValidator from "email-validator";

// import { getFirestore } from 'firebase/firestore';
import { collection, query, where, addDoc, getDocs } from "firebase/firestore";
import { db, auth } from '../../firebase';
import moment from 'moment/moment';


const AddCompany = () => {
    // const db = getFirestore();
    const [num,setNum]=useState(0)
    const [loading,setLoading]=useState(false)
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [error, setError] = useState("");
    const [active, setActive]=useState(false)


    const handleSubmit=async (e) =>{
      e.preventDefault()
      const isValid = emailValidator.validate(email);
      // Display error message if email is invalid
      if (!isValid) {
        alert("כתובת המייל אינה תקינה.");
      }
      setNum(e.target.value)
      console.log(num);
      setLoading(true);
      try {
          const docRef = await addDoc(collection(db, "InvestmentCompany"), {
          oid: 103,
          num: num,
          date: moment().format("MMM Do YY"),
          email: email,
          name: name,
          status: active ? "פעיל": "לא פעיל" 
        });

        setLoading(false);

      } catch (error) {
        console.error("Error adding document:", error);
        setError("Error adding the note.");
      }
      }
   
    
    
      return (
        <form onSubmit={handleSubmit}>
        <div class="form-group row">
        <label for="inputEmail3" class="col-sm-2 col-form-label">מספר בית השקעה</label>
        <div class="col-sm-10">
          <input
            type="text"
            class="form-control"
            placeholder="מספר בית השקעה"
            value={num}
            onChange={(e) => setNum(e.target.value)}
          />
          </div>
          </div>
          <div class="form-group row">
          <label for="inputName" class="col-sm-2 col-form-label">שם בית ההשקעה</label>
          <div class="col-sm-10">
          <input
            type="text"
            class="form-control"
            placeholder="שם בית השקעה"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          </div>
          </div>
          <div class="form-group row">
          <label for="inputEmail" class="col-sm-2 col-form-label">Email</label>
          <div class="col-sm-10">
          <input
            type="email"
            class="form-control"
            placeholder="כתובת מייל"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          </div>
          </div>
          <div class="row">
            <legend class="col-form-label col-sm-2 pt-0">פעיל</legend>
            <div class="col-sm-10">
            <div class="form-check">
          <input
            type="checkbox"
            class="form-check-input"
            id="active"
            checked={active}
            onChange={(e) => setActive(e.target.checked)}
          />
          </div>
          </div>
          </div>
          <div class="form-group row">
          <div class="col-sm-10">
          <button type="submit" class="btn btn-primary">Sign in</button>
          </div>
  </div>
        </form>
        
      );
}
export default AddCompany