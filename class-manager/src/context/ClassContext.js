import React, { createContext, useState } from "react";
import useFetch from "@/hooks/useFetch";

export const ClassContext = createContext();

export const ClassProvider = ({ children }) => {
  const {
    error: classError,
    data: classes,
    isLoading: isClassesLoading,
  } = useFetch("http://localhost:3500/classes");

  return (
    // Providing classes, isLoading, and error through the ClassContext
    <ClassContext.Provider value={{ classes, isClassesLoading, classError }}>
      {children}
    </ClassContext.Provider>
  );
};
