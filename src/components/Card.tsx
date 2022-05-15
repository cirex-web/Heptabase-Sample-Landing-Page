import React from "react";
import styles from "../styles/card.module.css"

interface ReactChildren{
    "children":React.ReactNode
}

const Card = ({children}:ReactChildren) =>{
    return <div className={styles.card}>
        {children}
    </div>
}
export const CardHeader = ({children}:ReactChildren)=>{
    return <div className={styles.header}>{children}</div>
}
export const CardContent = ({children,large}:ReactChildren&{large?:boolean})=>{
    return <div className={large?styles.largeContent:styles.content}>{children}</div>
}
export default Card