import React from "react";

import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPeopleArrows, faListAlt } from '@fortawesome/free-solid-svg-icons'
import TradersListTable from "./Traffics/traderstbl";

function TrafficList() {
       return (
        <>
            <div className="third-item_box__column">  
                    <div className="top-btn_items">
                        <div className="btn-group">
                            <Link to='/'>
                                <span>
                                    <FontAwesomeIcon icon={faPeopleArrows}/> New Trader
                                </span>
                                
                            </Link>
                        </div>
                        <div className="btn-group">
                            
                            <Link to='/'>
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
        </>
       )
    }

export default TrafficList;