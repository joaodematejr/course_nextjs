import { useEffect, useState } from "react";

export default function Estatico1() {
  const [num, setNum] = useState(0);

  useEffect(() => {
    setNum(Math.random());
  }, []);

  return (
    <>
      <h1>Estático #01</h1>
      <h1>{num}</h1>
    </>
  );
}
