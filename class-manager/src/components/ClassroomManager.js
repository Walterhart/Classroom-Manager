import React, { useContext, useState } from 'react';
import Dropdown from './Dropdown';
import ClassInfo from './ClassInfo';
import { ClassContext } from '@/context/ClassContext';
import { StudentContext } from '@/context/StudentContext';

function ClassroomManager() {
  const { classes, isClassesLoading, classError } = useContext(ClassContext);
  const { isStudentsLoading, studentError } = useContext(StudentContext);

  const [selectedClass, setSelectedClass] = useState(null);

  if (isClassesLoading || isStudentsLoading) {
    return <div>Loading...</div>; // Display a loading message if data is still being fetched
  }

  if (classError || studentError) {
    console.log(classError, studentError);
    return <div>Error with fetching data!</div>; // Display an error message if there was an error fetching data
  }

  const handleSelectClass = (classData) => {
    setSelectedClass(classData);
  };

  return (
    <div className="flex flex-col items-start ml-6 mt-4">
      <h3 className="text-green-500 font-bold mb-4">Classroom Manager</h3>
      <div className="flex item-center">
        <p className="mr-2 mt-2"> Class Name:</p>
        <Dropdown data={classes} onSelectClass={handleSelectClass} />{/* Render the Dropdown component and pass the fetched data as props */}
      </div>
      <div className="flex">
        <h3 className="mt-4 mr-9">Teacher: </h3>
        <ClassInfo selectedClass={selectedClass} />{/* Render the ClassInfo component and pass the selectedClass */}
      </div>
    </div>
  );
}

export default ClassroomManager;
