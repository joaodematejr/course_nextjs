import { useState } from "react"

export default function mouse() {
    const [x, setX] = useState(0)
    const [y, setY] = useState(0)




    function quandoMover(ev) {
        setY(ev.clientY)
        setX(ev.clientX)
        console.log(ev.clientX, ev.clientY)
    }


    return(
        <div 
        onMouseMove={quandoMover}
        style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#222",
            color: "#fff",
            height: "100vh",
        }}>
        <span>Eixo X:{x}</span>
        <span>Eixo Y:{y}</span>
        </div>
    )
}