// import woods from "../CardData/data";
import { useState, useEffect } from "react";
import WoodCard from "../components/molecules/WoodCard";
import "../global.css";

    function Woods(){


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

useEffect(() => {
    callAPI();
}, []);







        return(
            <>
            <section className="woods-section">
{/* 
      {woods.map((wood) => (
        <WoodCard
          key={wood.id}
          wood={wood}
        />
      ))} */}


       {data?.map((wood) => (

                <WoodCard
                    key={wood._id}
                    wood={wood}
                />

            ))}

    </section>
            </>
        )
    }

      export default Woods;