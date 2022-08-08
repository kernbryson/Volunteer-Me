import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/mutations';

import Auth from '../utils/auth';

const Signup = () => {
  const [formState, setFormState] = useState({
    username: '',
    email: '',
    password: '',
  });
  const [addUser, { error, data }] = useMutation(ADD_USER);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);

    try {
      const { data } = await addUser({
        variables: { ...formState },
      });

      Auth.login(data.addUser.token);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className="row row-cols-1 row-cols-lg-1 ">

  
  
    <div className="col mb-4 py-4 " >
        <div className="container  h-100">
       <div className="row d-flex justify-content-center  h-100">
         <div className="col-12 col-sm-12 col-md-12 col-lg-11 col-xl-11">
           <div className="card shadow-2-strong">
           {data ? (
                  <p>
                    Success! You may now head{' '}
                    <Link to="/">back to the homepage.</Link>
                  </p>
                ) : (
             <form className="card-body p-5 text-center signup-form" onSubmit={handleFormSubmit}>
         
               <h3 className="mb-5">Sign Up</h3>
               <div className="row">
               <div className="form-outline mb-2 ">
                 <input  className="form-control form-control-lg"   
                   placeholder="Your username"
                   name="username"
                   type="text"
                   value={formState.name}
                   onChange={handleChange} />
                 <label className="form-label" for="typeEmailX-2">Username</label>
               </div>
              
               </div>
               <div className="form-outline mb-2">
                 <input className="form-control form-control-lg"  
                   placeholder="Your email"
                   name="email"
                   type="email"
                   value={formState.email}
                   onChange={handleChange} />
                 <label className="form-label" for="typeEmailX-2">Email</label>
               </div>
            
               <div className="form-outline mb-4">
                 <input   className="form-control form-control-lg"   
                   placeholder="******"
                   name="password"
                   type="password"
                   value={formState.password}
                   onChange={handleChange} />
                 <label className="form-label" for="typePasswordX-2">Password</label>
               </div>
           
     
               <button className="btn btn-secondary btn-lg btn-block" type="submit">Create your acccount</button>
             </form>
             )}
              {error && (
                  <div className="my-3 p-3 bg-danger text-white">
                    {error.message}
                  </div>
                )}
           </div>
         </div>
       </div>
       </div>
     </div>
    
    
    
     </div>
  );
};

export default Signup;
