import { useState } from "react"
import { useNavigate } from "react-router-dom"
function Register(){
    let [name,setName]=useState("")
    let [email,setEmail]=useState("")
    let [password,setPassword]=useState("")
    let [role, setRole] = useState("")

    let [error,setError]=useState("")

    let navigate=useNavigate()

    let handleRegister=async(event)=>{
        event.preventDefault()
        let res=await fetch("http://localhost:3000/api/emp/register",
            {
                method:"POST",
                headers:{'Content-Type':"application/json"},
                body:JSON.stringify({name,email,password,role})
                
            }
        )
        let data=await res.json()
        if (res){
            console.log("data registered success")
            console.log(data);
        }else{
            console.log("data insertion failed")
            console.log(data);
        }

    }
    return(
    <div>
        <form onSubmit={handleRegister}>

            <input type="text" onChange={(e)=>setName(e.target.value)} value={name} placeholder="Enter username"></input><br/>
            <input type="text" onChange={(e)=>setEmail(e.target.value)} value={email} placeholder="Enter emailid"></input><br/>
            <input type="password" onChange={(e)=>setPassword(e.target.value)} value={password} placeholder="Enter password"></input><br/>
            <select value={role} onChange={(e) => setRole(e.target.value)}>
                <option value="">Choose Role</option>
                <option value="EMPLOYEE">EMPLOYEE</option>
                <option value="HR">HR</option>
            </select>
            
            <button type="submit">Register</button>
        </form>
    </div>
    )
}

export default Register