import React from "react";
import giffsterGram from "../images/giffsterGram.png";
import budgetTracker from "../images/budgetTracker.png";
import fitnessTracker from "../images/fitnessTracker.png";
import artyPants from "../images/artyPants.png";
import readMe from "../images/readme.png";
import techBlog from "../images/techBlog.png";

const styles = {
    margin: {
        margin: "10px"
    },
    i: {
        color: "white"
    }
}


function Project() {
    return (
        <div class="container">
            <h2 class="d-flex justify-content-center" style={styles.margin}>Projects</h2>
            <div class="row">
                <div class="col" style={styles.margin}>
                    <div class="flip-card">
                        <div class="flip-card-inner">
                            <div class="flip-card-front">
                                <img src={giffsterGram} alt="Avatar" width="400px" />
                            </div>
                            <div class="flip-card-back">
                                <h2>giffsterGram</h2>
                                <p>Gif Forum Board</p>
                                <a href="https://giffstergram.herokuapp.com/"><i class="fab fa-codepen fa-2x" style={styles.i}></i></a>
                                <a href="https://github.com/chandtheman1/giffsterGram" ><i class="fab fa-github fa-2x" style={styles.i}></i></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col" style={styles.margin}>
                    <div class="flip-card">
                        <div class="flip-card-inner">
                            <div class="flip-card-front">
                                <img src={budgetTracker} alt="Avatar" width="400px" />
                            </div>
                            <div class="flip-card-back">
                                <h2>Budget Tracker</h2>
                                <p>Online/offline budget tracker</p>
                                <a href="https://chandtheman1-budget-tracker.herokuapp.com/"><i class="fab fa-codepen fa-2x" style={styles.i}></i></a>
                                <a href="https://github.com/chandtheman1/19-budget-tracker" ><i class="fab fa-github fa-2x" style={styles.i}></i></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col" style={styles.margin}>
                    <div class="flip-card">
                        <div class="flip-card-inner">
                            <div class="flip-card-front">
                                <img src={fitnessTracker} alt="Avatar" width="400px" />
                            </div>
                            <div class="flip-card-back">
                                <h2>Fitness Tracker</h2>
                                <p>Keeps track your progress of fitness over time</p>
                                <a href="https://chandtheman1-fitness-tracker.herokuapp.com/"><i class="fab fa-codepen fa-2x" style={styles.i}></i></a>
                                <a href="https://github.com/chandtheman1/18-workout-tracker" ><i class="fab fa-github fa-2x" style={styles.i}></i></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col" style={styles.margin}>
                    <div class="flip-card">
                        <div class="flip-card-inner">
                            <div class="flip-card-front">
                                <img src={artyPants} alt="Avatar" width="400px" />
                            </div>
                            <div class="flip-card-back">
                                <h2>Arty Pants</h2>
                                <p>Museum API display forum</p>
                                <a href="https://rachel-brain.github.io/creating-art/"><i class="fab fa-codepen fa-2x" style={styles.i}></i></a>
                                <a href="https://github.com/rachel-brain/creating-art" ><i class="fab fa-github fa-2x" style={styles.i}></i></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col" style={styles.margin}>
                    <div class="flip-card">
                        <div class="flip-card-inner">
                            <div class="flip-card-front">
                                <img src={readMe} alt="Avatar" width="400px" />
                            </div>
                            <div class="flip-card-back">
                                <h2>Professional Read Me</h2>
                                <p>A Generator that creates a formatted readme.md based of your answers</p>
                                <a href="https://drive.google.com/file/d/1_nGyvUAvNDvheLApi7Fazqk0nirl5bVw/view?usp=sharing"><i class="fab fa-codepen fa-2x" style={styles.i}></i></a>
                                <a href="https://github.com/chandtheman1/09-Professional-Readme" ><i class="fab fa-github fa-2x" style={styles.i}></i></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col" style={styles.margin}>
                    <div class="flip-card">
                        <div class="flip-card-inner">
                            <div class="flip-card-front">
                                <img src={techBlog} alt="Avatar" width="400px" />
                            </div>
                            <div class="flip-card-back">
                                <h2>Tech Blog</h2>
                                <p>An open forum that authenticated users can post their blogs</p>
                                <a href="https://techblog-chand.herokuapp.com/"><i class="fab fa-codepen fa-2x" style={styles.i}></i></a>
                                <a href="https://github.com/chandtheman1/14-tech-blog" ><i class="fab fa-github fa-2x" style={styles.i}></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};



export default Project;