
interface PessoaProps {
    nome: string;
    idade: number;
}

export default function Pessoa(props: PessoaProps) {
    return (
        <div>
            <h1>
                {props.nome} {props.idade}
            </h1>
        </div>
    );
    }