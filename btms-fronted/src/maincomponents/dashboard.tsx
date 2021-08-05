import React, { Component } from "react";

import Line from "./graph/line/Donuts";


class Dashboard extends Component {
    render() {
        return (
            <>
               <div className="third-item_box__column">   
                    <div className="card-listtile-box__row">
                        <div className="card-tile">
                            <div className="card-tile_title">
                                <span>Traffics</span>
                            </div>
                            <div className="card-tile_item">
                                <span>34</span>
                            </div>
                        </div>

                        <div className="card-tile">
                            <div className="card-tile_title">
                                <span>Registered</span>
                            </div>
                            <div className="card-tile_item">
                                <span>100</span>
                            </div>
                        </div>

                        <div className="card-tile">
                            <div className="card-tile_title">
                                <span>Business</span>
                            </div>
                            <div className="card-tile_item">
                                <span>10</span>
                            </div>
                        </div>
                    </div>

                    <div className="graph-box">
                        <Line />
                    </div>
                </div>
            </>
        )
    }
}


export default Dashboard;




