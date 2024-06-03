import './project.css'

function Project({props}){
   console.log({projectProps: props })

   return(
      <article >
         <h4>{props?.name}</h4>
         <a href={props?.repo} target="_blank">Repo     </a>
         <a href={props?.deploy} target="_blank">     Deploy</a>
         <br></br>
         <img src={props?.img} alt={props?.name} />
      </article>
   )
}
export default Project;