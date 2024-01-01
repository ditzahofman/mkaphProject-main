import React, { useState, useCallback } from 'react';
// import { getFirestore } from 'firebase/firestore';
import { collection, query, where, addDoc, getDocs } from "firebase/firestore";
import { db, auth } from '../../firebase';
import moment from 'moment/moment';


const RequestForApproval = () => {
    const [num,setNum]=useState(0)
    const [loading,setLoading]=useState(false)
    const [company, setCompany] = useState("");
    const [data, setData] = useState([]);
    const [error, setError] = useState("");

    const handleChange=async (e) =>{
      setNum(e.target.value)
      console.log(num);
      setLoading(true);
      try {
          const docRef = await addDoc(collection(db, "InvestmentCompany"), {
          notes: num,
          uid: 100,
          dateCreated: moment().format("MMM Do YY")
        });

        setLoading(false);

      } 
      catch (error) {
      console.error("Error adding document:", error);
      setError("Error adding the note.");
      }
      }
   
    
    
    return(
        <>
        <label>
          הזן מספר בית השקעה 
          <br></br>
          <input type="number" value={num} onChange={handleChange} />
        </label>
        </>
    )
}
export default RequestForApproval