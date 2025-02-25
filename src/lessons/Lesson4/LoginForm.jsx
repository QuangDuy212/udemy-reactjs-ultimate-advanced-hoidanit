import { useState } from 'react';
import './LoginForm.scss';
const LoginForm = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmitLogin = () => {
        alert('click submit');
        console.log(">>>login: ", " email= ", email, " and password = ", password)
    }
    return (
        <div className="login-form-container">
            <div className="group-input">
                <label>Email</label>
                <input type={"email"} 
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                />
            </div>
            <div className="group-input">
                <label>Password</label>
                <input type={"password"} 
                value={password}
                onChange={(event) => setPassword(event.target.value)}/>
            </div>
            <div>
                <button onClick={() => handleSubmitLogin()}>Login</button>
            </div>
        </div>
    )
}

export default LoginForm;