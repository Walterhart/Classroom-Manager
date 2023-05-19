import React, { useContext, useState } from 'react';
import ClassList from './ClassInfo'; 
import useFetch from '@/hooks/useFetch'; 
import Dropdown from './Dropdown';
import ClassInfo from './ClassInfo';
import { ClassContext } from '@/context/ClassContext';
import { StudentContext } from '@/context/StudentContext';

function ClassroomManager() { 
  const { classes, isClassesLoading, classError } = useContext(ClassContext);
  const{ students, isStudentsLoading, studentError } = useContext(StudentContext)
  
  const [selectedClass, setSelectedClass] = useState(null);
  if (isClassesLoading || isStudentsLoading) {
    return <div>Loading...</div>; // Display a loading message if data is still being fetched
  }
  
  if (classError || studentError ) {
    console.log(classError, studentError);
    return <div>Error with fetching data!</div>; // Display an error message if there was an error fetching data
  }
  const handleSelectClass = (classData) => {
    setSelectedClass(classData);
  };
  return (
    <div>
       <Dropdown data={classes} onSelectClass={handleSelectClass} /> {/* Render the Dropdown component and pass the fetched data as props */}
       {selectedClass &&  <ClassInfo selectedClass={selectedClass} students={students}  />}
    </div>
  );
}

export default ClassroomManager;
