import React, {useState} from 'react'

const AboutMe=()=>{
    const [toggle, setToggle] = useState()
    return(
        <div>
            <form>
                
                Change text <radio></radio> 
                
            </form>
            
            {
            <p>
                I am a seasoned web developer with two years of hands-on experience, specializing in 
                JavaScript, HTML, SaaS, and React. My passion for continuous growth has led me to 
                explore Python and Java, as I strive to elevate my skills to that of a versatile software 
                engineer.

                I hold a Bachelor's degree in Information Technology from the University of Ghana, 
                where I graduated in 2021. My academic foundation, coupled with practical experience, 
                has equipped me with a well-rounded skill set in web development. Following the 
                completion of my graduate training with AmaliTech, I ventured into freelancing, 
                leveraging my expertise in creating dynamic and responsive web applications.

                In my previous role as an IT Officer at DSIK Western Africa, I not only further developed 
                my technical prowess but also gained valuable insights into IT support. This dual 
                proficiency allows me to approach projects with a holistic perspective, ensuring a 
                comprehensive understanding of both development and maintenance aspects.

                Currently open to contractual or full-time employment opportunities, I am eager to 
                contribute my skills to innovative projects and collaborate with dynamic teams. Willing 
                to relocate, I bring adaptability and a commitment to staying at the forefront of 
                technological advancements. I am excited about the prospect of contributing to 
                groundbreaking endeavors and taking the next steps in my career as a software 
                engineer.
            </p>}
        </div>
    )
}
export default AboutMe