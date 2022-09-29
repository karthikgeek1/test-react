import React, {useState, useEffect} from 'react'
import axios from 'axios'
const App = () => {
  const [posts, setPosts] = useState([])
  const [val, setVal] = useState("")
  const [result, setResult] = useState([])
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/comments").then((response) => {
      setPosts([posts, ...response.data]);
      setResult([posts, ...response.data]);
    });
  }, []);

  useEffect(() => {
    const FilteredData = posts.filter((post) => {
      if (post.name) {
        return post.name.includes(val);
      }
    });
    setResult([...FilteredData]);
    console.log(FilteredData, val);
  }, [val]);
  return (
    <div>
      <input type='text' value={val}  onChange={(e)=>setVal(e.target.value)}/>
      <div>
        {
          result.map((post)=>(
            <div key={post.id}>
            <h1>{post.name}</h1>
            <p>{post.body}</p>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default App
