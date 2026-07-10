import { useEffect, useState } from "react";
import "../global.css";


function CMS(){
    const [data,setData]=useState(null);

    const callAPI= async()=>{
        try{
            const response= await fetch("https://api.restful-api.dev/objects",{
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
     <h1>CMS</h1>
       <div className="table-top-container">
       <div className="table-container">
    
              <table className="custom-table" border="1">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>ObjectName</th>
                        <th>Color</th>
                        <th>Actions</th>
                    </tr>
                </thead>
  

                 <tbody>
                    {data?.map((item)=>(
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>
                                <div className="color-cell">
                                    <span className="color-dot" style={{backgroundColor:item?.data?.color||"#ccc"}}>
                                        
                                    </span>
                                    {
                                        item?.data?.color||"N/A"
                                    }
                                </div>
                            </td>
                            <td>
                                <button className="edit-btn">Edit</button>
                                 <button className="delete-btn">Delete</button>
                            </td>

                    </tr>

                    ))}
                    
                 </tbody>
               
              </table>


       </div>

       </div>

        </>
    )
}

export default CMS;