import listaProdutos from "@/data/listaProdutos"

export default function repeticao2(){

    function renderizarLinhas() {
        return listaProdutos.map((produto, i) => {
            return (
                <tr key={produto.id}>
                    <td>{produto.nome}</td>
                    <td>{produto.preco}</td>
                    <td>{produto.id}</td>
                </tr>
            )
        }) 
    }

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Produto</th>
                        <th>Preço</th>
                        <th>Id</th>
                    </tr>
                </thead>
                <tbody>
                    {renderizarLinhas()}
                </tbody>
            </table>
        </div>
    )
}