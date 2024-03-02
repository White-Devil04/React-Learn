import React from 'react';
import Resume from "./Component/Resume";
function App() {
  const resume = {
    name: 'John Doe',
    experience: [{ year: 2012, company: 'xyz', role: 'SDE' }],
    education: [{ year: 2012, school: 'ABC University', degree: 'Bachelors' }],
    skills: ['react js', 'node js'],
  };

  return (
    <div>
      <h1>Resume Builder</h1>
      <Resume resumeData={resume}/>
    </div>
  );
}

export default App;