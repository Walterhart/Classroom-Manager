import React from 'react'


export const getStaticProps =async() => {
    const res = await fetch("http://localhost:3500/Classes")
    const data = await res.json()
  
    return {
      props: {classes: data}
    }
  }
  
function Classes({classes}) {
  return (
    <div>
    {classes.map(classes => (
      <div key ={classes.id}>
        <p>{classes.name}</p>
      </div>
    ))}
    </div>
  )
}

export default Classes