import React, { useState, useEffect } from 'react';



const RequestForApproval = () => {
  //   const [num,setNum]=useState("")
  //   const [loading,setLoading]=useState(false)
  //   const [company, setCompany] = useState("");
  //   const [data, setData] = useState([]);
  //   const [name,setName]=useState("")

  //   const [securitiesNum, setSecuritiesNum] = useState("");
  //   const [issuance, setIssuance] = useState("");
  //   const [securitiesName, setSecuritiesName] = useState("");
  //   const [securitiesType, setSecuritiesType] = useState("");
  //   const [distributionSheet, setDistributionSheet] = useState(null);
  //   const [businessPermit, setBusinessPermit] = useState(null);
  //   const [presentInTable, setPresentInTable] = useState(false);
  //   const [kosherDecision, setKosherDecision] = useState("");
  //   const [securitiesList, setSecuritiesList] = useState([]);
  //   const [selectedSecurities, setSelectedSecurities] = useState(null);
    
  //   const handleChange = (event) => {
  //     setNum(event.target.value);
  //   };

  //   const handleSubmit = async (e) => {
  //     e.preventDefault();
  //     console.log(num);
  //     try {
  //       const q = query(collection(db, "InvestmentCompany"),where("num", "==", num));
  //       const querySnapshot = await getDocs(q);
  //       const fetchedData = [];
  //       querySnapshot.forEach((doc) => {
  //       fetchedData.push({ name: doc.name, ...doc.data() });
  //       });
  //       setData(fetchedData);
  //       setLoading(true)
  //       setCompany(name)
  //       console.log(fetchedData);
  //     } catch (error) {
  //       console.error("Error fetching documents:", error);
  //     }
  //   }
  //  const handleFormSubmit= async(e)=>{
  //   e.preventDefault()
  //   // Check if securities exist in the stock table by name
  //   const q=query(collection(db,"securities"),where("name","===",securitiesName))
  //   const querySnapshot=await getDocs(q)
  //   const existingSecurities=querySnapshot.docs.map((doc)=>doc.data());
  //   let stockId

  //   if(existingSecurities.length>0){
  //     const existingSecuritiesData=existingSecurities[0]
  //     stockId=existingSecuritiesData.id

  //     if(kosherDecision==="approved"){
  //       await updateDoc(doc(db,"securities",stockId),{
  //         securitiesNum: securitiesNum
  //       })
  //     }
  //   }
  //   else{
  //   // Securities don't exist, add a new stock to the stock table
  //     const newStock={
  //       /// לסיים
  //       // securitiesNum: securitiesNum,
  //       // securitiesName: securitiesName,
  //       // securitiesType: securitiesType
  //     }
  //     const docRef = await addDoc(collection(db, "Stock"), newStock);
  //     stockId = docRef.id;
  //   }
  //  }


  //   return(
  //       <>
  //       <div class="form-group">
  //       <label> הזן מספר בית השקעה </label>
  //         <br></br>
  //         <input type="number" value={num} onChange={handleChange}
  //         onBlur={handleSubmit}
  //         />
  //       </div>
  //       {data.length > 0 ? (
  //           <p key={data[0].oid}>{data[0].name}</p>
  //     ):<p>לא קיים בית השקעה</p>}
  //     <form onSubmit={handleFormSubmit}>
  //     <div class="form-group">
  //       <label for="exampleFormControlInput1">Securities Number:</label>
  //       <input
  //         type="text"
  //         class="form-control"
  //         value={securitiesNum}
  //         // onChange={(e) => setSecuritiesNum(e.target.value)}
  //         required
  //       />
  //     </div>
  //     <div class="form-group">
  //       <label for="exampleFormControlInput1">Issuance:</label>
  //       <input
  //         type="text"
  //         id="issuance"
  //         class="form-control"
  //         value={issuance}
  //         // onChange={(e) => setIssuance(e.target.value)}
  //         required
  //       />
  //     </div>
  //       <label htmlFor="securitiesName">Securities Name:</label>
  //       <input
  //         type="text"
  //         id="securitiesName"
  //         value={securitiesName}
  //         // onChange={(e) => setSecuritiesName(e.target.value)}
  //         required
  //       />

  //       <label htmlFor="securitiesType">Securities Type:</label>
  //       <input
  //         type="text"
  //         id="securitiesType"
  //         value={securitiesType}
  //         // onChange={(e) => setSecuritiesType(e.target.value)}
  //         required
  //       />

  //       <label htmlFor="distributionSheet">Distribution Sheet:</label>
  //       <input
  //         type="file"
  //         id="distributionSheet"
  //         // onChange={(e) => setDistributionSheet(e.target.files[0])}
  //         required
  //       />

  //       <label htmlFor="businessPermit">Business Permit:</label>
  //       <input
  //         type="file"
  //         id="businessPermit"
  //         // onChange={(e) => setBusinessPermit(e.target.files[0])}
  //         required
  //       />
  //       </form>
  //       </>
  //   )
}
export default RequestForApproval