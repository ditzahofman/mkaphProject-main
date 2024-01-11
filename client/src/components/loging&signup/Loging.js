import React, {useState} from 'react';
import { NavLink, useNavigate } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';

const Login = () => {
    // const navigate = useNavigate();
    // const [email, setEmail] = useState('w@gmail.com');
    // const [password, setPassword] = useState('1234');
       
    //     const  onLogin = (e) => {
    //     e.preventDefault();
    //     signInWithEmailAndPassword(auth, email, password)
    //     .then((userCredential) => {
    //         // Signed in
    //         const user = userCredential.user;
    //         navigate("/home")
    //         console.log(user);
    //     })
    //     .catch((error) => {
    //         const errorCode = error.code;
    //         const errorMessage = error.message;
    //         console.log(errorCode, errorMessage)
    //     });
       
    // }
 
    // return(
    //     <>
    //         <main className="container">      
                  
    //             <section>
    //                 <div>  
    //                 <h1 className="logIn">Log in</h1>                                                           
    //                     <form className="form-signin">                                              
    //                         <div>
    //                             <label htmlFor="email-address" className="form-label"> Email address </label>
    //                             <input
    //                                 className="form-control"
    //                                 id="email-address"
    //                                 name="email"
    //                                 type="email"                                    
    //                                 required                                                                                
    //                                 placeholder="Email address"
    //                                 onChange={(e)=>setEmail(e.target.value)}
    //                             />
    //                         </div>

    //                         <div>
    //                             <label htmlFor="password" className="form-label"> Password</label>
    //                             <input
    //                                 className="form-control"
    //                                 id="password"
    //                                 name="password"
    //                                 type="password"                                    
    //                                 required                                                                                
    //                                 placeholder="Password"
    //                                 onChange={(e)=>setPassword(e.target.value)}
    //                             />
    //                         </div>
                                                
    //                         <div>
    //                             <button  onClick={onLogin} className="btn btn-primary">Login</button>
    //                         </div>                               
    //                     </form>
                       
    //                     <p className="text-sm text-white text-center">
    //                         No account yet? {' '}
    //                         <NavLink to="/signup"> Sign up </NavLink>
    //                     </p>
                                                   
    //                 </div>
    //             </section>
    //         </main>
    //     </>
    // )
}

export default Login