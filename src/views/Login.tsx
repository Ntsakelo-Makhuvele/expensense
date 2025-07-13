import { Link } from 'react-router-dom';
import Logo from '../assets/logo.svg'
import * as Yup from 'yup';
import {useFormik} from 'formik';
import { signInWithEmailAndPassword, type User } from 'firebase/auth';
import { auth } from '../authentication/UserAuth';
import { useEffect, useState } from 'react';
import { PulseLoader } from 'react-spinners';
import { useAuth } from '../authentication/AuthContext';

const Login = () => {
  const [signInUser, setSignInUser] = useState<User>();
  const [signInError, setSignInError] = useState<any>();
  const {user} = useAuth();

  useEffect(() => {
    if(signInError){
      console.log(signInError)
    }if(signInUser){
      console.log(signInUser);
    }
  },[user])
const [loading, setLoading] = useState(false);
    const formik = useFormik({
      initialValues:{
        email:'',
        password:''
      },
     validationSchema:Yup.object({
       email:Yup.string().required('field required'),
       password:Yup.string().required('field required'),
     }),
     onSubmit:(values) => {
      setLoading(true);
      setSignInError(null);
        signInWithEmailAndPassword(auth,values.email,values.password).then((userCredentials) => {
              setSignInUser(userCredentials.user);
              setLoading(false);
          }).catch(error => {
              setSignInError(error);
              setLoading(false);
          })
     }
    })
    return (
        <div className="grid items-center h-[100vh]">
            <form action="" onSubmit={formik.handleSubmit} className="max-w-[700px] w-[35%] m-auto h-[fit-content] bg-white">
               <Link to="/">
                 <img src={Logo}  alt='logo' className='h-auto w-[40%] mb-5'/>
               </Link> 
               {signInError && <p className="p-2 bg-red-100 rounded-[5px]">Incorrect credentials entered</p>}
        <label htmlFor="price" className="block text-sm/6 font-medium text-gray-900 mt-5">
        Email
      </label>
      <div className="mt-2">
        <div className="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-indigo-600">
        
          <input
            id="email"
            name="email"
            type="email"
            placeholder="Email"
            onChange={formik.handleChange}
            value={formik.values.email}
            className="email block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
          />
        </div>
          <div className="">
           {formik.errors.email && formik.touched.email && <p className='text-right text-red-400'>{formik.errors.email}</p>}
          </div>
      </div>
          <label htmlFor="price" className="block text-sm/6 font-medium text-gray-900 mt-5">
        Password
      </label>
      <div className="mt-2">
        <div className="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-indigo-600">
        
          <input
            id="password"
            name="password"
            type="password"
            placeholder="Password"
            onChange={formik.handleChange}
            value={formik.values.password}
            className="password block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
          />
     
        </div>
          <div className="">
           {formik.errors.password && formik.touched.password && <p className='text-right text-red-400'>{formik.errors.password}</p>}
          </div>
      </div>
            <div className="mt-10">
              <button type="submit" className="bg-violet-600 w-[100%] p-2 rounded-[5px] hover:cursor-pointer text-white hover:bg-violet-500">{loading ? <PulseLoader color='#fff' size="10px" /> : 'Login'}</button>
            </div>     
            <div className="mt-5">
               <p>Don't have an accout? <Link to="/register">Create Account</Link></p>
            </div>
            </form>
        </div>
    )
}

export default Login;