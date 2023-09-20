
import { useEffect, useState } from 'react'
import{mega} from '../../functions/mega'


export default function megasena() {
    const [qtde, setQtde] = useState(6)
    const [numeros, setNumeros] = useState([])

    useEffect(() => {
        setNumeros(mega())
    }, [])


    function renderNumeros() {
        return numeros.map((numero, index )=> <span key={index}>{numero} </span>)
        
    }

    return (
        <div>
            <h1>Mega Sena</h1>
            <div>
                {renderNumeros()}
            </div>
            <input type="number" min={6} max={60} value={qtde} onChange={e => setQtde(+e.target.value)} />
            <button onClick={_ => setNumeros(mega(qtde))}>
                Gerar Números
            </button>
        </div>
    )
}