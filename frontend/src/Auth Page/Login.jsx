import { useState } from "react";
import styles from "./usersstyle.module.css";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
export function Login() {
    let navigate = useNavigate();
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        // alert("login successful")
        // navigate("/");
        axios.post("https://blueflycloneunitv.herokuapp.com/auth/login", { ...data })
            .then(user => {
                alert(user.data.message)
                navigate("/", { replace: true });
            }).catch(errors => console.log(errors.message));

    };
    return (
        <div id={styles.signupSection}>
            <h1>login</h1>
            <div>
                <form id={styles.formSection} onSubmit={handleSubmit(onSubmit)}>
                    <div>
                        <label>email</label>
                        {/* <input type="email" name="email" onChange={handleChange} /> */}
                        <input type="email" {...register("email", { required: "Email is required", pattern: /^\S+@\S+$/i })} />
                        {errors.email && <small>{errors.email.message}</small>}
                    </div>
                    <div>
                        <div id={styles.forget}>
                            <label>password</label>
                            <span>Forgot password?</span>
                        </div>
                        {/* <input type="password" name="password" onChange={handleChange} /> */}
                        <input type="password" {...register("password", {
                            required: "Password is required", minLength: {
                                value: 5,
                                message: "Password should have atleast 5 characters."
                            }, maxLength: {
                                value: 8,
                                message: "Password should have atmax 8 characters."
                            }
                        })} />
                        {errors.password && <small>{errors.password.message}</small>}
                    </div>
                    <div id={styles.createbtn}>
                        <input type="submit" value="sign in" />
                    </div>
                </form>
                <Link to="/signup"><p id={styles.createlink}>Create account</p></Link>
            </div>
        </div>
    )
}