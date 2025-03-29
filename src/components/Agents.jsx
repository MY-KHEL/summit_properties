import { Pointer } from "iconsax-react";

const Agents = () => {
    const agentData =[
        {
            id:1,
            fullName:'Timothy Smith',
            imageLink:'./agent1.jpg',
            address:'200 E Avenue 43, Zeleni put 21, Los Angeles, California'
        },
        {
            id:2,
            fullName:'Joshua Adams',
            imageLink:'./agent2.jpg',
            address:'5801 Wilshire Blvd, England, England, United Kingdom'
        },
        {
            id:3,
            fullName:'David Warner',
            imageLink:'./agent3.jpg',
            address:'622 N Main, 95 South Park Avenue, New York, USA'
        },
        {
            id:4,
            fullName:'Paul Junior',
            imageLink:'./agent4.jpg',
            address:'1900 S Main St, Tezpur, Queensland, Australia'
        },
    ]
    return ( 
        <>
        <div className="">
            <h2 className="text-3xl text-center my-5 font-semibold">Meet Our Agents</h2>
            <div className="md:grid grid-cols-4 gap-8 p-4">
                {agentData.map((detail)=>(
                    <div className=" border-1 border-black/40  shadow shadow-black/30 hover:shadow-md hover:shadow-projectblue rounded-t-md p-2 mt-4 md:mt-1">
                    <img src={detail.imageLink} alt="" className=""/>
                            <h2 className="text-center text-xl font-semibold text-projectgrey">{detail.fullName}</h2>
                            <span className="flex gap-6 items-center ">
                              <Pointer size="30" color="#52aeff" className="rotate-90" />  
                            
                        <p className="">
                            {detail.address}
                        
                        </p>
                        </span>
                    </div>
                )
               )}
              

            </div>
        </div>
        </>
     );
}
 
export default Agents;