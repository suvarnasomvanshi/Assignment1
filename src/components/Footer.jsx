import React from 'react';
import logo from "../../public/images/logo.png";
import XIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {
    const useCaseArr = ["UI design","UX design","Wireframing","Diagramming","Brainstorming","Online whiteboard","Team collaboration"]
    const exploreArr = [
        'Design',
        'Prototyping',
        'Development features',
        'Design systems',
        'Collaboration features',
        'Board',
        'Design process',
        'Oration',
        'FigJam'
      ];
      const resourceArray = [
        'Resources',
        'Blog',
        'Best practices',
        'Colors',
        'Color wheel',
        'Support',
        'Developers',
        'Resource library'
      ];
      
      const iconStyle = {width:"24px",height:"24px",marginRight:"15px"}
      
    return (
    <div className='container px-1'>
      <div className='row py-5 mx-auto '>

        <div className='col-lg-3 col-sm-6 col-12 p-3 '>
            <img src={logo} alt="logo" style={{width:"23px",height:"35px"}}/>
            <div className='d-flex py-4 '>
                <XIcon style={iconStyle}/>
                <InstagramIcon style={iconStyle}/>
                <YouTubeIcon style={iconStyle}/>
                <LinkedInIcon style={iconStyle}/>
            </div>
        </div>

        <div className='col-lg-3 col-sm-6 col-12 p-2'>
            <h5>Use cases</h5>
           
           <ul style={{listStyleType:"none", paddingLeft:"0px"}}>
           {useCaseArr.map((ele,index)=>
             <li index={ele}>{ele}</li>
            )}
           </ul>
           
        </div>
        
        <div className='col-lg-3 col-sm-6 col-12 p-2'>
        <h5>Explore</h5>
           
           <ul style={{listStyleType:"none", paddingLeft:"0px"}}>
           {exploreArr.map((ele,index)=>
             <li index={ele}>{ele}</li>
            )}
           </ul>
        </div>

        <div className='col-lg-3 col-sm-6 col-12 p-2 '>
        <h5>Resources</h5>
           
           <ul style={{listStyleType:"none", paddingLeft:"0px"}}>
           {resourceArray.map((ele,index)=>
             <li index={ele}>{ele}</li>
            )}
           </ul>
        </div>
            
      </div>
    </div>
  )
}

export default Footer
