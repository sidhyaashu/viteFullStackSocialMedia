import './InfoCard.scss'
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';
import {Modal} from '@mui/material'
import { useState } from 'react';
import InfoEdtModal from '../modals/infoEdtModal/InfoEdtModal';

const InfoCard = () => {
  const [edtModal , setedtModal] = useState(false)
  const edtModalOpen = ()=>{
    setedtModal(!edtModal)
  }
  return (
    <>
    <Modal open={edtModal}>
      <div className="editModal">
        <InfoEdtModal setedtModal={setedtModal} edtModal={edtModal}/>
      </div>
    </Modal>
    <div className='infocard'>
      <div className="infohead">
        <h3>Your Info</h3>
        <div onClick={edtModalOpen}>
        <CreateOutlinedIcon/>
        </div>
      </div>

      <div className="info">
        <span><b>Status</b></span>
        <span>In a relationship</span>
      </div>

      <div className="info">
        <span><b>Lives in</b></span>
        <span>Kolkata</span>
      </div>

      <div className="info">
        <span><b>Works</b></span>
        <span>Infosis</span>
      </div>

      <div className="l_btn">
        <span>Logout</span>
      </div>

    </div>
    </>
  )
}

export default InfoCard
