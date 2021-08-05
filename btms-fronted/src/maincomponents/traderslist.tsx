import { useState } from "react";

import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPeopleArrows, faListAlt } from '@fortawesome/free-solid-svg-icons'
import TradersListTable from "./Traffics/traderstbl";


import PopupModal from "./modal/popupmodal";

const FomAddNewTrader = () => {
   return(
       <>
        <div className='form-item__box'>
            <div className="form-items">
                <div className="form-items">
                    <span className="labeltitle">{'Full Name'}</span>
                    <input type="text" placeholder={'Full Name'} />
                </div>
                <div className="form-items">
                    <span className="labeltitle">{'Contact'}</span>
                    <input type="text" placeholder={'Contact'} />
                </div>
                <div className="form-items">
                    <span className="labeltitle">{'Business'}</span>
                    <input type="text" placeholder={'Business'} />
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


function TrafficList() {
        const [openPopup, setOpenPopup] = useState(false);
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
                        <div className="btn-group">
                            
                            <Link to='#' onClick={() => setOpenPopup(true)}>
                                <span>
                                    <FontAwesomeIcon icon={faListAlt}/> Add Business
                                </span>
                            </Link>
                        </div>
                        
                    </div>     
                    <div className="card-listtile-box__row">
                        <div className="card-tile">
                            <div className="card-tile_title">
                                <span>Traders</span>
                            </div>
                            <div className="card-tile_item">
                                <span>64</span>
                            </div>
                        </div>

                        <div className="card-tile">
                            <div className="card-tile_title">
                                <span>Business</span>
                            </div>
                            <div className="card-tile_item">
                                <span>12</span>
                            </div>
                        </div>
                    </div>

                    <div className="graph-box tbl-content">
                       <TradersListTable />
                    </div>
                </div>

                <PopupModal
                    title = "New Trader"
                    openPopup = { openPopupReg }
                    setOpenPopup = { setOpenPopupReg }
                    >
                    <FomAddNewTrader />
                </PopupModal>

                <PopupModal
                    title = "Business Category"
                    openPopup = { openPopup }
                    setOpenPopup = { setOpenPopup }
                    >
                    <NewBusinessCategory />
                </PopupModal>
        </>
       )
    }

export default TrafficList;