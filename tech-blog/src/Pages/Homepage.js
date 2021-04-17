import React from 'react';
//imprt react as a first step and then create a component for the home page to build the site
//Notice that it uses HTML elements within the component "Home Page"
const Homepage = () => (
    
    <>
    <h1>Hello all, welcome to my very own tech blog!!</h1>

    <p> 
        My name is Joshua Whyte. I am a final year Computer Science BSc student at
        at Cardiff University. I am skilled in using python, HTML, CSS, JavaScript and 
        and Automation software like Blue Prism, PowerAutomate and a bit of UI Path.
    </p>

    <p> 
        I am currently looking for a graduate placement for a September/October start at
        a company that could sponsor my visa. Though I would like a work visa sponsorship,
        I am able to apply for a graduate visa, which would allow me to work without
        any sponsorship. 
    </p>
    </> // <></> is a react fragment tag that allows you to have more than one element within a component. 

);
//The next step would be to export component so we can import it into the app.js file
export default Homepage;
