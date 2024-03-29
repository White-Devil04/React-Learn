import React from 'react';  
function Skills({skills}) {
  if( !skills|| skills.length==0) {
    return null;
  }
  
  return (
    <div>
<h2>Skills</h2>
        <ul>
            {skills.map((skill, i) => (
            <li key={i}>
                {skill}
            </li>
            ))}
        </ul>
    </div>
  );
}

export default Skills;