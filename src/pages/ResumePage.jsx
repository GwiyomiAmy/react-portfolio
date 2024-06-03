import { useState, useEffect } from "react"


export default function ResumePage(){
   return(
      <div>
      <h1>Resume</h1>
      <a href="/assets/files/resume.pdf" download> Download </a>
      <h3>Front-End Proficiencies</h3>
      <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>JQuery</li>
        <li>responsive design</li>
        <li>React</li>
        <li>Bootstrap</li>
      </ul>
      <h3>Back-End Proficiencies</h3>
      <ul>
        <li>APIs</li>
        <li>Node</li>
        <li>Express</li>
        <li>PostgreSQ, Sequelize</li>
        <li>MongoDB, Mongoose</li>
        <li>REST</li>
      </ul>
    </div>
   )
}