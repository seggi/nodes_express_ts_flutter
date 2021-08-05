import { useState } from "react";

import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPeopleArrows, faListAlt } from '@fortawesome/free-solid-svg-icons'
import UserListTable from "./userstbl";


import PopupModal from "../modal/popupmodal";

const RegisterNewUser = () => {
   return(
       <>
        <div className='form-item__box'>
            <div className="form-items">
                <div className="form-items">
                    <span className="labeltitle">{'Full Name'}</span>
                    <input type="text" placeholder={'Full Name'} />
                </div>
                <div className="form-items">
                    <span className="labeltitle">{'Sex'}</span>
                    <input type="text" placeholder={'Sex'} />
                </div>
                <div className="form-items">
                    <span className="labeltitle">{'Function'}</span>
                    <input type="text" placeholder={'Function'} />
                </div>
                <div className="form-items">
                    <span className="labeltitle">{'Password'}</span>
                    <input type="text" placeholder={'Password'} />
                </div>
                <div className="btnLogin">
                    <Link to='/main_page/dashboard'>
                       Save
                    </Link>
                </div>
            </div>
        </div>
       </>
   )
}


const NewBusinessCategory = () => {
    return(
        <>
         <div className='form-item__box'>
             <div className="form-items">
                 <div className="form-items">
                     <span className="labeltitle">{'Business Name'}</span>
                     <input type="text" placeholder={'Business Name'} />
                 </div>
                 <div className="btnLogin">
                     <Link to='/main_page/dashboard'>
                        Save
                     </Link>
                 </div>
             </div>
         </div>
        </>
    )
}


function ManaUsers() {
        const [openPopupReg, setOpenPopupReg] = useState(false);

       return (
        <>
            <div className="third-item_box__column">  
                    <div className="top-btn_items">
                        <div className="btn-group">
                            <Link to="#" onClick={() => setOpenPopupReg(true)}>
                                <span>
                                    <FontAwesomeIcon icon={faPeopleArrows}/> New Trader
                                </span>
                            </Link>
                        </div>
            
                    </div>     
                    <div className="card-listtile-box__row">
                        <div className="card-tile">
                            <div className="card-tile_title">
                                <span>Users</span>
                            </div>
                            <div className="card-tile_item">
                                <span>24</span>
                            </div>
                        </div>

                    </div>

                    <div className="graph-box tbl-content">
                       <UserListTable />
                    </div>
                </div>

                <PopupModal
                    title = "New User"
                    openPopup = { openPopupReg }
                    setOpenPopup = { setOpenPopupReg }
                    >
                    <RegisterNewUser />
                </PopupModal>

                
        </>
       )
    }

export default ManaUsers;