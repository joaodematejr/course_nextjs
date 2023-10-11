import { createContext, useState } from "react";

type Tema = "dark" | "light";

interface AppContextProps {
  tema?: Tema;
  alternarTema?: () => void;
}

const AppContext = createContext<AppContextProps>({});

export function AppProvider(props: any) {
  const [tema, setTema] = useState("dark");

  function alternarTema() {
    setTema(tema === "dark" ? "light" : "dark");
  }

  return (
    <AppContext.Provider value={{ tema: "dark", alternarTema }}>
      {props.children}
    </AppContext.Provider>
  );
}

export default AppContext;
