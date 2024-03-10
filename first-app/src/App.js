import React from 'react';
import Resume from "./Component/Resume";
import PrintBtn from "./Component/PrintBtn";
function App() {
  const resumes = [{
    name: 'John Doe',
    experience: [{ year: 2012, company: 'xyz', role: 'SDE' }],
    education: [{ year: 2012, school: 'ABC University', degree: 'Bachelors' }],
    skills: ['react js', 'node js']
  },
  {
    name: 'RDJ',
    experience: [{ year: 2012, company: 'xyz', role: 'SDE' }],
    education: [{ year: 2012, school: 'ABC University', degree: 'Bachelors' }],
    skills: []
  }
];

  return (
    <div>
      <h1>Resume Builder</h1>
      {resumes.map((resume,i) => (
        <Resume resumeData={resume}/>
      ))}
      <PrintBtn/>
    </div>
  );
}

export default App;