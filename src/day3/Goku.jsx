import { useState } from "react";
export const Goku = () => {
    const[isVisible,display]=useState("Kaioken");
    return(
        <div>
            <input type='checkbox' onChange={()=>display(isVisible==="Kaioken"?"SuperSaiyan":"Kaioken")}/>
            <h1>{isVisible}</h1>
        </div>
    )
}