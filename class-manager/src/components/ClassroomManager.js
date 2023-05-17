import React, { useState } from 'react';
import ClassList from './ClassList'; 
import useFetch from '@/hooks/useFetch'; 
import Dropdown from './Dropdown';
import SelectedClassInfo from './ClassList';

function ClassroomManager() { 
  const { error, data, isLoading } = useFetch('http://localhost:3500/classes'); // Fetching data using the useFetch hook
  
  const [selectedClass, setSelectedClass] = useState(null);
  if (isLoading) {
    return <div>Loading...</div>; // Display a loading message if data is still being fetched
  }
  
  if (error) {
    console.log(error);
    return <div>Error with fetching data!</div>; // Display an error message if there was an error fetching data
  }
  const handleSelectClass = (classData) => {
    setSelectedClass(classData);
  };
  return (
    <div>
       <Dropdown data={data} onSelectClass={handleSelectClass} /> {/* Render the Dropdown component and pass the fetched data as props */}
       {selectedClass && <SelectedClassInfo selectedClass={selectedClass} />}
    </div>
  );
}

export default ClassroomManager;
