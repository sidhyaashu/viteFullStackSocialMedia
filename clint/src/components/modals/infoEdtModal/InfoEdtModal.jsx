import { useRef, useState } from 'react'
import './InfoEdtModal.scss'
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';
import ClearIcon from '@mui/icons-material/Clear';
import { IconButton } from '@mui/material';

const InfoEdtModal = ({setedtModal,edtModal}) => {
    const profileURF = useRef()
    const coverURF = useRef()
    const[profileImage,setProfileImage]=useState(null)
    const[coverImage,setCoverImage]=useState(null)
    

    const onProfileImageChange=(e)=>{
        if(e.target.files && e.target.files[0]){
            let img = e.target.files[0]
            setProfileImage({
                profileImage:URL.createObjectURL(img)
            })
        }
    }

    const onCoverImageChange=(e)=>{
        if(e.target.files && e.target.files[0]){
            let img = e.target.files[0]
            setCoverImage({
                coverImage:URL.createObjectURL(img)
            })
        }
    }

  return (
    <div className='infoedtmodal'>
        <div className="clBtnBox" onClick={()=>setedtModal(!edtModal)} >
        <IconButton>
        <ClearIcon/>
        </IconButton>
        </div>

        <h3>Edit Your Information</h3>
        <div className="edtMInfo">
            <div><span>Name : </span></div>
            <input type="text" placeholder='Enter your name' />
        </div>

        <div className="edtMInfo">
            <div><span>Bio : </span></div>
            <input type="text" placeholder='Enter your Bio' />
        </div>

        <div className="edtMInfo">
            <div><span>Status : </span></div>
            <input type="text" placeholder='Relation Status' />
        </div>

        <div className="edtMInfo">
            <div><span>Lives In : </span></div>
            <input type="text" placeholder='Enter your location' />
        </div>

        <div className="edtMInfo">
            <div><span>works : </span></div>
            <input type="text" placeholder='Enter your profession' />
        </div>

        <div className="coverAndprofile">
            <div onClick={()=>profileURF.current.click()} ><div className='copBox'><FileUploadOutlinedIcon/></div><span>Choose Profile Photo</span></div>
            <div onClick={()=>coverURF.current.click()} ><div className='copBox'><FileUploadOutlinedIcon/></div><span>Choose Cover Photo</span></div>
            <input type="file" name="Profile" style={{display:"none"}} onChange={onProfileImageChange} ref={profileURF}  />
            <input type="file" name="Cover" style={{display:"none"}} onChange={onCoverImageChange} ref={coverURF} />
        </div>
            <div className='preViewContainer'>
                    <div className="previewProfileImage">
                     {profileImage &&(
                        <div className='profileImageSEC'>
                            <img src={profileImage.profileImage} alt="" />
                            <div><IconButton><ClearIcon onClick={()=>setProfileImage(null)} style={{color:"black"}} /></IconButton></div>
                        </div>
                     )}
                    </div>
                    <div className="previewCoverImage">
                     {coverImage &&(
                        <div className='coverImageSEC'>
                            <img src={coverImage.coverImage} alt="" />
                            <div><IconButton><ClearIcon onClick={()=>setCoverImage(null)} style={{color:"black"}} /></IconButton></div>
                        </div>
                     )}
                    </div>

            </div>

        <div className="conformBtn">
            <div onClick={()=>setedtModal(!edtModal)} >Cancle</div>
            <div>Update</div>
        </div>

        

    </div>
  )
}

export default InfoEdtModal
