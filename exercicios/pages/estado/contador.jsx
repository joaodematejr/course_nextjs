export default function contador() {
    const [valor, setValor] = useState(0)

    const dec = () => setValor(valor - 1)
    const inc = () => setValor(valor + 1)

    return (
        <div>
            <h1>Contador</h1>
            <div>Valor {valor}</div>
            <button onClick={inc}>+</button>
            <button onClick={dec}>-</button>
        </div>
    )
}