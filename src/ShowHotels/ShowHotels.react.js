import React from 'react';



const ShowHotels = (props) => {

    return (
        <div >
             <table className='table table-striped'>
             <thead>
                    <tr>
                    <th>ID</th>
                    <th>Hotel Name</th>
            <th>Location</th>
            <th>Rating</th>
            
                    </tr>
                
                </thead> 

             <tbody>
                {   
                  
                props.hotelList.map((eachHotel,index)=>{
                    
                    return <tr key={index}>
                        <td>{eachHotel.id}</td>
                        <td>{eachHotel.hotelName}</td>
                        <td>{eachHotel.location}</td>
                        <td>{eachHotel.rating}</td>
                     
                </tr>
                })
                }
            </tbody>
             </table>
        </div>
    );

}

export default ShowHotels;