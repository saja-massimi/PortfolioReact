import React, { useEffect, useState } from "react";
import "./skills.css";
import Html from "../../assets/html.png";
import JS from "../../assets/javascript.png";
import Flutter from "../../assets/flutter.png";
import ReactLogo from "../../assets/react.png";
import Laravel from "../../assets/laravel.png";
import DotNet from "../../assets/dotnet.png";

function Skills() {
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        const items = document.querySelectorAll(".carousel .item");
        const totalItems = items.length;
        let currentIndex = 0;
        let interval;

        const updateCarousel = () => {
            items.forEach((item, index) => {
                const angle = (360 / totalItems) * (index - currentIndex);
                item.style.transition = "transform 1.5s ease";
                item.style.transform = `rotateY(${angle}deg) translateZ(300px)`;
            });
        };

        const startCarousel = () => {
            interval = setInterval(() => {
                if (!isHovered) {
                    currentIndex = (currentIndex + 1) % totalItems;
                    updateCarousel();
                }
            }, 3000);
        };

        const stopCarousel = () => {
            clearInterval(interval);
        };

        document.getElementById("next").addEventListener("click", () => {
            currentIndex = (currentIndex + 1) % totalItems;
            updateCarousel();
        });

        document.getElementById("prev").addEventListener("click", () => {
            currentIndex = (currentIndex - 1 + totalItems) % totalItems;
            updateCarousel();
        });

        updateCarousel();
        startCarousel();

        return () => stopCarousel();
    }, [isHovered]);

    return (
        <section className="section">
            <h1 style={{ fontSize: "2.5em", color: "#493f75" }}>Skills</h1>
            <div id="skills">
                <div
                    className="carousel-container"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                    <button id="prev" className="Cbutton">&#8249;</button>
                    <div className="carousel">
                        <div className="item a">
                            <img src={Html} className="carImage" />
                        </div>
                        <div className="item b">
                            <img src={JS} className="carImage" />

                        </div>
                        <div className="item c">React
                            <img src={ReactLogo} className="carImage" />

                        </div>
                        <div className="item d">
                            <div>Laravel</div>
                            <img src={Laravel} className="carImage" />

                        </div>
                        <div className="item e">.NET
                            <img src={DotNet} className="carImage" />

                        </div>

                        <div className="item f">Flutter
                            <img src={Flutter} className="carImage" />


                        </div>
                    </div>
                    <button id="next" className="Cbutton">&#8250;</button>
                </div>
            </div>
        </section>
    );
}

export default Skills;
