import { useState } from "react";

const SearchForm = ({open}) => {
    const [propertyType ,setPropertyType] = useState('')
    const [location ,setLocation] = useState('')
    const [beds ,setBeds] = useState('')
    const [task ,setTask] = useState('')
    const [isSubmitted,setIsSubmitted] = useState(false)

    const handleSearch = ()=>{ 
        console.log(open);
        
        setIsSubmitted(true)
        setTimeout(() => {
             setIsSubmitted(false)
        }, 5000);

      
       
    }
    return ( 
    <>
    <div className=" ">
        <div className="bg-white p-4 w-full mx-auto rounded-lg " >

        <h1 className="text-lg font-semibold ">Search For Availabilty</h1>
        {isSubmitted && <p className="text-red-600 mt-2">Search for {propertyType} with {beds} amount of beds in {location} Available </p>}
        
        <div className="select-container">
            <select name="location" id="" onChange={(e)=>setTask(e.target.value)} >
            <option value=""  disabled selected>Any</option>
            <option value="Los Angeles">Buy</option>
            <option value="Detroit">Rent</option>
            <option value="Las Vegas">Sell</option>
            
        </select>
        </div>
        <div className="select-container">
            <select name="location" id="" onChange={(e)=>setLocation(e.target.value)} >
            <option value=""  disabled selected>Select Location</option>
            <option value="Los Angeles">Los Angeles</option>
            <option value="Detroit">Detroit</option>
            <option value="Las Vegas">Las Vegas</option>
            <option value="Manchester">Manchester</option>
            <option value="New York City">New York City</option>
        </select>
        </div>
        <div className="select-container">
            <select name="propertyType" id="" onChange={(e)=>setPropertyType(e.target.value)} >
            <option value=""  disabled selected>Select Property Type</option>
            <option value="Apartment">Apartment</option>
            <option value="Hotel and Resort">Hotel and Resort</option>
            <option value="Housing">Housing</option>
            <option value="Restaurant">Restaurant</option>
            <option value="Fitness">Fitness</option>
            <option value="Education">Education</option>
            <option value="Business">Business</option>
        </select>
        </div>
        <div className="select-container">
            <select name="propertyType" id="" onChange={(e)=>setBeds(e.target.value)} >
            <option value=""  disabled selected>Select Beds</option>
            <option value="1-5">1-5</option>
            <option value="6-9">6-9</option>
            <option value="20-90">20-90</option>
            <option value="100-900">100-900</option>
            <option value="1000+">1000+</option>
         
        </select>
        </div>
        <input type="button" value="Search" className="bg-projectblue p-3 mt-4 w-full text-white rounded-md cursor-pointer" onClick={handleSearch}/>

        </div>
    </div>
    </>
     );
}
 
export default SearchForm;