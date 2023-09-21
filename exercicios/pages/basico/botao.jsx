function acao1(){
    console.log("acao1")
}


export default function botao() {

    function acao2(){
        console.log("acao2")
    }

    function acao5(e){
        console.log(e)
    }

    return (
        <div>
            <button onClick={acao1}>Click</button>
            <button onClick={acao2}>Click</button>
            <button onClick={() => console.log('111')}>Click</button>
            <button onClick={function () {
                console.log('222')
            }}>Click</button>

            <button onClick={acao5}>Click</button>
        </div>
    )
}