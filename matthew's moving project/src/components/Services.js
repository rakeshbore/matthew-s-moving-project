import React from 'react'
import ReactMapboxGl  from "react-mapbox-gl";
import { FaCheck } from "react-icons/fa";



const Map = ReactMapboxGl({
  accessToken:
    "pk.eyJ1IjoibWF5b2ppY2giLCJhIjoiY2pla3Q3MzVvMWRoYTJybnVyMndxM2hmdCJ9.nWZlYcpKaMqz6m7xTsnJGA"
});


const Services = () => {
  return (
    <div>
    <div className='services_margin_top'>
  <div className="Service ">
  <div className="Service-title ">Our Service</div>
  </div>
  <div className=" my-5"></div>
<div className="container-fluid">
 <div className="row justify-content-evenly mt-5">
 <div className="col-md-5    ">

<img className="img-fluid" src="https://www.matthewsmovingcompany.com/wp-content/uploads/2020/11/img-service2.jpg"/>

    <h1 className="rightservice mb-5">We offer local moving services for both residential
    <br/> and commercial customers.
    </h1>
   
</div>
{/* thsis is imgs */}
<div className="col-md-5  ">

<img className=" img-fluid" src="https://www.matthewsmovingcompany.com/wp-content/uploads/2020/11/img-service1.jpg"/>
  <h1 className="rightservice mb-5">We offer nationwide moving services for both residential and commercial customers.</h1>
 
 

  </div>
</div>




{/* this is text mater */}
<div data-aos="fade-up"
     data-aos-anchor-placement="top-center" className="row justify-content-evenly  ">
    <div className="col-md-5  col-10 mt-5">
           
  <h4>Why use Matthew’s Nationwide Moving? We are a small local,
       family owned and operated business, and we strive for customer excellence.
       Working with us is a personal experience and we treat clients how we would want to be treated if we were moving.
<br/><br/>
We have an extremely cautious and experienced crew who are fully licensed and insured.
 Our crews are very careful, professional,
 & polite movers with years of experience and state of the art equipment.</h4>
    </div>
   
     <div className="col-md-5 col-10 mt-5 ">
    <div className="card ">
 <h1 className="wesell">WE SELL BOXES</h1>

 <h4 className="wesell1">Just one less thing to worry about when<br/> you choose Matthews Nationwide Moving. </h4>
 
 <button type="button" className="wesell-button"><h1> Get a Quote</h1></button>
    </div>
</div>
</div>


 {/* this is is hr line  */}
 <div className="row justify-content-evenly">
     <div className="col-md-9 mt-5">
         <hr/>
     </div>
 </div>
{/* this is right rows */}
<div className="row justify-content-evenly mt-5">
    <div className="col-md-4 ">
        <h1 className="righthead">WE ALSO OFFER</h1>
      <div className="mt-5">
        <FaCheck className='h3' /> <span id="right" className="fs-6 ">HOUSEHOLD GOODS MOVING </span>
        <br/>
        <FaCheck className='h3  '/> <span id="right" className=" fs-6 ">INTERNATIONAL MOVING </span>
        <br/>
        <FaCheck className='h3  '/>  <span id="right" className=" fs-6 ">CORPORATE RELOCATION </span>
        <br/>
        <FaCheck className='h3  '/> <span id="right" className=" fs-6 ">PROFESSIONAL WRAPPING OF FURNITURE. </span>
        <br/>
        <FaCheck className='h3  '/> <span id="right" className=" fs-6 ">SHRINK WRAPPING OF COUCHES AND  </span>
        <br/>
        <FaCheck className='h3  '/> <span id="right" className=" fs-6 ">AUTO TRANSPORTATION</span>
        <br/>
        <FaCheck className='h3  '/> <span id="right" className=" fs-6 ">PROFESSIONAL DOOR JAM, RAILING,  </span>
      </div>
    </div>


    <div className="col-md-4 ">
    <h1 className="mb-5 text-light"> .</h1>
    <div className="mt-5">
        <FaCheck className='h3  '/> <span id="right" className=" fs-6 ">PROFESSIONAL PACKING SERVICES  </span>
        <br/>
        <FaCheck className='h3  '/> <span id="right" className=" fs-6 ">PROFESSIONAL ASSEMBLY & DISASSEMBLY   </span>
        <br/>
        <FaCheck className='h3  '/> <span id="right" className=" fs-6 ">STORAGE SERVICES</span>
        <br/>
        <FaCheck className='h3  '/> <span id="right" className=" fs-6 ">PIANO AND SAFE MOVING  </span>
        <br/>
        <FaCheck className='h3  '/> <span id="right" className=" fs-6 ">ENCLOSED VEHICLE TRANSPORT </span>
        <br/>
        <FaCheck className='h3  '/> <span id="right" className=" fs-6 ">EXTENSIVE CUSTOMER GUARANTEE </span>
        <br/>
        <FaCheck className='h3  '/> <span id="right" className=" fs-6 ">A DECADE OF EXPERIENCE IN THE MOVING   </span>
      </div>
</div>


</div>


{/* this is google map */}
    <div  className="mt-5" id="map">
   
  <a href="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30449.88443781667!2d78.37413606402978!3d17.448436284677626!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9158f201b205%3A0x11bbe7be7792411b!2sMadhapur%2C%20Telangana!5e0!3m2!1sen!2sin!4v1647948572237!5m2!1sen!2sin">
        {" "}
   
      </a> 
      <Map
        style="mapbox://styles/mapbox/streets-v8"
        // zoom={[1]}
        center={[101.8224, 2.955139]}
        containerStyle={{
          height: "50vh",
          width: "100vw"
        }}
      >
        {/* <Layer type="symbol" id="marker" layout={{ "icon-image": "marker-15" }}>
          <Feature coordinates={[101.8224, 2.955139]} />
        </Layer>  */}
      </Map>
    </div>


    {/* this is footer */}
   
       
          
     

     
   

    {/* this is a container fluid div */}
</div>



</div>
</div>


  )
}

export default Services