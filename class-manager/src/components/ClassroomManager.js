import React from 'react'
import ClassList from './ClassList'
import useFetch from '@/hooks/useFetch'

function ClassroomManager() { 
  const {error, data, isLoading}= useFetch('http://localhost:3500/classes')
  if(isLoading) {return <div>Loading...</div>}
  if(error){
    console.log(error)
    return <div>Error with fetching data!</div>
  }
  console.log(isLoading)

  return (
    <div>
  
       {data && data.map((classData) => 
        <div key={classData.id} >
          <ClassList classData= {classData}/>
          </div>
        )} 
      
     
    </div>
  )
}

export default ClassroomManager 