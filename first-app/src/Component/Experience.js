import React from 'react';
function Experience({experience}) {
  if( !experience|| experience.length==0) {
    return null;
  }
  
  return (
    <div>
      <h2>Experience</h2>
        <ul>
            {experience.map((exp, i) => (
            <li key={i}>
                <h3>{exp.company}</h3>
                <p>{exp.role}</p>
                <p>{exp.year}</p>
            </li>
            ))}
        </ul>
    </div>
  );
}

export default Experience;