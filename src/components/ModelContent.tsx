// ModelContext.tsx
import { createContext, useContext, useState, ReactNode } from "react";

interface ModelContextProps {
  modelPath: string;
  setModelPath: (path: string) => void;
}

const ModelContext = createContext<ModelContextProps | undefined>(undefined);

export const useModel = () => {
  const context = useContext(ModelContext);
  if (!context) {
    throw new Error("useModel must be used within a ModelProvider");
  }
  return context;
};

export const ModelProvider = ({ children }: { children: ReactNode }) => {
  const [modelPath, setModelPath] = useState<string>(
    "/models/test/smartlineR.glb"
  );
  return (
    <ModelContext.Provider value={{ modelPath, setModelPath }}>
      {children}
    </ModelContext.Provider>
  );
};
