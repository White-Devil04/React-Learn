import React from 'react';
function Education({education}) {
  return (
    <div>
      <h2>Education</h2>
        <ul>
            {education.map((edu, i) => (
            <li key={i}>
                <h3>{edu.school}</h3>
                <p>{edu.degree}</p>
                <p>{edu.year}</p>
            </li>
            ))}
        </ul>
    </div>
  );
}
export default Education;