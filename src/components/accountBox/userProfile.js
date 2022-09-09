import React from 'react'
import '../../pages/single/single.scss'
import { Button } from '@material-ui/core';
 import image from '../../assets/images/img1.jpg'

const  userProfile=() =>{

  return (
    <div className='outer-div' >

<div  className='profile'> Create User Profile</div>


<div className="single"> 
<div className="singleContainer"> 

<div className="top">
   <div className="left">
            <Button className="editButton">Edit</Button>
            <div className='center'>
            <div className="item ">
              <img

// https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260
                src={image}
                alt=""
                className="itemImg"
              />
              <div className="details">
                <h1 className="itemTitle">John Doe</h1>
                <div className="detailItem">
                  <span className="itemKey">Email:</span>
                  <span className="itemValue">jd@gmail.com</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Phone:</span>
                  <span className="itemValue">+1 2345 67 89</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Address:</span>
                  <span className="itemValue">Sector H-12 Islamabad, Pakistan.
                  </span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Project:</span>
                  <span className="itemValue">HRM</span>
                </div>
              </div>
                <hr/>


              </div>
            </div>

          </div>
              </div>




<div className='single'>
<div className='singleContainer'>

<div className='top'>
    
<div className='left'>
<Button className="editButton">Edit</Button>

<div className='profile' style={{borderBottom:'4px solid Blue', padding:4, margin:4,   fontFamily: 'Cambria, Cochin, Georgia, Times, Times New Roman'}}> <b> Personal Info </b></div>

<div class="grid-container">


  <div class="grid-item ">
     <span className="itemKey"> Father's Name: </span> 
    </div>
  <div class="grid-item">ABC</div>
  
  <div class="grid-item">Desired Position:</div>
  <div class="grid-item">Manager</div>
 
  <div class="grid-item">Experience</div>  
  <div class="grid-item">9 years</div>
  <div class="grid-item">Nationality:</div>
  <div class="grid-item">Pakistan</div>

  <div class="grid-item">CNIC/NIOP #:</div>
  <div class="grid-item">33123-1234567-7</div>  


  <div class="grid-item">Gender:</div>
  <div class="grid-item">Male</div>


  
  <div class="grid-item">Marital Status:</div>
  <div class="grid-item">Married</div>
 

  <div class="grid-item">Date of Birth</div>
  <div class="grid-item">19-09-1989</div>
 
  <div class="grid-item">Place of Birth</div>
  <div class="grid-item">Lahore, Punjab</div>
 
  <div class="grid-item">Country Of Birth</div>
  <div class="grid-item">Pakistan</div>
 
  <div class="grid-item">Domicile</div>
  <div class="grid-item">Lahore, Punjab</div>
 
  <div class="grid-item">Religion</div>
  <div class="grid-item">Islam</div>
 
  <div class="grid-item">Office#</div>
  <div class="grid-item">54000</div>
  

  <div class="grid-item">Expected Salary Per Month(PKR)</div>
  <div class="grid-item">150000</div>


  <div class="grid-item">When able to join</div>
  <div class="grid-item">Urgently</div>
  
  
  <div class="grid-item">Number of Children</div>
  <div class="grid-item">1</div>
  
  <div class="grid-item">Children's Age</div>
  <div class="grid-item">3</div>
  
  <div class="grid-item">Present Address</div>
  <div class="grid-item">491/1, M-3, Lake City, Riawind Lahore Pakistan </div>
  



{/* 
   <div class="grid-item">7</div>
  <div class="grid-item">8</div>
  <div class="grid-item">9</div>  
  <div class="grid-item">10</div>   */}
</div>


</div>
</div>
</div>
</div>






     </div>
 </div>
 </div> 
  );
}

export default userProfile
