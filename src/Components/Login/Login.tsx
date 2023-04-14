import React from 'react';
import { useForm, SubmitHandler, SubmitErrorHandler } from 'react-hook-form';
import s from "../Profile/NewPost/NewPost.module.css";
import { login} from "../../redux/auth-reducer";
import {Navigate} from "react-router-dom";
import {connect} from "react-redux";
import {RootStateType} from "../../redux/redux-store";
type Props = {
    login: any;
    isAuth:boolean;
};
type MapStateToPropsType = {
    isAuth: boolean;
};
const mapStateToProps = (state: RootStateType): MapStateToPropsType => {
    return {
        isAuth: state.auth.isAuth,
    };
};
const Login = ({login, isAuth}: Props) => {
    type LoginFormValues = {
        email: string;
        password: string;
        rememberMe: boolean;
    };
    const {register, handleSubmit, formState: {errors}} = useForm<LoginFormValues>();
    const onSubmit: SubmitHandler<LoginFormValues> = data =>{
        login(data.email, data.password, data.rememberMe)
        console.log(data);
    }
    if (isAuth) {
        return <Navigate to={"/profile"} />
    }
        const onError: SubmitErrorHandler<LoginFormValues> = errors => console.log(errors);


        return (
            <div>
                <h1>Login</h1>
                <form onSubmit={handleSubmit(onSubmit, onError)}>
                    <div>
                        <input placeholder="email" {...register("email", {
                            required: {value: true, message: "email field is required"},
                            minLength: {value: 4, message: "Your message must be at least 4 characters long"}
                        })}  />
                        {errors.email && <div className={s.error}>{errors.email.message}</div>}
                    </div>
                    <div>
                        <input placeholder="Password" type="password" {...register("password",
                            {
                                required: {value: true, message: "ERROR"},
                                minLength: {value: 4, message: "Your message must be at least 4 characters long"}
                            })} />
                        {errors.password && <div className={s.error}>{errors.password.message}</div>}
                    </div>
                    <div>
                        <input type="checkbox" id="rememberMe" {...register("rememberMe")} name="rememberMe"/>
                        <label htmlFor="rememberMe">remember me</label>
                    </div>
                    <div>
                        <button type="submit">Login</button>
                    </div>
                </form>
            </div>
        );
    };

export default connect(mapStateToProps, {login} )(Login);