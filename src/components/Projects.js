import '../App.css';
import '../mediaq.css';
const Projects=(props)=>{
    return(
        
        <div  className='card' >
        <img className="card-img-top" src={props.image} alt="Cardcap"/>
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">{props.description}</p>
          <a href={props.link}  target="_blank" rel="noopener noreferrer" className="btn btn-primary">Have A Look</a>
        </div>
        </div>
    )

}
export default Projects;
        

               



