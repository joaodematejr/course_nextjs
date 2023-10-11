import { createContext } from "react";

const AppContext = createContext({
  name: "Fulano da Silva",
});

export function AppProvider(props: any) {
  return (
    <AppContext.Provider value={{ name: "Fulano da Silva" }}>
      {props.children}
    </AppContext.Provider>
  );
}

export default AppContext;
