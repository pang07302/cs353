import React from "react"

export default function CenteredContainer ({ children }) {
    return (
        <div  className="d-flex align-items-center justify-content-center" style={{minHeight: "100vh"}}>
            <div className="w-100" style={{ maxWidth: "400px" }}>{children}</div>
        </div>
    )
}