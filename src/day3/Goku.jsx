import { useState } from "react";
export const Goku = () => {
    const[isVisible,display]=useState("Kaioken");
    return(
        <div>
            <h1>{isVisible}</h1>
            <input type='checkbox' onChange={()=>display(isVisible==="Kaioken"?"SuperSaiyan":"Kaioken")}/>
        </div>
    )
}