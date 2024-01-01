import React, { useState, useEffect } from 'react';
import { collection, query, where, addDoc, getDocs } from "firebase/firestore";
import { db } from '../../firebase';


const RequestForApproval = () => {
    const [num,setNum]=useState("")
    const [loading,setLoading]=useState(false)
    const [company, setCompany] = useState("");
    const [data, setData] = useState([]);
    const [name,setName]=useState("")
    
    const handleChange = (event) => {
      setNum(event.target.value);
    };

    const handleSubmit = async (e) => {
      e.preventDefault();
      console.log(num);
      try {
        const q = query(collection(db, "InvestmentCompany"),where("num", "==", num));
        const querySnapshot = await getDocs(q);
        const fetchedData = [];
        querySnapshot.forEach((doc) => {
        fetchedData.push({ name: doc.name, ...doc.data() });
        });
        setData(fetchedData);
        setLoading(true)
        setCompany(name)
        console.log(fetchedData);
      } catch (error) {
        console.error("Error fetching documents:", error);
      }
    }


    return(
        <>
        <label>
          הזן מספר בית השקעה 
          <br></br>
          <input type="number" value={num} onChange={handleChange}
          onBlur={handleSubmit}
          />
        </label>
        {data.length > 0 ? (
            <p key={data[0].oid}>{data[0].name}</p>
      ):<p>לא קיים בית השקעה</p>}
        </>
    )
}
export default RequestForApproval