/* eslint-disable no-unused-vars */
import React,{useState} from 'react'

const Login = () => {
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
    const [note,setNote]=useState("Enter Email and Password");
    const [alert,setAlert]=useState("note");
    
  
    const handleSubmit = (e) => {
      e.preventDefault();
      // Handle login logic here
      if (username === "karthik") {
        setNote('logged In')
        setAlert('alert alert-success')
      }
      else{
        setNote("invalid username and pasword");
        setAlert("alert alert-danger");
      }
    };
  return (
    <div id="login-Form">
      <div id="form">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div className={alert} style={{display:'flex'}}>{note}</div>
          <div>
            <label>Email:</label>
            <input
              type="email"
              value={username}
              onChange={(e) => {setUsername(e.target.value)
              console.log(e.target.value)}}
              required
            />
          </div>
          <div>
            <label>Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => {setPassword(e.target.value)
                console.log(e.target.value)}}
              required
            />
          </div>
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  )
}

export default Login