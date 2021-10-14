import React, { useState } from "react";
import validateEmail from "../../utils/validateEmail";

function Contact() {

    const [formState, setFormState] = useState({ name: '', email: '', message: '' });

    const [errorMessage, setErrorMessage] = useState('');

    const { name, email, message } = formState;

    function handleChange(e) {
        if (e.target.name === "email") {
            const isValid = validateEmail(e.target.value);

            if (!isValid) {
                setErrorMessage("Please enter a valid email address");
            } else {
                setErrorMessage('');
            }
        } else {
            if (!e.target.value.length) {
                setErrorMessage(`Please enter a message`)
            } else {
                setErrorMessage('');
            }
        }

        if (!errorMessage) {
            setFormState({ ...formState, [e.target.name]: e.target.value })
        }
    }

    function handleSubmit(e) {
        e.preventDefault();
    }


    return (
        <div class="container">
            <h2>Contact</h2>
            <form>
                <div class="form-group">
                    <label for="name">Name:</label>
                    <input class="form-control" type="text" id="name" name="name" defaultValue={name} onBlur={handleChange} />
                </div>
                <div class="form-group">
                    <label for="mail">Email:</label>
                    <input class="form-control" type="email" id="mail" name="email" defaultValue={email} onBlur={handleChange} />
                </div>
                <div class="form-group">
                    <label for="msg">Message:</label>
                    <textarea class="form-control" id="msg" name="message" defaultValue={message} onBlur={handleChange} rows="7"></textarea>
                </div>

                {errorMessage && (
                    <div class="form-group">
                        <h4>{errorMessage}</h4>
                    </div>
                )}
                <div class="form-group">
                    <button type="submit" onSubmit={handleSubmit}>Submit</button>
                </div>
            </form>
        </div>
    );
};

export default Contact;