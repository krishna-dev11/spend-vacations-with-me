import React from "react";
import Card from "./Card";


function Tour({tours,removetour})
{
     return(
        <div className="wrapper">
            <div className="heading">Plan With Nikhil</div>
            <div className="wholetoursection">
                {
                    tours.map((singletour)=>{
                        return <Card key={singletour.id} {...singletour}
                         removetour={removetour}></Card>
                        
                    })
                }
            </div>
        </div>
     );
}

export default Tour;