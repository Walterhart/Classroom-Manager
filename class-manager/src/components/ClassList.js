import React from 'react';

function SelectedClassInfo({ selectedClass }) {
  return (
    <div>
      Selected Class: {selectedClass.name}
      <br />
      Teacher: {selectedClass.teacher}
    </div>
  );
}

export default SelectedClassInfo;
