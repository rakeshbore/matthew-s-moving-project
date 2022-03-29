import React from 'react'
import { FaUserFriends } from "react-icons/fa";
import {FaInfo} from "react-icons/fa";
import {FaTools} from "react-icons/fa";
import CountUp from 'react-countup';
import {Link} from "react-router-dom";
import 'animate.css';
const Home = () => {
  return (
      <div> 
    <div className='bg-img'>
         {/* <img className='bg-img img-fluid' src='https://img.freepik.com/free-photo/indoor-shot-attractive-woman-playing-with-her-daughter-making-ship-with-flag-during-relocation-playing-sailor-resting-while-unpacking-personal-pile-giving-five-each-other_176532-17723.jpg?size=626&ext=jpg&ga=GA1.2.1246068639.1647944735'></img>  */}
        <div className='bg_color'>
        <h1 className='main_text'>WE ARE HERE HELP WITH ALL OF</h1>
     <h1 className='sub_text'> YOUR MOVING NEEDS</h1>
        </div>
        </div>
    <div className='container-fluid'>
        <div className='row'>
            <div className='col-md-7'>
                <div className='block1'>
               <h1 className='block1_heading'>TOP MOVING COMPANY</h1>
               <h1 className='block2_heading'>IN THE ANNANDALEVA AREA</h1>
               <hr></hr>
               <h4>WE ARE HERE TO HELP WITH ALL OF YOUR MOVING NEEDS</h4>
               <p id="content_justify">
        Matthew’s Nationwide Moving (MNM) is an Annandale, Virginia-based company 
        formed in 2012 by the LLC’s President, Matthew Neyland. Matthew formed 
        the company and has grown it from one starving college graduate with 
        muscles to a company with 20 seasoned moving contractors and staff.
        While the company has grown, Matthew remains highly involved in
        the day to day operations and can often be seen driving down
        the highway or helping his guys with a moving job.</p>
        <p id="content_justify">
        Whether it’s a cross country corporate relocation or a local in-state
        move, we have you covered.  We pride ourselves in customer satisfaction
        and it shows in our Google, Yelp and Thumbtack stellar reviews –
        just scroll further down the page to check out what our happy
        customers have to say about us!</p>
        <p id="content_justify">
        Matthew’s Nationwide Moving can help coordinate your move to-and-from
        anywhere in the country along with the areas in our own back yard 
        including Annandale, Alexandria, Arlington, Fairfax, McLean, Reston,
        Ashburn, Leesburg and Washington, DC areas.</p>
            </div>
            </div>
          
            <div className='col-md-5 ' id="form_hidden">
                <div className='form_heading'>
                <h1>GET A QUOTE</h1>
                <p>Complete the form to receive a quote</p>
                </div>
            <form class="row g-3">
 
  <div class="col-12">
   
    <input type="text" class="form-control" 
    placeholder="Name"/>
  </div>
  <div class="col-md-6">
    
    <input type="email" class="form-control" placeholder='Email' />
  </div>
  <div class="col-md-6">
   
    <input type="number" 
    class="form-control" placeholder='Phone'/>
  </div>
  <div class="col-md-4">
    
    <input type="text" class="form-control" placeholder='type of move'/>
  </div>
  <div class="col-md-4">
    
    <input type="text" 
    class="form-control" placeholder='Bedroom count'/>
  </div>
  <div class="col-md-4">
   
    <input type="text" 
    class="form-control" placeholder='Move Date'/>
  </div>
  <div class="col-md-6">
    
    <input type="text" class="form-control" placeholder="Moving FROM address"/>
  </div>
  <div class="col-md-6">
   
    <input type="text" class="form-control" placeholder='Moving To Address'/>
  </div>
  <div class="col-md-6">
   
    <input type="text" class="form-control"placeholder='Need Help Packaging' />
  </div>
  <div class="col-md-6">
    
    <input type="text" class="form-control" placeholder='Why did you here about us' />
  </div>
  <div class="col-md-12">
    
    <textarea type="text" rows="3" cols="3" class="form-control" placeholder='Additional Details' />
  </div>
  {/* <div class="col-md-12">
    
    <input type="text" class="form-control"  />
  </div> */}
  

  <div class="col-12">
    <button type="submit" class="btn btn-primary w-100">Submit</button>
  </div>
</form>
            </div>


        </div>
    </div>
    <div className='container'>
        <div className='row justify-content-evenly'>
            <div className='our_services_header'>
            <h1 className='our_services'>OUR SERVICES</h1>
            </div>
            <div className='col-md-6 col-12 '>
              <div className='background_overlay_effect'>
              <img  className="img_width img-fluid "src="https://images.pexels.com/photos/4440771/pexels-photo-4440771.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"/>
             </div>
             <div className='overlay_effect'></div>
             <div className='national_wide_heading'>
            <h4 className='nationalwide_moving'>NATIONWIDE MOVING COMPANY</h4>
           <button className='learnmore mb-2' type="button">LEARN MORE</button>
           </div>
            </div>
            <div className='col-md-6 col-12'>
             <img className=" img_width img-fluid" src="https://images.pexels.com/photos/5025636/pexels-photo-5025636.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"/>
             <div className='national_wide_heading'>
            <h4 className='nationalwide_moving'>LOCAL MOVING COMPANY</h4>
           <button className='learnmore' type="button">LEARN MORE</button>
           </div>
            </div>
        </div>
        <div className='row justify-content-evenly mt-5'>
            <div className='col-md-3 mb-4 col-10'>
                <div className='packaging_services_center'>
                <img className='packing_img img-fluid' src="https://www.matthewsmovingcompany.com/wp-content/uploads/2020/11/img-service3.jpg"/>
                <h5 className='mt-3 text_bold'>PACKING SERVICES</h5>
                <button className='learnmore' type="button">LEARN MORE</button>
                </div>
            </div>
            <div className='col-md-3 mb-4 col-10'>
                <div className='packaging_services_center'>
                <img className='packing_img img-fluid' src="https://www.matthewsmovingcompany.com/wp-content/uploads/2020/11/img-service4.jpg"/>
                <h5 className='mt-3 text_bold'>AUTO MOVING SERVICES</h5>
                <button className='learnmore' type="button">LEARN MORE</button>
                </div>
            </div>
            <div className='col-md-3 mb-4 col-10'>
                <div className='packaging_services_center'>
                <img className='packing_img img-fluid' src="https://www.matthewsmovingcompany.com/wp-content/uploads/2020/11/img-service5.jpg"/>
                <h5 className='mt-3 text_bold'>CORPORATE RELOCATION </h5>
                <button className='learnmore' type="button">LEARN MORE</button>
                </div>
            </div>
            <div className='col-md-3 col-10'>
                <div className='packaging_services_center'>
                <img className='packing_img img-fluid' src="https://www.matthewsmovingcompany.com/wp-content/uploads/2020/11/img-service6.jpg"/>
                <h5 className='mt-3 text_bold'>OFFICE MOVING SERVICES</h5>
                <button className='learnmore' type="button">LEARN MORE</button>
                </div>
            </div>
        </div>
    
    <div className="heading ">
        <h2 className='col-10 m-auto'>WE PRIDE OURSELVES IN CUSTOMER SATISFACTION</h2>
    </div>
    <div className='row  justify-content-evenly'>
        <div className='col-md-4 col-10 icon_center animation_onscroll'>
            <FaUserFriends className='icons profile_icon'/>
            <p className='mt-3' id="content_justify">Family owned and operated, 
                we hold ourselves to the highest 
                quality and customer
                 satisfaction.excellence.</p>
                 

        </div>
        <div className='col-md-4 col-10 icon_center animation_onscroll'>
            <FaTools className='icons profile_icon'/>
            <p className='mt-3' id="content_justify">We offer local and long 
            distance moving, packing services, piano &
             safe moving, vehicle transportation.</p>
        </div>
        <div className='col-md-4 col-10 icon_center animation_onscroll'>
            <FaInfo className='icons profile_icon'/>
            <p className='mt-3' id="content_justify">Matthew’s Nationwide 
            Moving wants to do everything possible to
             make your move a hassle-free experience.</p>
        </div>
    </div>
    </div>
    <div className='container_block'>
 
                <h3 className='col-md-12 col-10 m-auto text-center pt-5'>WE ARE HIGHLY REVIEWED ON THUMBTACK, YELP, & GOOGLE</h3>
   
    <div className='container'>
        <div className='row mt-5'>
           
            <div className='row justify-content-evenly mt-5'>
                <div className='col-md-4 col-10'>
                    <img className='w-100' src="https://www.matthewsmovingcompany.com/wp-content/uploads/2020/11/Thumb-3.png"/>
                     <h5 className='click_for_reviews'><a href="https://www.thumbtack.com/va/annandale/movers/matthews-nationwide-moving/service/127857995627717803?project_pk=406155168544858116" >Click for Reviews</a></h5>
                </div>
                <div className='col-md-4  col-10'>
                    <img className='w-100' src="https://www.matthewsmovingcompany.com/wp-content/uploads/2020/11/Google-3.png"/>
                    <h5 className='click_for_reviews'><a href="https://www.google.com/search?gs_ssp=eJzj4tTP1TcwMU02T1JgNGB0YPBiS8_PT89JBQBASQXT&q=google&rlz=1C1RXQR_enIN982IN982&oq=go&aqs=chrome.3.69i59l2j69i57j46i67i131i199i433i465j0i67i131i433j69i60l2j69i61.2864j0j7&sourceid=chrome&ie=UTF-8" >Click for Reviews</a></h5>
                </div>
                <div className='col-md-4  col-10'>
                    <img className='w-100' src="https://www.matthewsmovingcompany.com/wp-content/uploads/2020/11/Yelp-3.png"/>
                   <h5 className='click_for_reviews'><a href="https://www.yelp.com/biz/matthews-nationwide-moving-annandale-3" >Click for Reviews</a></h5>
                </div>
            </div>
            <div className='col-md-4 m-auto horizental_bar'>
            <hr></hr>
            </div>
           
        </div>

    </div>
    </div>
    <div className='container mt-5'>
    <div className="heading">
    <h3>MATTHEW’S NATIONWIDE MOVING BY THE NUMBERS</h3>
    </div>
    <div className='row justify-content-evenly mt-5'>
        <div className='col-md-4 col-10 mb-4'>
            <div className='count_border'>
            <CountUp end={1854}
            duration={5} style={{fontSize:"60px",fontWeight:"bold"}}/>
            <h2 style={{fontWeight:200}}>Local Moves</h2>
            </div>
        </div>
        <div className='col-md-4 mb-4 col-10'>
            <div className='count_border'>
            <CountUp end={32641}
            duration={5} style={{fontSize:"60px",fontWeight:"bold"}}/>
            <h2 style={{fontWeight:200}}>Total Miles Moved</h2>
            </div>
        </div>
        <div className='col-md-4 col-10'>
            <div className='count_border'>
            <CountUp end={1386}
            duration={5} style={{fontSize:"60px",fontWeight:"bold"}}/>
            <h2 style={{fontWeight:200}}>Long Distance Moves</h2>
            </div>
        </div>
    </div>
    </div>
    </div>
  )
}

export default Home