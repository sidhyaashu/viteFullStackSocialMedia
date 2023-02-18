import './Rightside.scss'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import SmsOutlinedIcon from '@mui/icons-material/SmsOutlined';
import TrendCard from './trendCard/TrendCard';
import { Modal } from '@mui/material';
import { useState } from 'react';
import PostSideShare from '../postsideshare/PostSideShare';
import ClearOutlinedIcon from '@mui/icons-material/ClearOutlined';


const Rightside = () => {
  const [shareModal , setShareModal] = useState(false)
  const openModal =()=>{
    setShareModal(!shareModal)
  }

  return (
    <>
    <Modal open={shareModal}>
      <div className='openModal'>
        <ClearOutlinedIcon className='om_crosBtn' onClick={()=>setShareModal(!shareModal)} />
        <PostSideShare/>
      </div>
    </Modal>

    <div className='rightside'>
      <div className="topbarIcons">
        <div><HomeOutlinedIcon/> </div>
        <div> <SettingsOutlinedIcon/></div>
        <div> <NotificationsNoneOutlinedIcon/></div>
        <div> <SmsOutlinedIcon/></div>
      </div>
      <TrendCard/>
      <div className="s_btn" onClick={openModal} >
        <span>Share</span>
      </div>
    </div>
    </>
    
  )
}

export default Rightside
