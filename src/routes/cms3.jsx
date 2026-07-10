
import { useEffect, useState } from "react";
import {FaEdit,FaTrash} from "react-icons/fa"
import '../global.css';

function CMS3(){
    const [data,setData]=useState(null);

    const callAPI= async()=>{
        try{
            const response= await fetch("https://jsonplaceholder.typicode.com/todos",{
                method:"GET",
            });

             const result= await response.json();

             console.log(result);
             setData(result);

        }
        catch(error){
            console.log(error);
        }
        
        
    };

    useEffect(()=>{
        callAPI();
    },[]);

    return(
        <>
     
       <div className="table-top-container">
       <div className="table-container">
    
              <table className="custom-table" border="1">
                <thead>
                    <tr>
                         <th>UserId</th>
                        <th>ID</th>
                        <th>Name</th>

                        <th>Completed</th>

                        {/* <th>Color</th>
                         <th style={{textAlign:"center"}}>Density</th>
                        <th>Origin</th>
                        <th>PricePerUnit</th>
                       <th style={{textAlign:"center"}}>Action</th> */}
                     
                  
                    </tr>
                </thead>
  

                 <tbody>
                    {data?.map((item)=>(
                        <tr key={item.id}>
                             <td>{item.userId}</td>
                            <td>{item.id}</td>
                            <td>{item.title}</td>

                             <td>{item.completed ? "true":"false"}</td>

                            {/* <td>
                                <span className="color-badge">
                                 {item.color}</span>
                                 </td>

                              <td>{item.density}</td>
                        
                         <td>{item.origin}</td>
                         <td>{item.pricePerUnit}</td> */}
                          
                             
                              
                

                            {/* <td>
                                <div className="color-cell">
                                    <span className="color-dot" style={{backgroundColor:item?.data?.color||"#ccc"}}>
                                        
                                    </span>
                                    {
                                        item?.data?.color||"N/A"
                                    }
                                </div>
                            </td> */}
                            {/* <td className="action-buttons">
                                <button className="edit-btn"><FaEdit/> Edit</button>
                                 <button className="delete-btn"><FaTrash/>Delete</button>
                            </td> */}
                    </tr>

                    ))}
                    
                 </tbody>
               
              </table>
       </div>
       </div>

        </>
    )
}

export default CMS3;