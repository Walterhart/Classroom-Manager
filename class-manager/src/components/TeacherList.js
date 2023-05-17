import React, { useState } from 'react';
import Dropdown from './Dropdown';

function TeacherDisplay({ data }) {
  const [selectedClass, setSelectedClass] = useState(null); // State to track the selected class

  const handleSelectClass = (classId) => {
    const selectedClass = data.Classes.find((c) => c.id === classId);
    setSelectedClass(selectedClass);
    
  };
 
  return (
    <div>
      <Dropdown
        data={data.Classes}
        onSelect={handleSelectClass}
      />

      {selectedClass && (
        <div>
          <h2>Selected Class: {selectedClass.name}</h2>
          <p>Teacher: {selectedClass.teacher}</p>
        </div>
      )}
    </div>
  );
}

export default TeacherDisplay;
