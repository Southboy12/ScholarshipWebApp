import Select from 'react-select'
import { useState } from 'react'
import DatePicker from 'react-datepicker'
import countries from 'world-countries'
import "react-datepicker/dist/react-datepicker.css";
import { format } from 'date-fns'
import { addYears } from 'date-fns'

const Filter = () => {

    const [startDate, setStartDate] = useState(new Date())
    const [endDate, setEndDate] = useState(addYears(new Date(), 2))
    const formattedStartDate = format(startDate, 'MMM d, yyyy')
    const formattedEndDate = format(endDate, 'MMM d, yyyy')

    const countryOptions = countries.map((country) => ({
    label: country.name.common,
    value: country.cca2
  }))  

  const levelOfStudy = [
    {label: "Bachelor's degree", value: "BD"},
    {label: "Postgraduate diploma", value: "PGD"},
    {label: "Master's degree", value: "MD"},
    {label: "PhD", value: "PHD"},
    {label: "Postdoctoral", value: "PD"}
  ]

  const specialization = [
    { value: "ai", label: "Artificial Intelligence" },
    { value: "data-science", label: "Data Science" },
    { value: "cybersecurity", label: "Cybersecurity" },
    { value: "software-engineering", label: "Software Engineering" },
    { value: "education-tech", label: "Educational Technology" },
    { value: "marketing", label: "Marketing" },
    { value: "finance", label: "Finance" },
    { value: "early-childhood", label: "Early Childhood Education" },
  ];

  const addedValue = [
    { value: "full-tuition-fees", label: "Full tuition fees" },
    { value: "partial-tuition-fees", label: "Partial tuition fees" },
    { value: "living-allowance", label: "Living allowance" },
    { value: "family-allowance", label: "Family allowance" },
    { value: "travel-grant", label: "Travel grant" },
    { value: "insurance", label: "Insurance" }
  ];

  const requirements = [
    { value: "work-experience", label: "Work experience" },
    { value: "volunteering-experience", label: "Volunteering experience" },
    { value: "leadership-experience", label: "Leadership experience" },
    { value: "research-experience", label: "Research-experience" },
    { value: "not-specific", label: "Not specific" },
  ];

  return (
    <>
        <form className='w-full py-6 px-3 border border-gray-300 rounded-lg'>
            <h2 className='font-semibold mb-6'>Favourites Filters</h2>

            <div className='flex flex-col gap-4'>
            {/* Country */}
            <div className='flex flex-col gap-1'>
                <legend className='text-sm text-gray-500 font-medium'>Country</legend>
                <Select 
                className='text-sm'
                options={countryOptions}
                placeholder="Select your country"
                isSearchable
                />
            </div>
            
            {/* Level of study */}
            <div className='flex flex-col gap-1'>
                <legend className='text-sm text-gray-500 font-medium'>Level of study</legend>
                <Select 
                className='text-sm'
                options={levelOfStudy}
                placeholder="Select your country"
                isSearchable
                />
            </div>

            {/* Area of specialization */}
            <div className='flex flex-col gap-1'>
                <legend className='text-sm text-gray-500 font-medium'>Area of specialization</legend>
                <Select 
                className='text-sm'
                options={specialization}
                placeholder="Select specialization"
                isSearchable
                />
            </div>

            {/* Application start date */}
            <div className='flex flex-col gap-1'>
                <legend className='text-sm text-gray-500 font-medium'>Application starts</legend>
                <DatePicker 
                selected={startDate}
                value={formattedStartDate}
                onChange={(date) => setStartDate(date)}
                placeholder={formattedStartDate}
                className='border border-gray-300 text-sm text-gray-400 px-2 py-2 w-full rounded outline-none focus:border-blue-500 focus:border-2'
                />
            </div>

            {/* Application end date */}
            <div className='flex flex-col gap-1'>
                <legend className='text-sm text-gray-500 font-medium'>Application ends</legend>
                <DatePicker 
                selected={endDate}
                value={formattedEndDate}
                onChange={(date) => setEndDate(date)}
                placeholder="Jan 1, 2023"
                className='border border-gray-300 text-sm text-gray-400 px-2 py-2 w-full rounded outline-none focus:border-blue-500 focus:border-2'
                />
            </div>

            {/* Value */}
            <div className='flex flex-col gap-1'>
                <legend className='text-sm text-gray-500 font-medium'>Value</legend>
                <Select 
                className='text-sm'
                options={addedValue}
                placeholder="Select value of funding"
                isSearchable
                />
            </div>

            {/* Requirements */}
            <div className='flex flex-col gap-1'>
                <legend className='text-sm text-gray-500 font-medium'>Requirements</legend>
                <Select 
                className='text-sm'
                options={requirements}
                placeholder="Select requirement"
                isSearchable
                />
            </div>
            </div>
        
        </form>
    </>
  )
}

export default Filter