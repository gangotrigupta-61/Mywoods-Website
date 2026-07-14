import { useState } from "react"
import { useNavigate } from "react-router-dom";

import { toast } from "react-toastify";

export default function Login(){
 
     const navigate = useNavigate();

    const [email, setEmail] = useState(null)
    const [password, setPassword] = useState(null)

    const handleLogin = async () => {
        try {
            const raw = {
                email: email,
                password: password,

            };

            const response = await fetch("https://mywoods-backend-kvs4.onrender.com/api/auth/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
      email,
      password,
    }),
            });


             const result = await response.json();
  
            if (!response.ok) {
                 toast.error(result.message || "Account does not exist");
                //   throw new Error(`HTTP error! Status: ${response.status}`);
                  return;
            }
            // else{
                //  alert("Login Successful");

            //     // Redirect to Home
            //    toast.success("Login Successful!");
            //     navigate("/");
            // }

           
            localStorage.setItem("token",result?.token)
             toast.success("Login Successful!");

        // Wait so the toast is visible
        setTimeout(() => {
            navigate("/");
        }, 1000);


            // window.location.reload(true);
           
            // console.log(result);


       


        } catch (error) {
            console.error("Error:", error);
        }
    }


    

    return(
        <>
       <div className="login-container">
    <h1>Login</h1>

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

    <button onClick={handleLogin}>Login</button>
    <br />

    <p>Didn't have an Account? 
        <button onClick={() => navigate("/register")} >Register</button>

       
        </p>
</div>
        </>
    )
}