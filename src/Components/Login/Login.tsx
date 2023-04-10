import React from 'react';
import { useForm, SubmitHandler, SubmitErrorHandler } from 'react-hook-form';
const Login = () => {
    type LoginFormValues = {
        login: string;
        password: string;
        rememberMe: boolean;
    };
    const { register, handleSubmit } = useForm<LoginFormValues>();
    const onSubmit: SubmitHandler<LoginFormValues> = data => console.log(data);
    const onError :SubmitErrorHandler<LoginFormValues>= errors => console.log(errors);
    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={handleSubmit(onSubmit, onError)}>

                <div>
                    <input placeholder="Login" {...register("login", {required:true} )} />
                </div>
                <div>
                    <input placeholder="Password"  type="password" {...register("password")} />
                </div>
                <div>
                    <input type="checkbox"  id="rememberMe" {...register("rememberMe")} name="rememberMe" />
                    <label htmlFor="rememberMe">remember me</label>
                </div>
                <div>
                    <button type="submit">Login</button>
                </div>
            </form>
        </div>
    );
};

export default Login;