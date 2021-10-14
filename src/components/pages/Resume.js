import React from "react";

function Resume() {

    const styles = {
        margin: {
            margin: "5px",
        },
        margin2x: {
            margin: "50px"
        },
        a: {
            textDecoration: "none",
            color: "#7b9ea8"
        }
    }

    return (
        <div class="container">
            <h2>
                Resume
            </h2>

            <h3>Find my resume <a style={styles.a} href="https://docs.google.com/document/d/1naeVIWekSseM93QtLfRcrRo-wRjQBMwUz6zJqmsnxLM/edit">here</a></h3>
            <div class="d-flex justify-content-around" style={styles.margin2x}>
                <i class="fab fa-html5 fa-5x" style={styles.margin}></i>
                <i class="fab fa-css3-alt fa-5x" style={styles.margin}></i>
                <i class="fab fa-js fa-5x" style={styles.margin}></i>
                <i class="fab fa-node fa-5x" style={styles.margin}></i>
                <i class="fab fa-react fa-5x" style={styles.margin}></i>
                <i class="fas fa-database fa-5x" style={styles.margin}></i>
                <i class="fab fa-angular fa-5x" style={styles.margin}></i>
            </div>
        </div>
    );
};

export default Resume;