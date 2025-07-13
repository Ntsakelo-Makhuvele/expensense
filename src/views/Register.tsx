import { Link } from 'react-router-dom';
import Logo from '../assets/logo.svg'
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { PulseLoader } from 'react-spinners';
import { useState, useEffect } from 'react';
import { createUserWithEmailAndPassword, type User } from 'firebase/auth';
import { auth } from '../authentication/UserAuth';
import { Overlay } from '../components/Overlay';

const Register = () => {
    const [signedUpUser, setSignedUpUser] = useState<User>();
    const [signupError, setSignupError] = useState<any>();
    const [loading, setLoading] = useState(false);
    const [isOverLay, setIsOverLay] = useState(false);

    useEffect(() => {
        if (signedUpUser) {
            console.log(signedUpUser)
        }
        if (signupError) {
            console.log(signupError)
        }
    }, [signedUpUser, signupError]);

    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        validationSchema: Yup.object({
            email: Yup.string().required('field required'),
            password: Yup.string().required('field required'),
        }),
        onSubmit: (values) => {
            setLoading(true)
            setSignupError(null);
            createUserWithEmailAndPassword(auth, values.email, values.password).then((userCredentials) => {
                setSignedUpUser(userCredentials.user);
                setLoading(false)
                setIsOverLay(true);
            }).catch(error => {
                setSignupError(error);
                setLoading(false);
            })
        }
    })
    return (
        <div className="grid items-center h-[100vh]">
            <form action="" onSubmit={formik.handleSubmit} className="max-w-[700px] w-[35%] m-auto h-[fit-content] bg-white">
                <Link to="/">
                    <img src={Logo} alt='logo' className='h-auto w-[40%] mb-5' />
                </Link>
                {signupError && <p className="p-2 bg-red-100 rounded-[5px]">User with email already exists</p>}
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
                    <button type="submit" className="bg-violet-600 w-[100%] p-2 rounded-[5px] hover:cursor-pointer text-white hover:bg-violet-500">{loading ? <PulseLoader color='#fff' size="10px" /> : 'Register'}</button>
                </div>
                <div className="mt-5">
                    <p>Already signed up? <Link to="/login">Login instead</Link></p>
                </div>
            </form>
            <Overlay isRegSuccess={isOverLay}/>
        </div>
    )
}

export default Register;