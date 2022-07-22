import { useState } from "react";
import styles from "./usersstyle.module.css";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useNavigate } from "react-router-dom";
export function Signup() {
    let navigate = useNavigate();
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        alert("Account created successfully.");
        navigate("/login")
        axios.post("https://blueflycloneunitv.herokuapp.com/auth/register", { ...data })
            .then(res => {
                alert("Account created successfully.");
                navigate("/login", { replace: true });
            })
            .catch(error => console.log(error));
    };
    return (
        <div id={styles.signupSection}>
            <div>
                <form id={styles.formSection} onSubmit={handleSubmit(onSubmit)}>
                    <div>
                        <label>first name</label>
                        <input type="text" {...register("firstname", {
                            required: "First name is required"
                        }
                        )} />
                        {errors.firstname && <small>{errors.firstname.message}</small>}
                    </div>
                    <div>
                        <label>last name</label>
                        {/* <input type="text" name="lastname" onChange={handleChange} /> */}
                        <input type="text" {...register("lastname", { required: true })} />
                        {errors.lastname && <small>Last name is required.</small>}
                    </div>
                    <div>
                        <label>email</label>
                        {/* <input type="email" name="email" onChange={handleChange} /> */}
                        <input type="email" {...register("email", { required: true, pattern: /^\S+@\S+$/i })} />
                        {errors.email && <small>Email is required.</small>}
                    </div>
                    <div>
                        <label>password</label>
                        {/* <input type="password" name="password" onChange={handleChange} /> */}
                        <input type="password" {...register("password", {
                            required: "Password is required.", minLength: {
                                value: 5,
                                message: "Password should have atleast 5 characters."
                            }, maxLength: {
                                value: 8,
                                message: "Password should have atmax 8 characters."
                            }
                        })} />
                        {errors.password && <small>{errors.password.message}</small>}
                    </div>
                    <section id={styles.subscribe}>
                        {/* <input id={styles.offers} name="subscribe" type="checkbox" onChange={handleChange} /> */}
                        <input id={styles.offers} {...register("subscribe")} type="checkbox" />
                        <label>Subscribe to stay updated with new offers!</label>
                    </section>
                    <div id={styles.createbtn}>
                        <input type="submit" value="create" />
                    </div>
                </form>
            </div>
        </div>
    )
}