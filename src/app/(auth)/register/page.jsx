'use client'
import { useForm } from "react-hook-form";

const RegisterPage = () => {
    const {register,handleSubmit,formState: { errors }}=useForm()
    const handelLoginFunc = (data) => {
        console.log(data);
    }
    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
            <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md">
                <form onSubmit={handleSubmit(handelLoginFunc)}>
                    <fieldset>
                        <legend className="text-2xl font-bold text-gray-800 text-center mb-8 block">
                            Register your account
                        </legend>

                        <div className="space-y-5">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Your Name</label>
                                <input
                                    type="text"
                                    {...register("text", { required: " Name field is required" })}
                                    placeholder="Enter your name"
                                    className="w-full px-4 py-3 bg-gray-100 border border-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition"
                                />
                                {errors.text && <p className="text-red-500">{errors.text.message}</p>}
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Photo URL
                                </label>
                                <input
                                    type="url"
                                    {...register("url")}
                                    placeholder="Enter your password"
                                    className="w-full px-4 py-3 bg-gray-100 border border-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                                <input
                                    type="email"
                                    {...register("email", { required: "Password field is required" })}
                                    placeholder="Enter your email address"
                                    className="w-full px-4 py-3 bg-gray-100 border border-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition"
                                />
                                {errors.email && <p className="text-red-500">{errors.email.message}</p>}
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Password
                                </label>
                                <input
                                    type="password"
                                    {...register("password", { required: " Password field is required" })}
                                    placeholder="Enter your password"
                                    className="w-full px-4 py-3 bg-gray-100 border border-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition"
                                />
                                {errors.password && <p className="text-red-500">{errors.password.message}</p>}
                            </div>

                            <div className="flex items-center gap-2">
                                <input
                                    type="checkbox"
                                    id="terms"
                                    className="w-4 h-4 accent-gray-700"
                                />
                                <label htmlFor="terms" className="text-sm text-gray-700 cursor-pointer">
                                    Accept Term & Conditions
                                </label>
                            </div>

                            <button type="submit" className="btn w-full bg-gray-700 hover:bg-gray-800 text-white font-semibold py-3 px-4 rounded transition duration-200">
                                Register
                            </button>
                        </div>
                    </fieldset>
                </form>
            </div>
        </div>
    );
};

export default RegisterPage;