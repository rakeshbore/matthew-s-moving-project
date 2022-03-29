import React from 'react'
import ReactMapboxGl from "react-mapbox-gl";
import { MDBFooter } from 'mdb-react-ui-kit';


const Map = ReactMapboxGl({
  accessToken:
    "pk.eyJ1IjoibWF5b2ppY2giLCJhIjoiY2pla3Q3MzVvMWRoYTJybnVyMndxM2hmdCJ9.nWZlYcpKaMqz6m7xTsnJGA"
});


const About = () => {
  return (
    <div>
  <div className="Aboutimg">
  <div className="Service-title ">About Us</div>
  </div>
<div className="container-fluid">
 <div className="row m-auto justify-content-evenly mt-5">
     <div className="col-md-5 col-10 ">
<p className="h6 lines" id="content_justify">Matthew’s Nationwide Moving (MNM) is an Annandale,
 Virginia-based company formed in 2012 by the LLC’s President, Matthew Neyland.
 Matthew formed the company and has grown it from one starving college graduate with
  muscles to a company with 20 seasoned moving contractors and staff. While the company has grown,
   Matthew remains highly involved in the day to day operations and can often be seen driving down
    the highway or helping his guys with a moving job.
<br/>
The company has two types of trucks for local and long-distance moves.
Our smaller truck is a standard 26-foot box truck with a lift gate,
thoroughly equipped for professional, full-service moves.
 (see photo gallery). Our larger truck is a 32 foot enclosed
 trailer towed by a Ford F450. (see photo gallery) This has 2200 cubic feet while the 26′
  truck has 1800 cubic feet. MNM has been to 48 states
   in the last year and a half and has successfully
   pleased over 1500 local and long-distance move customers.
    Our company’s goal is to provide exceptional service at affordable prices.
    Matthew’s Nationwide Moving is committed to ensuring an extremely reasonable price for the quality of service provided.
     MNM believes that no other moving company can compare at the end of the day.
      Other moving companies may seem to have a better deal for almost the same work,
       but they sometimes have hidden costs,
        or they do not provide the same services such as wrapping, packing or assembly/disassembly of furniture.
<br/>
Our move may cost an extra $20/hour, but the customer’s
peace of mind and the worry-free move is worth that extra little amount.
 Matthew’s does everything to ensure all moves go as smoothly as possible.
 Here are a few other reasons to choose MNM. All furniture is wrapped BEFORE it leaves your house.
  This not only protects your furniture, it protects your walls and floors, it keeps dresser drawers shut,
  and it also protects the furniture from rain.
  MNM offers guaranteed pickup and delivery dates for long distance moves. MNM offers dedicated moves,
   meaning only one customer’s belongings will be in the truck at a time.
   This is an option that some customers feel is important for peace of mind.
   MNM also offers flat rate, long-distance moves. This means the price we quote is the price you pay.
   It will not change based on weight or any other circumstance unless the customer decides to add additional services.</p>

    </div>
{/* thsis is imgs */}
<div className="col-md-5 col-10 ">

<img className="img-fluid" src="https://www.matthewsmovingcompany.com/wp-content/uploads/2020/11/img-about1.jpg"/>
<img className="img-fluid  mt-3" src="https://www.matthewsmovingcompany.com/wp-content/uploads/2020/11/img-about2.jpg"/>

<img className="img-fluid  mt-3" src="https://www.matthewsmovingcompany.com/wp-content/uploads/2020/11/img-about3.jpg"/>
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
 
   

   
</div>



</div>


  )
}

export default About