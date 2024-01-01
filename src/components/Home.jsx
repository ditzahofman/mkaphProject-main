import React, {useState,useEffect} from 'react';
import {signOut } from "firebase/auth";
import {auth} from '../firebase';
import {useNavigate,Routes, Route } from 'react-router-dom';
import Login from './loging&signup/Loging'
import AddCompany from './requests/addCompany';
import NavBar from './navBar/navBar';
import ViewCompanies from './requests/viewCompanies';
import RequestForApproval from './requests/RequestForApproval';

const Home = () => {
    const navigate = useNavigate();
    const [loading,setLoading]=useState(false)

    const handleLogout = () => {               
        signOut(auth).then(() => {
        // Sign-out successful.
            navigate("/");
            console.log("Signed out successfully")
        }).catch((error) => {
        // An error happened.
        });
    }


   
    return(
        <>
            <div className="App">
            <NavBar></NavBar>
            <Routes>
                <Route exact element={<Login />} path="/"/>
                <Route exact element={<AddCompany/>} path="/addCompany"/>
                <Route exact element={<ViewCompanies/>} path="/viewCompanies"/>
                <Route exact element={<RequestForApproval/>} path="/requestForApproval"/>
                {/* <Route exact element={<Donors/>} path="/donors/*"/>
                <Route exact element={<Search/>} path="/search"/>
                <Route exact element={<ManageRouter/>} path="/manage/*"/>
                <Route exact element={<LogOut/>} path="/logout"/> */}
                {/* <Route exact element={<Error/>} path="*"/> */}
            </Routes>
        </div>
        </>
    )
}
 
export default Home;