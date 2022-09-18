import React, { useState } from 'react'
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import Slide from '@mui/material/Slide';
import { Button } from '@mui/material';
import dialog_vector1 from '../../assets/svg/dialog_vector1.svg'
import dialog_vector2 from '../../assets/svg/dialog_vector2.svg'
import Aos from 'aos';
import Lottie from 'react-lottie';
import { useEffect } from 'react';
import fin_anim from '../../animations/finance.json'

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function ProblemStmtCard({name, image, description, statements }) {
  const fin_animation = {
    loop: true,
    autoplay: true,
    animationData: fin_anim,
    rendererSettings: { preserveAspectRatio: "xMidYMid slice" },
  };
  useEffect(()=>{
    Aos.init({duration:1100})
  })

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div data-aos="fade-up" className='problemStmtCard'>
        <h2 className='ps__card_title'>{name}</h2>
        <Lottie 
            animationData={fin_anim}
            loop={true}
            autoPlay={true}
            options={fin_animation} 
          /> 
        <button onClick={handleClickOpen}>View Details</button>

        <Dialog
          style={{ padding: 0, borderRadius: 10}}
          fullWidth={true}
          maxWidth={"md"}
          PaperProps={{ sx: { width: "100%", borderRadius: 5, m: 2, minHeight: '70vh' } }}
          open={open}
          TransitionComponent={Transition}
          keepMounted
          onClose={handleClose}
          disableScrollLock
          aria-describedby="alert-dialog-slide-description"
        >
          <DialogContent
            style={{ padding: 0, borderRadius: 10 }}
          >
            <div className='psDialog'>
              <img src={dialog_vector1} alt="" className='dialog_vector1' />
              <img src={dialog_vector2} alt="" className='dialog_vector2' />
              <div className='psDialog__header'>
                <h2>{name}</h2>
              </div>
              <div className='psDialog__content'>
                <h4>Description</h4>
                <p>{description}</p>
                {statements.length===0 ?null:<h4>Statements</h4>}
                <ul>
                  {statements.map((st, id) => (
                    <li>{st}</li>
                  ))}
                </ul>
                
              </div>
              <Button style={{marginBottom:'2rem'}} variant="outlined" onClick={handleClose}>Close</Button>
            </div>
            
          </DialogContent>
      </Dialog>
    </div>
  )
}

export default ProblemStmtCard