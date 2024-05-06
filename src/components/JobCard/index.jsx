import dayjs from 'dayjs';
import React from 'react'

function JobCard() {
    const skills = ["javascript", "React", "Node JS"];
    const date1 = dayjs(Date.now());
    const diffInDays = date1.diff('2024-04-25', 'day')
  return (
    <div className="mx-40 mb-40">
        <div className="bg-blue-500 text-white flex justify-between items-center px-6 py-4 rounded-md border-2 border-blue-500 hover:translate-y-1 hover:scale-103">
            <div className="flex flex-col items-start gap-3">
                <h1 className="text-lg font-semibold">Frontend Developer - Amazon</h1>
                <p>Full Time &#x2022; Fresher &#x2022; In-Office</p>
                <div className="flex items-center gap-2">
                    {skills.map((skill)=>(
                        <p key={skill} className="text-white py-1 px-2 rounded-md border border-white">{skill}</p>
                    ))}
                </div>
            </div>
            <div className="flex items-center gap-4">
                <p className="text-white/50">Posted {diffInDays} days ago</p>
                <button className="bg-white text-blue-500 px-10 py-2 rounded-md">Apply</button>
            </div>
        </div>
    </div>
  )
}

export default JobCard