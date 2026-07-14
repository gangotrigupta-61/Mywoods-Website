import { useState } from "react"
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function Register(){
 
     const navigate = useNavigate();
      const [name, setName] = useState(null)
    const [email, setEmail] = useState(null)
    const [password, setPassword] = useState(null)

    const handleRegister = async () => {
        try {
            const raw = {
                name:name,
                email: email,
                password: password,

            };

            const response = await fetch("https://mywoods-backend-kvs4.onrender.com/api/auth/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
    name,             
      email,
      password,
    }),
            });

            const result = await response.json();
             console.log(result);

            if (!response.ok) {
                // throw new Error(`HTTP error! Status: ${response.status}`);
                 toast.error(result.error || result.message || "Registration failed");
                   return;
            }
            else{
               toast.success("Registered Successfully!");
                // Wait 2 seconds so the toast is visible
        setTimeout(() => {
            navigate("/login");
        }, 2000);


                // Redirect to Login on successful registration
              
            }

            

            
           
            console.log(result);

        
        
       

       


    }

        catch (error) {
            console.error("Error:", error);
        }
    }

    return(
        <>
       <div className="login-container">
    <h1>Register</h1>


    <label>Name</label>
    <input
        type="text"
        onChange={(e) => setName(e.target.value)}
    />

    <label>Email</label>
    <input
        type="text"
        onChange={(e) => setEmail(e.target.value)}
    />

    <label>Password</label>
    <input
        type="password"
        onChange={(e) => setPassword(e.target.value)}
    />

    <button onClick={handleRegister}>Register</button>
    <br />

    
</div>
        </>
    )
}