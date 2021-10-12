import React, {useState, useEffect } from "react";
import validateEmail from "../../utils/validateEmail";

function Contact() {

    const [formState, setFormState] = useState( { name: '', email: '', message: '' });

    const [errorMessage, setErrorMessage] = useState('');

    const { name, email, message } = formState;

    function handleChange(e) {
        if (e.target.name === "email") {
            const isValid = validateEmail(e.target.value);

            if(!isValid) {
                setErrorMessage("Please enter a valid email address");
            } else {
                setErrorMessage('');
            }
        } else {
            if(!e.target.value.length) {
                setErrorMessage(`Please enter a message`)
            } else {
                setErrorMessage('');
            }
        }

        if (!errorMessage) {
            setFormState({...formState, [e.target.name]: e.target.value})
        }
    }

    function handleSubmit(e) {
        e.preventDefault();
    }


    return(
        <div>
            <h2>Contact</h2>
            <form>
                <div>
                    <li>
                        <label for="name">Name:</label>
                        <input type="text" id="name" name="name" defaultValue={name} onBlur={handleChange} />
                    </li>
                    <li>
                        <label for="mail">Email:</label>
                        <input type="email" id="mail" name="email" defaultValue={email} onBlur={handleChange}/>
                    </li>
                    <li>
                        <label for="msg">Message:</label>
                        <textarea id="msg" name="message" defaultValue={message} onBlur={handleChange} rows="7"></textarea>
                    </li>
                </div>
                {errorMessage && (
                    <div>
                        <p>{errorMessage}</p>
                    </div>
                )}
                <div>
                    <button type="submit" onSubmit={handleSubmit}>Submit</button>
                </div>
            </form>
        </div>
    );
};

export default Contact;