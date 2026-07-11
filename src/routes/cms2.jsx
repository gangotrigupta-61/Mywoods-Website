import { useEffect, useState } from "react";
import {FaEdit,FaTrash} from "react-icons/fa";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import '../global.css';

function CMS2(){

     const [id,setId]=useState(null);
      const [idData,setIdData]=useState(null);

// For add woods
    const [show,setShow]=useState(false);

    const handleClose=()=> setShow(false);
     const handleShow=()=> setShow(true);


// For DELETE woods
    const [showDelete,setShowDelete]=useState(false);

    const handleCloseDelete=()=> setShowDelete(false);
     const handleShowDelete=(id)=> {
        setId(id);
        setShowDelete(true);
     }

     // MODAL For EDIT woods
    const [showEdit,setShowEdit]=useState(false);

    const handleCloseEdit=()=> setShowEdit(false);
     const handleShowEdit=(data)=> {
         setId(data._id);    
        setIdData(data);
        setShowEdit(true);
     }


   
    //  GET API Call
     const [data,setData]=useState(null);

    const callAPI= async()=>{
        try{
            const response= await fetch("https://mywoods-backend-kvs4.onrender.com/api/woods",{
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

 const [name,setName]=useState("");
const [description,setDescription]=useState("");
const [origin,setorigin]=useState("");
const [color,setColor]=useState("");

const [type,setType]=useState("hardwood");
const [image,setImage]=useState("");
    
 // POST API Call
    const callPOSTAPI= async()=>{
        try{
            const raw={
         name,
          type,
          origin,
           color,
         density:770,
         pricePerUnit:45.5,
         description,
        available:true,
           image
};
            
            const response= await fetch("https://mywoods-backend-kvs4.onrender.com/api/woods",{
                method:"POST",
                headers:{
                    "Content-Type":"application/json",
                },
                body:JSON.stringify(raw),
            });

            if(!response.ok){
                throw new Error(`HTTP error!Status:${response.status}`)
            }

             const result= await response.json();

             console.log(result);
             handleClose();
           await callAPI();
            
        }

        catch(error){
            console.log("Error:",error);
        }
        
        
    };


   //  DELETE API Call
     

    const callDeleteAPI= async()=>{
        try{
            const response= await fetch("https://mywoods-backend-kvs4.onrender.com/api/woods/"+id,{
                method:"DELETE",
                 headers:{
                    "Content-Type":"application/json",
                },   
            });
            
        if(!response.ok){
                throw new Error(`HTTP error!Status:${response.status}`)
            }

             const result= await response.json();

             console.log(result);
             handleCloseDelete();
           await callAPI();
            

        }
        catch(error){
            console.log("Error",error);
        } 
    };


    
   //  EDIT API Call
     

    const callEditAPI= async()=>{
        try{
            const raw={
                name:name,
                // type:"hardwood",
                origin:origin,
                color:color,
                // density:770,
                // pricePerUnit:45.5,
                description:description,
                // available:true,
            };


            const response= await fetch("https://mywoods-backend-kvs4.onrender.com/api/woods/"+id,{
                method:"PUT",
                 headers:{
                    "Content-Type":"application/json",
                },   
                body:JSON.stringify(raw),
            });
        if(!response.ok){
                throw new Error(`HTTP error!Status:${response.status}`)
            }

             const result= await response.json();

             console.log(result);
             handleCloseEdit();
           await callAPI();
            

        }
        catch(error){
            console.log("Error",error);
        } 
    };





    useEffect(()=>{
        callAPI();
    },[]);




    return(

        <>

     <h1>CMS</h1>
       <div className="table-top-container">
       <div className="table-wrapper">
                
                <Button variant="primary" onClick={handleShow}>
                   Add Woods 
                </Button>


         <div className="table-container">



              <table className="custom-table" border="1">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Color</th>
                         <th style={{textAlign:"center"}}>Density</th>
                        <th>Origin</th>
                        <th>PricePerUnit</th>
                       
                        <th style={{textAlign:"center"}}>Action</th>
                     
                  
                    </tr>
                </thead>
  

                 <tbody>
                    {data?.map((item)=>(
                        <tr key={item._id}>
                            <td>{item.name}</td>
                             <td>{item.description}</td>
                            <td>
                                <span className="color-badge">
                                 {item.color}</span>
                                 </td>

                              <td>{item.density}</td>
                        
                         <td>{item.origin}</td>
                         <td>{item.pricePerUnit}</td>
                          
                             
                              
                

                            {/* <td>
                                <div className="color-cell">
                                    <span className="color-dot" style={{backgroundColor:item?.data?.color||"#ccc"}}>
                                        
                                    </span>
                                    {
                                        item?.data?.color||"N/A"
                                    }
                                </div>
                            </td> */}
                            <td className="action-buttons">
                                <button className="edit-btn" onClick={()=> handleShowEdit(item)}><FaEdit/> Edit</button>

                                 <button className="delete-btn" onClick={()=>handleShowDelete(item._id)}>
                                    <FaTrash/>Delete</button>
                            </td>
                    </tr>

                    ))}
                    
                 </tbody>
               
              </table>

             </div>
       </div>
       </div>


 {/* //Modal for add Woods */}
<Modal show={show} onHide={handleClose}>
<Modal.Header closeButton>

<Modal.Title>Add Woods Details</Modal.Title>

</Modal.Header>

<Modal.Body>
{/* 
<label>Name</label>

<input type="text" onChange={(e) => setName(e.target.value)} />

<hr />
<label>Description</label>

<input type="text" onChange={(e) => setDescription(e.target.value)} />

<hr />




<label>Color</label>
<input type="text" onChange={(e) => setColor(e.target.value)} />

<hr />
<label>Origin</label>

<input type="text" onChange={(e) => setorigin(e.target.value)} />
<hr />
 */}

<label>Name</label>
<input
    type="text"
    onChange={(e)=>setName(e.target.value)}
/>

<hr />

<label>Type</label>
<select
    onChange={(e)=>setType(e.target.value)}
>
    <option value="hardwood">Hardwood</option>
    <option value="softwood">Softwood</option>
</select>

<hr />

<label>Description</label>
<input
    type="text"
    onChange={(e)=>setDescription(e.target.value)}
/>

<hr />

<label>Color</label>
<input
    type="text"
    onChange={(e)=>setColor(e.target.value)}
/>

<hr />

<label>Origin</label>
<input
    type="text"
    onChange={(e)=>setorigin(e.target.value)}
/>

<hr />

<label>Image URL</label>
<input
    type="text"
    placeholder="https://example.com/image.jpg"
    onChange={(e)=>setImage(e.target.value)}
/>

<hr />


</Modal.Body>

<Modal.Footer>

<Button variant="secondery" onClick={handleClose}>
Close
</Button>

<Button variant="primary" onClick={callPOSTAPI}>Save Changes
    </Button>

</Modal.Footer>
</Modal>



 {/* //Modal for DELETE Woods */}
<Modal show={showDelete} onHide={handleCloseDelete}>
<Modal.Header closeButton>

<Modal.Title>Delete this Woods Details</Modal.Title>

</Modal.Header>

<Modal.Body>
     Are You Sure?
</Modal.Body>

<Modal.Footer>

<Button variant="secondery" onClick={handleCloseDelete}>
Close
</Button>

<Button variant="primary" onClick={callDeleteAPI}>Delete
    </Button>

</Modal.Footer>
</Modal>



 {/* //Modal for EDIT Woods */}
<Modal show={showEdit} onHide={handleCloseEdit}>
<Modal.Header closeButton>

<Modal.Title>Edit Woods Details</Modal.Title>

</Modal.Header>

<Modal.Body>

<label>Name</label>

<input type="text" onChange={(e) => setName(e.target.value)} />

<hr />
<label>Description</label>

<input type="text" onChange={(e) => setDescription(e.target.value)} />

<hr />




<label>Color</label>

<input type="text" onChange={(e) => setColor(e.target.value)} />
<hr />
 <label>Origin</label>

<input type="text" onChange={(e) => setorigin(e.target.value)} />
<hr /> 


</Modal.Body>

<Modal.Footer>

<Button variant="secondery" onClick={handleCloseEdit}>
Close
</Button>

<Button variant="primary" onClick={callEditAPI}> Edit
    </Button>

</Modal.Footer>
</Modal>

        </>
    )
}

export default CMS2;