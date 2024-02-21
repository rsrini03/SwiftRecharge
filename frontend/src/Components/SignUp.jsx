import React from "react"
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { SignUpSchema } from "../Schemas/SignUpSchema";
import Login from "./Login";
import Header from "./Header";
export default function SignUp() {

    const navigate = useNavigate();
    const initialState = {
        "userName": "",
        "password": "",
        "confirmPassword": "",
        "phoneNumber": ""

    }

    const { values, errors, handleBlur, handleChange, handleSubmit, touched } =
        useFormik({
            initialValues: initialState,
            validationSchema: SignUpSchema,
            onSubmit: (values, action) => {
                console.log(values);
                eventLogin();
                action.resetForm();
            }
        })

    return (
        <>
            <div className="relative isolate px-6 pt-14 lg:px-8" style={{
                backgroundImage: "url(/assets/bbblurry.svg)",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                minHeight: "100vh"
            }}>
                <Header/>
                <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
                    <img class="mx-auto h-10 w-auto" src="/assets/recharge-icon.png" alt="Your Company" />
                    <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                        <h2 className="mt-5 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                            Sign up to your account
                        </h2>
                    </div>
                    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                        <form className="space-y-6" action="#" method="POST" onSubmit={handleSubmit}>
                            <div>
                                <label htmlFor="userName" className="block text-sm font-medium leading-6 text-gray-900">
                                    UserName
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="userName"
                                        name="userName"
                                        type="userName"
                                        autoComplete="userName"
                                        onChange={handleChange}
                                        onSubmit={handleSubmit}
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-teal-600 sm:text-sm sm:leading-6 pl-3"
                                    />
                                </div>
                            </div>
                            {errors.userName && touched.userName ? (
                                <p style={{ color: "red" }}>{errors.userName}</p>
                            ) : null}
                            <div>
                                <div className="flex items-center justify-between">
                                    <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                                        Password
                                    </label>
                                </div>
                                <div className="mt-2">
                                    <input
                                        id="password"
                                        name="password"
                                        type="password"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        autoComplete="current-password"
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-teal-600 sm:text-sm sm:leading-6 pl-3"
                                    />
                                </div>
                            </div>

                            {errors.password && touched.password ? (
                                <p style={{ color: "red" }}>{errors.password}</p>
                            ) : null}

                            <div>
                                <div>
                                    <label htmlFor="confirmPassword" className="block text-sm font-medium leading-6 text-gray-900">
                                        Confirm Password
                                    </label>
                                </div>
                                <div className="mt-2">
                                    <input
                                        id="confirmPassword"
                                        name="confirmPassword"
                                        type="confirmPassword"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        autoComplete="current-password"
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-teal-600 sm:text-sm sm:leading-6 pl-3"
                                    />
                                </div>
                            </div>
                            {errors.confirmPassword && touched.confirmPassword ? (
                                <p style={{ color: "red" }}>{errors.confirmPassword}</p>
                            ) : null}

                            <div>
                                <label htmlFor="phoneNumber" className="block text-sm font-medium leading-6 text-gray-900">
                                    Mobile Number
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="phoneNumber"
                                        name="phoneNumber"
                                        type="phoneNumber"
                                        autoComplete="phoneNumber"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-teal-600 sm:text-sm sm:leading-6 pl-3"
                                    />
                                </div>
                            </div>

                            {errors.phoneNumber && touched.phoneNumber ? (
                                <p style={{ color: "red" }}>{errors.phoneNumber}</p>
                            ) : null}


                            <div>
                                <button
                                    type="submit"
                                    className="flex w-full justify-center rounded-md bg-teal-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-teal-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600"
                                >
                                    Sign Up
                                </button>
                            </div>
                        </form>

                        <p className="mt-10 text-center text-sm text-gray-900 font-bold">
                            Already you have an account?{' '}
                            <a onClick={() => navigate("/login")} className="font-bold text-teal-600 hover:text-teal-500 text cursor-pointer">
                                Login
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </>

    )
}
