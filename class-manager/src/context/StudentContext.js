import React, { createContext } from "react";
import useFetch from "@/hooks/useFetch";


export const StudentContext = createContext();

export const StudentProvider = ({ children }) => {
  const { error: studentError, data: students, isLoading: isStudentsLoading } = useFetch('http://localhost:3500/students');
  return (
    <StudentContext.Provider value={{ students, isStudentsLoading, studentError }}>
      {children}
    </StudentContext.Provider>
  );
};
