import { NavLink } from "react-router-dom";
import './navBar.css'
export default function NavBar() {
    // const rank = JSON.parse(sessionStorage.getItem("currentUser")).Rank;
    return (
        <nav className="nav">
            <NavLink className="nav_link"  exact to={"AddCompany"}>הוספת בית עסק</NavLink>
            <NavLink className="nav_link" exact to={"ViewCompanies"}>צפיה בבתי העסק</NavLink>
            {/* <NavLink className="nav_link" exact to={"donors"}>תורמים</NavLink>
            <NavLink className="nav_link" exact to={"search"}>חיפוש מתקדם</NavLink>
            {rank=="manager"&&<NavLink className="nav_link" exact to={"manage"}>ניהול</NavLink>}
            <NavLink className="nav_link" exact to={"logout"}>יציאה מהמערכת</NavLink> */}
        </nav>
    )
}