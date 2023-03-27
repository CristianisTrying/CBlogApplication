import { Link } from "react-router-dom";

const NotFound = () => {
    return ( 
        <div className="not-found">
            <h2>Sorry :(</h2>
            <p>The page you're looking for does not exist.</p>
            <Link to="/">Home</Link>
        </div>
     );
}
 
export default NotFound;