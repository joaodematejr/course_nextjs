// Componente: { condicional2 }
import If from '../../components/if'; 

export default function condicional2() {
   const numero = 4;
    return (
         <div>
            <If test={numero % 2 === 0}>
                  <h1>O número {numero} é par</h1>
            </If>
         </div>
    )
 }