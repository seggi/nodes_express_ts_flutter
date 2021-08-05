import { useState } from "react";

import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPeopleArrows, faListAlt } from '@fortawesome/free-solid-svg-icons'
import RepportListTable from "./repporttbl";



function MangeRepport() {
        const [openPopupReg, setOpenPopupReg] = useState(false);

       return (
        <>
            <div className="third-item_box__column">  
                    
                    <div className="card-listtile-box__row">
                        <div className="card-tile">
                            <div className="card-tile_title">
                                <span>Traffics</span>
                            </div>
                            <div className="card-tile_item">
                                <span>24</span>
                            </div>
                        </div>

                    </div>

                    <div className="graph-box tbl-content">
                       <RepportListTable />
                    </div>
                </div>

               
        </>
       )
    }

export default MangeRepport;