import React, { useState, useEffect } from 'react'
import { collection, query, getDocs, where } from "firebase/firestore";
import { db } from '../../firebase';
import Loading from '../loading';
function ViewCompanies() {
  const [CompaniesData, setData] = useState(null);
  const [num,setNum]=useState(0)
  const [loading,setLoading]=useState(false)
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [active, setActive]=useState(false)
  const [data,setDate]=useState("")
  const getCompanies = async () => {
    try {
      const q = query(collection(db, "InvestmentCompany"));
      const querySnapshot = await getDocs(q);
      const fetchedData = [];
      querySnapshot.forEach((doc) => {
        fetchedData.push({
            num: doc.num,
            name: doc.name,
            email: doc.email,
            date: doc.date,
            active: doc.status=="פעיל" ?true :false,
            ...doc.data(),
          });
      });
      setData(fetchedData);
      setLoading(true)
      setActive(active)
      setDate(email)

    } catch (error) {
      console.error("Error fetching documents:", error);
    }
  };


  useEffect(() => {
    getCompanies();
  }, [data])
  return (
    <>
      {loading?
      <table class="table table-striped">
      <thead class="thead-dark">
        <tr>
          <th>תאריך עדכון</th>
          <th>סטאטוס פעיל</th>
          <th>כתובת מייל</th>
          <th>שם בית השקעה</th>
          <th>מספר בית השקעה</th>
        </tr>
        </thead>
        <tbody>
        {CompaniesData&&CompaniesData.map((i) =>
          <tr>
            <td key={i.oid}>{i.date}</td>
            <td key={i.oid}>{i.status}</td>
            <td key={i.oid}>{i.email}</td>
            <td key={i.oid}>{i.name}</td>
            <td key={i.oid}>{i.num}</td>
          </tr>
        ) }
        </tbody>
      </table>
       :<Loading />}

    </>
  );
}
export default ViewCompanies
