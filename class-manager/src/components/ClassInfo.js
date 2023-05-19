import React, { useContext } from 'react';
import { StudentContext } from '@/context/StudentContext';

function ClassInfo({ selectedClass }) {
  const { students, isStudentsLoading } = useContext(StudentContext);

  if (isStudentsLoading) {
    return <div>Loading students...</div>;
  }

  // Filter the students based on the selected class
  const filteredStudents = students.filter(student => student.classId === selectedClass.id);

  return (
    <div>
      <h2>Class Info</h2>
      <p>Teacher: {selectedClass.teacher}</p>

      <h3>Students</h3>
      {filteredStudents.length > 0 ? (
        <ul>
          {filteredStudents.map(student => (
            <li key={student.id}>{student.name}</li>
          ))}
        </ul>
      ) : (
        <p>No students found for this class.</p>
      )}
    </div>
  );
}

export default ClassInfo;
