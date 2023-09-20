export default function Filho(props){ 
   return (
    <div>
      <h1>Filho</h1>
      <button onClick={() => props.funcao("Passei evento")}>Falar com Pai</button>
    </div>
   ) 
}