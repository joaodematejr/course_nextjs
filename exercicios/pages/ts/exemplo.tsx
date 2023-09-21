import Pessoa from "@/components/Pessoa";

export default function Exemplo() {
    return (
        <div>
            <Pessoa nome="João" idade={30} />
            <Pessoa nome="João" idade={666} />
        </div>
    );
}