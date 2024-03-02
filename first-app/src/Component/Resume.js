import React from 'react';
import Experience from './Experience';
import Education from './Education';
import Skills from './Skills';

function Resume ({resumeData}) {
    return (
        <div>
            <h1>{resumeData.name}</h1>
            <Experience experience= {resumeData.experience}/>
            <Education education= {resumeData.education}/>
            <Skills skills={resumeData.skills}/>      
        </div>
    );
}

export default Resume;