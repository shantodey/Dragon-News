'use client'
import { authClient } from "@/lib/auth-client";
import { router } from "better-auth/api";
import Link from "next/link";
import { useForm } from "react-hook-form";
const Loginpage = () => {
    const { register, handleSubmit, formState: { errors } } = useForm()
    const handelLoginFunc = async (data) => {
        const { email, password } = data;
        console.log(data);
        const { data: res, error } = await authClient.signIn.email({
            email: email, // required
            password: password, // required
            rememberMe: true,
            callbackURL: "/",
        });
        console.log(res, error);
        if (error) {
            alert(error.message)

        }
        if (res && res.token) {
            alert("You have successfully logged in!");
            // router.push("/");
        }

    }
    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
            <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md">
                <form onSubmit={handleSubmit(handelLoginFunc)}>
                    <fieldset>
                        <legend className="text-2xl font-bold text-gray-800 text-center mb-8 block">Login your account</legend>
                        <div className="space-y-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Email address</label>
                                <input
                                    type="email"
                                    {...register("email", { required: " Email field is required" })}

                                    placeholder="Enter your email address"
                                    className="w-full px-4 py-3 bg-gray-100 border border-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition"
                                />
                                {errors.email && <p className="text-red-500">{errors.email.message}</p>}
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
                                <input
                                    type="password"
                                    {...register("password", { required: " Password field is required" })}
                                    placeholder="Enter your password"
                                    className="w-full px-4 py-3 bg-gray-100 border border-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition"
                                />
                                {errors.password && <p className="text-red-500">{errors.password.message}</p>}
                            </div>

                            <button type="submit" className="w-full bg-gray-700 hover:bg-gray-800 text-white font-semibold py-3 px-4 rounded transition duration-200">
                                Login
                            </button>

                            <div className="text-center">
                                <span className="text-gray-600 text-sm">
                                    Don't Have An Account?{' '}
                                    <Link href={'/register'} className="text-red-500 font-medium cursor-pointer hover:underline">
                                        Register
                                    </Link>
                                </span>
                            </div>
                        </div>
                    </fieldset>
                </form>
            </div>
        </div>
    );
};

export default Loginpage;