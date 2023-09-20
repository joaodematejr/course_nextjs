export default function formulario() {
    const [valor, setValor] = useState('inicial')
    
    return (
        <div>
            <input type="text" value={valor} onChange={e => setValor(e.target.value)}/>
            <input type="text" value={valor} readOnly/>
            <button onClick={() => setValor('alterado')}>Alterar</button>

        </div>
    )
}