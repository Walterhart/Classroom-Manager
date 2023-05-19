import React, { useContext, useState } from 'react';
import { StudentContext } from '@/context/StudentContext';

function ClassInfo({ selectedClass }) {
  const { students, isStudentsLoading } = useContext(StudentContext);
  const [newStudentName, setNewStudentName] = useState('');
  const [sortOrder, setSortOrder] = useState('asc'); // Track the sort order state

  if (isStudentsLoading) {
    return <div>Loading students...</div>;
  }

  // Filter the students based on the selected class
  const filteredStudents = students.filter(student => student.classId === selectedClass.id);

  // Sort the filtered students based on the sort order
  const sortedStudents = filteredStudents.sort((a, b) => {
    if (sortOrder === 'asc') {
      return a.name.localeCompare(b.name);
    } else {
      return b.name.localeCompare(a.name);
    }
  });

  const handleAddStudent = (e) => {
    e.preventDefault();
    
    // Create a new student object with a unique id and the provided name
    const newStudent = {
      id: Date.now(), // Generate a unique id using the current timestamp
      name: newStudentName,
      classId: selectedClass.id,
    };

    // Update the students data with the new student
    const updatedStudents = [...students, newStudent];

    // Display the updated students list
    console.log('Updated Students:', updatedStudents);

    // Clear the input field after adding the student
    setNewStudentName('');
  };

  const handleSortAsc = () => {
    setSortOrder('asc');
  };

  const handleSortDesc = () => {
    setSortOrder('desc');
  };

  return (
    <div className="mt-8">
      <h2 className="text-2xl font-bold mb-4">Class Info</h2>
      <p className="mb-2">Teacher: {selectedClass.teacher}</p>

      <div className="flex mb-2">
        <h3 className="text-xl font-bold mr-2">Students</h3>
        <div className="ml-auto">
          <button
            type="button"
            onClick={handleSortAsc}
            className={`px-2 py-1 rounded ${
              sortOrder === 'asc' ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-600'
            }`}
          >
            Sort Asc
          </button>
          <button
            type="button"
            onClick={handleSortDesc}
            className={`px-2 py-1 rounded ${
              sortOrder === 'desc' ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-600'
            }`}
          >
            Sort Desc
          </button>
        </div>
      </div>

      {sortedStudents.length > 0 ? (
        <ul className="list-disc pl-6">
          {sortedStudents.map(student => (
            <li key={student.id}>{student.name}</li>
          ))}
        </ul>
      ) : (
        <p>No students found for this class.</p>
      )}

      <form onSubmit={handleAddStudent} className="mt-4">
        <input
          type="text"
          value={newStudentName}
          onChange={(e) => setNewStudentName(e.target.value)}
          placeholder="Enter student name"
          className="p-2 border border-gray-300 rounded mr-2"
        />
        <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">
          Add Student
        </button>
      </form>
    </div>
  );
}

export default ClassInfo;
