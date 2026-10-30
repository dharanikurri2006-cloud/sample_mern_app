import { useNavigate } from "react-router-dom"
function HrHome() {
    let navigate=useNavigate()
    let currentuser=JSON.parse(localStorage.getItem("currentuser"))
    let handleLogout=()=>{
        localStorage.removeItem("currentuser")
        navigate("/login")
    }

    return (<div> 
        <h1>HR Home</h1>
        <h2>welcome, {currentuser.name}</h2>
        <button onClick={handleLogout}>Logout</button>  
    </div>)
}   
export default HrHome

