import dayjs from 'dayjs';
import React from 'react'

function JobCard() {
    const skills = ["javascript", "React", "Node JS"];
    const currentDate = dayjs(Date.now());
    const diffInDays = currentDate.diff('2024-04-25', 'day')
  return (
    <div className="mx-40 mb-40">
        <div className="bg-[#F0B523] text-black flex justify-between items-center px-6 py-4 rounded-md hover:translate-y-1 hover:scale-103">
            <div className="flex flex-col items-start gap-3">
                <h1 className="text-lg font-semibold">Frontend Developer - Amazon</h1>
                <p>Full Time &#x2022; Fresher &#x2022; In-Office</p>
                <div className="flex items-center gap-2">
                    {skills.map((skill)=>(
                        <p key={skill} className="text-black py-1 px-2 rounded-md border border-black">{skill}</p>
                    ))}
                </div>
            </div>
            <div className="flex items-center gap-4">
                <p className="text-black/50">Posted {diffInDays} days ago</p>
                <button className="bg-white text-black hover:bg-black hover:text-white px-10 py-2 rounded-md">Apply</button>
            </div>
        </div>
    </div>
  )
}

export default JobCard