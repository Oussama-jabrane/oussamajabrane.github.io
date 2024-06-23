import React from "react";

const Intro = () => {
    return (
        <div className="flex items-center justify-center flex-col text-center pt-20 pb-6">
            <h1 className="text-4xl md:text-7xl mb-1 md:mb-3 font-bold">
                Oussama Jabrane.
            </h1>
            <p className="text-lg md:text-xl mb-3 font-medium">
                Software Engineering Student.
            </p>
            <p className="text-md max-w-xl mb-6 font-semibold">
                I am a Software Engineer/Web Developer in my first year of a Bachelor of
                Engineering program in Software Engineering at{" "}
                <a
                    className="text-cyan-600 hover:underline underline-offset-2 decoration-2 decoration-red-600"
                    rel="noreferrer noopener"
                    href="https://en.wikipedia.org/wiki/Sichuan_University"
                    target="_blank"
                >
                    Sichuan University
                </a>{" "}
                in Chengdu, China. I have more than four years of programming and
                coding experience. I am a Python, Django, and JavaScript expert, as well
                as a React.js intermediate and C, C#, and Java beginner. <br />
                I enjoy what I do and want to have as much impact on the world
                as possible by developing programs that make people's lives easier
                and address real-world issues.
            </p>
        </div>
    );
};

export default Intro;
