import React from 'react';
import { useForm, SubmitHandler, SubmitErrorHandler } from 'react-hook-form';
import s from "../Profile/NewPost/NewPost.module.css";
const Login = () => {
    type LoginFormValues = {
        login: string;
        password: string;
        rememberMe: boolean;
    };
    const { register, handleSubmit, formState:{errors} } = useForm<LoginFormValues>();
    const onSubmit: SubmitHandler<LoginFormValues> = data => console.log(data);
    const onError :SubmitErrorHandler<LoginFormValues>= errors => console.log(errors);
    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={handleSubmit(onSubmit, onError)}>

                <div>
                    <input placeholder="Login" {...register("login", {required:{ value:true, message :"ERROR"} , minLength: {value: 4, message: "Your message must be at least 4 characters long"}} )} />
                    {errors.login && <div className={s.error}>{errors.login.message}</div>}
                </div>
                <div>
                    <input placeholder="Password"  type="password" {...register("password",
                        {required:{ value:true, message :"ERROR"} ,
                            minLength: {value: 4, message: "Your message must be at least 4 characters long"}} )} />
                    {errors.password && <div className={s.error}>{errors.password.message}</div>}
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