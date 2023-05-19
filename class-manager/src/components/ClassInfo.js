import React, { useContext, useState } from 'react';
import { StudentContext } from '@/context/StudentContext';
import usePost from '@/hooks/usePost';

function ClassInfo({ selectedClass }) {
  const { students, isStudentsLoading, setStudents } = useContext(StudentContext);
  const [newStudentName, setNewStudentName] = useState('');
  const [sortOrder, setSortOrder] = useState('asc');
  const { addStudent } = usePost(); 

  if (isStudentsLoading) {
    return <div>Loading students...</div>;
  }

  const filteredStudents = students.filter(student => selectedClass ? student.classId.includes(selectedClass.id) : false);




  const sortedStudents = filteredStudents.sort((a, b) => {
    if (sortOrder === 'asc') {
      return a.name.localeCompare(b.name);
    } else {
      return b.name.localeCompare(a.name);
    }
  });

  const handleAddStudent = async (e) => {
    e.preventDefault();

    const newStudent = {
      id: Date.now(),
      name: newStudentName,
      classId: selectedClass ? [selectedClass.id] : [],
    };

    await addStudent(newStudent); 
    console.log(newStudent)

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
      <p className="mb-2">Teacher: {selectedClass ? selectedClass.teacher : 'No teacher'}</p>

      <div className="flex mb-2">
        <h3 className="text-xl mr-2">Students</h3>
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
        <div className="border rounded p-4 bg-blue-500">
          <ul className="list-disc pl-6">
            {sortedStudents.map(student => (
              <li key={student.id}>{student.name}</li>
            ))}
          </ul>
        </div>
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
