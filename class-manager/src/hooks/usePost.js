import { useState, useContext } from 'react';
import axios from 'axios';
import { StudentContext } from '@/context/StudentContext';

function usePost() {
  const { students, setStudents } = useContext(StudentContext);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const addStudent = async (newStudent) => {
    try {
      setIsLoading(true);

      const response = await axios.post('http://localhost:3500/students', newStudent);
      const updatedStudents = [...students, response.data];

      setStudents(updatedStudents);
      console.log(students)

      setIsLoading(false);
    } catch (error) {
      setError(error);
      setIsLoading(false);
    }
  };

  return { addStudent, isLoading, error };
}

export default usePost;

