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
    <div className="mt-8 justify-end ">
      
      <h3 className="mb-2 ">Teacher:  </h3>
      
       <p className='border-4 border-gray-900 bg-white  py-1 px-2 mt-1 '>{selectedClass ? selectedClass.teacher : 'No teacher'} </p>

      <form onSubmit={handleAddStudent} className="mt-8">
        <input
          type="text"
          value={newStudentName}
          onChange={(e) => setNewStudentName(e.target.value)}
          placeholder="Enter student name"
          className="p-2 border-4 border-gray-900  mr-2" 
        />
        <button type="submit" className="bg-green-500  hover:bg-blue-600 font-bold text-white py-2 px-4 shadow-xl">
          Add Student
        </button>
      </form>
      {sortedStudents.length > 0 ? (
        <div className="border-4  p-4 border-gray-900  mt-4 bg-white">
            {sortedStudents.map(student => (
              <p key={student.id}>{student.name}</p>
            ))}      
        </div>
      ) : (
        <p className='border-4  p-4 border-gray-900  mt-4 bg-white'> No students found for this class.</p>
      )}
    <div className="ml-auto">
          <button
            type="button"
            onClick={handleSortAsc}
            className={`px-2 py-1 mr-2  mt-4  bg-green-500  hover:bg-blue-500 text-white font-bold shadow-xl`}
          >
            Sort Asc
          </button>
          <button
            type="button"
            onClick={handleSortDesc}
            className={`px-2 py-1  bg-green-500  hover:bg-blue-500 text-white font-bold shadow-xl`}
          >
            Sort Desc
          </button>
        </div>
    </div>
  );
}

export default ClassInfo;
