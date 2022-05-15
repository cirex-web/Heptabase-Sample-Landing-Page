import { SlCard } from "@shoelace-style/shoelace/dist/react";
import React from "react";
import "../styles/card.css"
interface cardProps{
    "children":React.ReactNode
}
const Card = ({children}:cardProps) =>{
    return <div className="card">
        {children}
    </div>
}
export default Card