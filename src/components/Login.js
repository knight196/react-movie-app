import  React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';

export default function Login() {

  let navigate = useNavigate();

  const [click, Click] = React.useState(false);
  const loginClick = () => Click(!click);
  
  const [email,setEmail] = React.useState('');
  const [password,setPassword] = React.useState('')
  const [password2,setPassword2] = React.useState('');

  const login = () => {
    const regEx = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if(!regEx.test(email) && email === ""){
      alert('Email is not Valid')
    }else if(password === ''){
      alert('Please Enter valid password')
    }
    else{
      alert('Thank You for login')
      navigate('/')
    }
  }

  const signup = () => {
    const regEx = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if(!regEx.test(email) && email === ""){
      alert('Email is not Valid')
    }else if(password === ''){
      alert('Please Enter valid password')
    }else if(password2 !== password){
      alert('Please check your password')
    }
    else{
      alert('Thank You for Signup')
      navigate('/')
    }
  }

function showPassword(){
  var x = document.querySelectorAll('#password')
  for(var i=0; i< x.length; i++){
    if (x[i].type === "password") {
      x[i].type = "text";
    } else {
      x[i].type = "password";
    }
  }
}

  return (
      <div className="text-center">

      <div>
        <p>Email Address</p>
<input  onChange={(e) => setEmail(e.target.value)} name="email"  value={email} className="border-0 p-2" type="email" placeholder="Enter your email address"/>
<p>Password</p>
<input id="password" name="password" onChange={(e) => setPassword(e.target.value)}  value={password} className="border-0 p-2" type="password" placeholder="Enter your password"/>
<br/>
<div className={click ? "d-none" : "d-block"}>
</div>
<p className={click ? "d-block" : "d-none"}>Confirm Password</p>
<input type="password" onChange={(e) => setPassword2(e.target.value)} id="password" className={click ? "d-inline-block border-0 p-2" : "d-none"} placeholder="confirm password"/>
<br/>
<input onClick={showPassword}  type="checkbox"/> Show Password
<br/>
<button onClick={signup} type="submit" className={click ? "d-inline-block border-0 bg-primary text-white px-2 py-1 mt-2" : "d-none"}>Sign up</button>
<button onClick={login} type="submit" className={click ? "d-none" : "d-inline-block border-0 bg-primary text-white px-2 py-1 mt-2"}>Log In</button>
<p className={click ? "d-none" : "d-block"}>Don't have an account</p>
<p className={click ? "d-block" : "d-none"}>Already have an Account</p>
<button className={click ? "d-none" : "d-inline-block border-0 bg-primary text-white px-2 py-1 mt-2"} onClick={loginClick}>Sign Up</button>
<button className={click ? "d-inline-block border-0 bg-primary text-white px-2 py-1 mt-2" : "d-none"} onClick={loginClick}>Login</button>
        </div>
      </div>
    )
}
