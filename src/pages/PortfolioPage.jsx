import { useState, useEffect } from "react"

import Project from "../components/Project"
import dataset from "../lib/dataset.json"

export default function PortfolioPage(){
   //console.log(dataset);
   //const [projectItems, setProjectItems] = useState()
   //setProjectItems(dataset)
   //console.log(dataset.length)
   //console.log(projectItems)
   //useEffect(() => {
   //    const loadProjectItems = () => {
   //       console.log("loading project items")
   //       const projects = JSON.parse(dataset)
   //       setProjectItems(projects)
   //    }
   //    loadProjectItems()
   // }, [])
   return(
      <div className="d-flex">
            <h1>Portfolio</h1>
            <div className="card">
                  {dataset.map((project, index) => (
                      <Project props={project} key={index} />
                  ))}
            </div>
      
      </div>
   )
}