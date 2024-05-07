import React from 'react'

function SearchBar() {
  return (
    <div className='flex gap-4 my-10 justify-center px-10'>
        <select className='w-64 py-3 pl-4 rounded-md border-2 border-[#F0B523] bg-[#18191A] text-white'>
            <option value="" disabled hidden selected>Job Role</option>
            <option value="Frontend Developer">Frontend Developer</option>
            <option value="Backend Developer">Backend Developer</option>
            <option value="Mobile App Developer">Mobile App Developer</option>
            <option value="Software Engineer">Software Engineer</option>
            <option value="QA Engineer">QA Engineer</option>
            <option value="DevOps Engineer">DevOps Engineer</option>
            <option value="UIUX Designer">UIUX Designer</option>
        </select>
        <select className='w-64 py-3 pl-4 rounded-md border-2 border-[#F0B523] bg-[#18191A] text-white'>
            <option value="" disabled hidden selected>Job Type</option>
            <option value="Frontend Developer">Frontend Developer</option>
            <option value="Backend Developer">Backend Developer</option>
            <option value="Mobile App Developer">Mobile App Developer</option>
            <option value="Software Engineer">Software Engineer</option>
            <option value="QA Engineer">QA Engineer</option>
            <option value="DevOps Engineer">DevOps Engineer</option>
            <option value="UIUX Designer">UIUX Designer</option>
        </select>
        <select className='w-64 py-3 pl-4 rounded-md border-2 border-[#F0B523] bg-[#18191A] text-white'>
            <option value="" disabled hidden selected>Location</option>
            <option value="Frontend Developer">Frontend Developer</option>
            <option value="Backend Developer">Backend Developer</option>
            <option value="Mobile App Developer">Mobile App Developer</option>
            <option value="Software Engineer">Software Engineer</option>
            <option value="QA Engineer">QA Engineer</option>
            <option value="DevOps Engineer">DevOps Engineer</option>
            <option value="UIUX Designer">UIUX Designer</option>
        </select>
        <select className='w-64 py-3 pl-4 rounded-md border-2 border-[#F0B523] bg-[#18191A] text-white'>
            <option value="" disabled hidden selected>Experience</option>
            <option value="Frontend Developer">Frontend Developer</option>
            <option value="Backend Developer">Backend Developer</option>
            <option value="Mobile App Developer">Mobile App Developer</option>
            <option value="Software Engineer">Software Engineer</option>
            <option value="QA Engineer">QA Engineer</option>
            <option value="DevOps Engineer">DevOps Engineer</option>
            <option value="UIUX Designer">UIUX Designer</option>
        </select>
        <button className='w-64 bg-[#F0B523] hover:bg-[#FCB409] text-white py-3 rounded-md px-2'>Search</button>
    </div>
  )
}

export default SearchBar