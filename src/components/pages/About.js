import React from "react";
import img from "../images/avatar.png"

const styles = {
    avatar: {
        borderRadius: "50%",
        display: "flex",
        justifyContent: "center",
        width: "auto",
    },
    p: {
        fontSize: "1.5rem",
        padding: "10px",
        marginTop: "10px",
        textAlign: "center"
    }
}

function About() {
    return (
        <div class="container">
            <h1 class="d-flex justify-content-center">Chandler Liang</h1>
            <div class="d-flex justify-content-center">
                <img src={img} alt="avatar" style={styles.avatar} />
            </div>
            <div style={styles.p}>
                <p >
                    I am a Front End Developer that started my coding career in 2021!
                </p>
                <p>
                    I was a Service Desk Analyst for many years and recently transitioned to a web developer.
                </p>
                <p>
                    Currently, I'm learning full stack development through an online bootcamp. It is my hope that I can be a competent Full stack Web Developer in the future.
                </p>
            </div>

        </div>
    );
}

export default About;