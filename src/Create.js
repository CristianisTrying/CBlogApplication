import { useState } from "react";
import { useHistory } from "react-router-dom";
const Create = () => {
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [author, setAuthor] = useState("mario");
    const [isPending, setIsPending] = useState(false);
    const history = useHistory();

    const handleSubmit = (e) => {
        // Prevents the page from refreshing
        e.preventDefault();
        // Create a Blog object
        const blog = { title, body, author};

        setIsPending(true);

        // Endpoint to add a new blog
        fetch('http://localhost:8000/blogs', {
            method: 'POST',
            // We're sending JSON data
            headers: { "Content-Type": "application/json"},
            // Turn object into JSON string
            body: JSON.stringify(blog)
        }).then(() => {
            console.log("New blog has been added.");
            setIsPending(false);
            history.push('/')
        })
    }
 
    return (  
        <div className="create">
            <h2>Add New Blog</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog Title:</label>
                <input type="text"
                required
                value={title}
                // Change the variable to whatever is in the input field, tracking what a user types
                onChange={(e) => setTitle(e.target.value)}
                />
                <label>Blog Body:</label>
                <textarea
                required
                value={body}
                onChange={(e) => setBody(e.target.value)}
                />
                <label>Blog Author:</label>
                <select value={author} onChange={(e) => setAuthor(e.target.value)}>
                    <option value="mario">Mario</option>
                    <option value="cristian">Cristian</option>
                </select>
                {!isPending && <button>Add Blog</button>}
                {isPending && <button disabled>Adding Blog...</button>}
            </form>
        </div>
    );
}
 
export default Create;