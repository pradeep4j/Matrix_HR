import React from 'react';
import CloseIcon from '@mui/icons-material/Close';
import {Dialog,DialogContent,DialogContentText,DialogTitle,Typography}from '@mui/material';
import '../hide.css';
import Slide from '@mui/material/Slide';  
const Transition = React.forwardRef(function Transition(props, ref) {
      return <Slide direction="up" ref={ref} {...props} />;
    });
  
const Modals = ({ openPopup, pageTitle, children,  setOpenPopup,modalWidth,modalHeight,from='' }) => {

return (
  <div className='custom-scrollbar'>
      <Dialog open={openPopup} onClose={setOpenPopup} aria-describedby="alert-dialog-slide-description"  TransitionComponent={Transition}
        keepMounted aria-labelledby="responsive-dialog-title" maxWidth={from === 'elibrary'? 'md' : ''}
        fullWidth={from === 'elibrary'? true : ''}>
            <DialogTitle className={from === "elibrary" ? 'fontselibrary' : 'fonts'} >
            <Typography variant="h6" component="div" style={{ flexGrow: 1 }}>
                        {pageTitle} 
            
            <span className={from === "elibrary" ? 'modal__close_elibrary' : 'modal__close'} onClick={(e) => setOpenPopup(false)}><CloseIcon /></span>
            </Typography>
            </DialogTitle>
            <DialogContent style={{width:modalWidth,height:'800px'}} >
                  {children}
            </DialogContent>
        </Dialog></div>
  );
}
export default Modals;