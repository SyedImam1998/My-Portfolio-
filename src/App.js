import './App.css';
import './mediaq.css';
import Imam from './images/imam.png';
import Oat from './images/oat.png';
import Boss from './images/boss.png';
import Eth from './images/eth auctions.png';
import ImamPort from './images/imamport.png';
import Laptop from './images/laptop.jpg';
import Discord from './images/discord-round-color-icon.svg'
import Facebook from './images/facebook-round-color-icon.svg'
import Gmail from './images/gmail.png';
import Twitter from './images/twitter-color-icon.svg';
import Close from './images/icons8-close-30.png';
import {motion} from 'framer-motion';
import {useInView} from 'react-intersection-observer';
import { useEffect } from 'react';
import { useAnimation } from 'framer-motion';
import {Projects,blogs} from './dataStore';
import ProjectC from './components/Projects'; 
import Blogs from './components/Blogs';


import React, {useState } from 'react'

export const container={
  hidden:{opacity:0},
  visible:{
    opacity:1,
    transition:{
      delayChildren:0,
      staggerChildren:0.2,
      // staggerChildren: 0.5
    }

  }
};

export const items={
  hidden:{
    y:100, 
    opacity:0
  },
  visible:{
    y:0,
    opacity:1,
    transition:{
      type:'spring',
    }
  },
  
}



 const App =()=> {
 
  const [ref,inView]=useInView({
    threshold:0.19,
    // triggerOnce:true,

  });

  const [ref1,inView1]=useInView({
    threshold:0.1,
    // triggerOnce:true
  });


 
  
  const animation=useAnimation();
  const animation2=useAnimation();
  const animation3=useAnimation();
  const animation4=useAnimation();


  const [open,setopen]=useState(false);

  useEffect(()=>{
    if(inView){
      animation.start("visible")
      animation2.start("visible")
    }
    if(!inView){
      animation.start("hidden")
      animation2.start("hidden")
    }
    if(inView1){
      animation3.start("visible")
      animation4.start("visible")
    }
    if(!inView1){
      animation3.start("hidden")
      animation4.start("hidden")
    }

    console.log("card view",inView,inView1)
  },[inView,inView1,animation,animation2,animation3,animation4]);



    return (
      <div className='container-fluid background'>
        <head>
          <title>Imam Dev</title>
      <link rel="shortcut icon" href="./images/symbol.png" />


        </head>
        <div className=' container-fluid firstpage '>
          <div className="container-fluid logomobile d-block d-sm-none">

            <div className="brandlogo">
            <label className='blue'>I</label><label >M</label><label className='blue'>AM DEV</label>
            </div>
          </div>
        <nav className='navbar d-none d-lg-flex d-md-flex'>
          <a className='navbar-brand' href="/">
          <label className='blue'>I</label><label >M</label><label className='blue'>AM DEV</label>
          </a>



          <div className='connectParentDiv'>
          
          <div className={open?"socialSites showSites":"socialSites"}>
              <a href='https://discordapp.com/users/Syed Imam#9267' target="_blank" rel="noopener noreferrer"><img  className="closeImage"  src={Discord} alt="discordpic" /></a>
              <a target="_blank" rel="noopener noreferrer" href='https://www.facebook.com/syed.imam.739'><img   className="closeImage" src={Facebook} alt="facebookpic" /></a>
              <a target="_blank" rel="noopener noreferrer" href='https://twitter.com/syedimam1998'><img   className="closeImage" src={Twitter} alt="twiiterpic" /></a>
              <a target="_blank" rel="noopener noreferrer" href="https://mail.google.com/mail/?view=cm&fs=1&to=syedimam1998@gmail.com"><img className="closeImage" src={Gmail} alt="gmailpic" /></a>
              
            </div>
  
         
  
  
          <div className={open?"connectBtnclose connectRed":"connectBtnclose"}>
            {open===false?<label onClick={()=>{
              // setopen(!open)
              // this.setState({
              //   open:!this.state.open
              // })
              setopen(!open)
            
          }} >Connect</label>:<img onClick={()=>{
          //  this.setState({
          //   open:!this.state.open,
          //  })
           setopen(!open)
          
          }} src={Close} width={20} height={20} className="closeImagex" alt="closetag"/>}
  
  
          </div>
  
          </div>






        </nav>
        <div className='connectParentDiv d-flex d-sm-none'>
          
          <div className={open?"socialSites showSites":"socialSites"}>
              <a href='https://discordapp.com/users/Syed Imam#9267' target="_blank" rel="noopener noreferrer"><img width={35} className="closeImage"  src={Discord} alt="discordpic" /></a>
              <a target="_blank" rel="noopener noreferrer" href='https://www.facebook.com/syed.imam.739'><img  width={35} className="closeImage" src={Facebook} alt="facebookpic" /></a>
              <a target="_blank" rel="noopener noreferrer" href='https://twitter.com/syedimam1998'><img  width={35} className="closeImage" src={Twitter} alt="twiiterpic" /></a>
              <a target="_blank" rel="noopener noreferrer" href="https://mail.google.com/mail/?view=cm&fs=1&to=syedimam1998@gmail.com"><img  width={40}className="closeImage" src={Gmail} alt="gmailpic" /></a>
              
            </div>
          <div className={open?"connectBtnclose connectRed":"connectBtnclose"}>
            {open===false?<label onClick={()=>{
              setopen(!open)
    // this.setState({
    //             open:!this.state.open
    //           })
            
          }} >Connect</label>:<img onClick={()=>{
          //  this.setState({
          //   open:!this.state.open,
          //  })
          setopen(!open)

          
          }} src={Close}  className="closeImage" alt="closetag"/>}
  
  
          </div>
  
          </div>
      
        <div className='container-fluid secondPhase'>
          <div className='row '>
            <div className="col-sm-6 textarea  secondPhase-margin1 order-2 order-sm-1  order-md-1">
             <div className='col-sm-12 w-100'><h1> Hi, I'm Imam</h1></div> 
              <div className='col-sm-12 w-100'>

              <p className='des'>I'm a Front-End Engineer who enjoys designing and building websites. I also have an interest in smart contract development. I am interested in working on products involving blockchain, UI/UX, and front-end development.</p>
              </div>
            </div>
            <div className="col-sm-6 secondPhase-margin img-area d-flex justify-content-center align-item-center  order-1 order-sm-2">
              <div className='imagediv ml-5'>
                <div className="imageCircle">

                <img src={Imam} className="imagesize" alt="imam0image"></img>
                </div>

              </div>
            </div>
          </div>


        </div>

        </div>
        <div className="glowingball d-none d-lg-block"></div>


        <div className='container-fluid secondpage'>
          <div className='container-fluid'>
            <div className='row'>
              <div className='col-sm-12 text-center text-sm-end'>
                <h2>PROJECTS</h2>
              </div>
            </div>
            </div>
            <div className='container-fluid'>
              <motion.div className='row gx-5 gy-5' ref={ref} variants={container} initial="hidden" animate={animation}>

              {Projects.map((item)=>{
                return(
                  <motion.div key={item} variants={items}  className='col-sm-12 col-md-6 col-lg-6 col-xl-4'>

                    <ProjectC  title={item.title} image={item.image} link={item.link} description={item.description}></ProjectC>
                  </motion.div>
                )
              })}
                 <motion.div  variants={items}  className='col-sm-12 col-md-6 col-lg-6 col-xl-4'>

                <div  className='card discover-card' >
                <div className="card-body discover">
                <div><a href="https://github.com/SyedImam1998" target="_blank" rel="noopener noreferrer" >Discover More</a></div>
                
                </div>
                </div>
                </motion.div>
              
             
              </motion.div>
            </div>
           
          

        </div>

        <div className='container-fluid thirdpage'>
          <div className='row'>
            <div className='col-sm-12 text-center text-sm-end my-5 my-sm-0'>
              <h2>BLOGS</h2>

            </div>
          </div>
          <div className='container-fluid'>
            <motion.div className='row gx-5 gy-5' ref={ref1} variants={container} animate={animation3} initial="hidden">

             {
              blogs.map((item)=>{
                return(
                  <motion.div  key={item} className='col-sm-12 col-md-6 col-lg-6 col-xl-4' variants={items}>
                    <Blogs title={item.title} description={item.description} link={item.link} image={Laptop}></Blogs>
                  </motion.div>
                )
              })
             }
             <motion.div  variants={items}  className='col-sm-12 col-md-6 col-lg-6 col-xl-4'>

              <div  className='card discover-card' >
              <div className="card-body discover">
                <div><a href="https://syedimam.hashnode.dev/" target="_blank" rel="noopener noreferrer">Discover More</a></div>
              </div>
              </div>
              </motion.div>

             
             
             
            </motion.div>
          </div>

        </div>
        
        <div className="container-fluid fouthpage">

          <div className="row">

            <div className='col-sm-12'>
            <div className="imagefooter">
              <img src={Imam}/>
            </div>
            </div>



          <div className='col-sm-12'>
            <div className='footerDetails'>
              <p>Content Creator, UI/UX Designer and Full Stack Developer trying to help people reach their goals and earn mutual respect and benefits.</p>
            </div>
          </div>


          <div className='col-sm-12'>

            <div className='footerSocials'>
              <div>

              <a href='https://discordapp.com/users/Syed Imam#9267' target="_blank" rel="noopener noreferrer"><img  className="closeImage"  src={Discord} alt="discordpic" /></a>
              </div>

              <div>

              <a target="_blank" rel="noopener noreferrer" href='https://www.facebook.com/syed.imam.739'><img  className="closeImage" src={Facebook} alt="facebookpic" /></a>
              </div>

              <div>


              <a target="_blank" rel="noopener noreferrer" href='https://twitter.com/syedimam1998'><img   className="closeImage" src={Twitter} alt="twiiterpic" /></a>
              </div>
              <div>

              <a target="_blank" rel="noopener noreferrer" href="https://mail.google.com/mail/?view=cm&fs=1&to=syedimam1998@gmail.com"><img  className="closeImage" src={Gmail} alt="gmailpic" /></a>
              </div>
              
              

            </div>
          </div>

          </div>


        </div>
        

      </div>
    )
  
}
export default App;
