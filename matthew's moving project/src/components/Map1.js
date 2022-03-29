import React from 'react'
import { ReactMapboxGl} from "react-mapbox-gl";

const Map = ReactMapboxGl({
    accessToken:
      "pk.eyJ1IjoibWF5b2ppY2giLCJhIjoiY2pla3Q3MzVvMWRoYTJybnVyMndxM2hmdCJ9.nWZlYcpKaMqz6m7xTsnJGA"
  });
const Map1 = () => {
  return (
    <div>
           <div  className="mt-5" id="map">
   
   <a href="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30449.88443781667!2d78.37413606402978!3d17.448436284677626!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9158f201b205%3A0x11bbe7be7792411b!2sMadhapur%2C%20Telangana!5e0!3m2!1sen!2sin!4v1647948572237!5m2!1sen!2sin">
         {" "}
    
       </a> 
       <Map
         style="mapbox://styles/mapbox/streets-v8"
         zoom={[10]}
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
  )
}

export default Map1