import {useRouter} from 'next/router';

export default function buscar() {
  const router = useRouter();
  const codigo = router.query.id;
  console.log('codigo', codigo)
    return (
      <div>
        <h1>Rota / id / buscar</h1>
      </div>
    );
  }
  