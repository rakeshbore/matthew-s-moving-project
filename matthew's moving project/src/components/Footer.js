import React from 'react'

const Footer = () => {
  return (
      <div>
         <div className='container-fluid'>

           
   
<div id="footerdiv" className='row justify-content-evenly  pt-5'>
            <div className='col-md-2  text-white  mb-4' >
              <h4 className='text-uppercase fw-bold mb-4'>
               COMPANY NAME
              </h4>
             <h2 >OFFICE HOURS</h2>
             <h6>• Mon-Fri: 8am to 6pm</h6>
             <h6>• Sat-Sun: 9am to 1pm</h6>
   
             <h6>CALL TODAY:</h6>
             <h3>123-456-7890</h3>
            </div>

            <div className='col-md-2  mb-4'>
            <img src="https://www.matthewsmovingcompany.com/wp-content/uploads/2020/11/logo-footer3.png"/>
            </div>

            <div className='col-md-2  mb-4'>
             <img src="https://www.matthewsmovingcompany.com/wp-content/uploads/2020/12/Angie-2019.png" />
            </div>

            <div className='col-md-2  text-white '>
              <h5 className='text-uppercase fw-bold mb-4 text-white'>CERTIFICATIONS</h5>
             <h6 >• USDOT Certified: 2375124</h6>
            <h6>• Motor Carrier Certified: 819110</h6>
            <br/>
            <br/>
              <h3>
                + 01 264 567 88
              </h3>
              <h3>
               + 01 264 567 89
              </h3>
            </div>
          </div>
        </div>
        <div className='text-center  pt-3 pb-3' style={{ backgroundColor: 'black'}}>
       <h4 className='text-white'>© 2021 Copyright:  <a className='text-reset fw-bold' href='https://mdbootstrap.com/'></a>  Perfex Technologies</h4>
     
       </div>


           </div>   
     
  
  )
}

export default Footer