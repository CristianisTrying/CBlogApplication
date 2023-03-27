import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {
    // Destructuring the data from the custom hook
    const { data, isPending, error } = useFetch('http://localhost:8000/blogs');

    return ( 
         <div className="home">
            {data && <BlogList blogs={data} title={"All Blogs"}/>}
            {isPending && <div>Loading...</div>}
            {error && <div>Unable to fetch data from database, try again.</div>}
         </div>
     );
}
 
export default Home;