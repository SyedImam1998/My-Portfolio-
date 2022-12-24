import '../App.css';
import '../mediaq.css';

const Blogs=(props)=>{
return(
              <div className="card">
              <img className="card-img-top" src={props.image} alt="Card-cap"/>
              <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">{props.description}</p>
                <a target="_blank" rel="noopener noreferrer" href={props.link} className="btn btn-primary">Learn More...</a>
              </div>
            </div>
    

)
}
export default Blogs;