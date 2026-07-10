import { useState } from "react"
import { useNavigate } from "react-router-dom";

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

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            else{
                //  alert("Login Successful");

                // Redirect to Home
                navigate("/");
            }

            const result = await response.json();

            localStorage.setItem("token",result?.token)

            window.location.reload(true);
           
            console.log(result);

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
</div>
        </>
    )
}