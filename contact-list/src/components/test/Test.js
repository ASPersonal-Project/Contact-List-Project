import React,{useEffect,useState } from 'react';
import axios from 'axios';

const Test = () => {
    const [resources,setResources] = useState([]);

    const fetchResource = async(resource) => {
        const response = await axios.get(`http://jsonplaceholder.typicode.com/${resource}`);
        console.log(response.data);
        setResources(response.data);
       
    };

    useEffect( () =>{
        fetchResource('posts');
        
    },[]);
    return(
    <div> {resources.map(record => 
        <div>
            <h1>{record.title}</h1>
            <p>{record.body}</p>
        </div>
        
        
        )}
    </div>
    //     <div>
    //         {/* <h1>{resources}</h1> */}
    // <p>{resources.length}</p>
    //     </div>
    );

    
}

export default Test;