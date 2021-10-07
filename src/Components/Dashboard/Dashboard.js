import React from 'react';
import './Dashboard.css';
import BarChart from './Chart/BarChart';

const Dashboard = () => {
    return (
        <div className="container_fluid">
            <div className="dashboard_main_section">
                <div className="dashboard_item_content">
                    <div className="dashboard_info">
                        <i className="fas fa-eye"></i>
                        <span>1504</span>
                        <p>Daily Views</p>
                    </div>
                    <div className="dashboard_info info_one">
                        <i className="fas fa-shopping-cart"></i>
                        <span>120</span>
                        <p>Sales</p>
                    </div>
                    <div className="dashboard_info info_tow">
                        <i className="fas fa-comments"></i>
                        <span>280</span>
                        <p>Coments</p>
                    </div>
                    <div className="dashboard_info info_three">
                        <i className="fas fa-hand-holding-usd"></i>
                        <span>54,280$</span>
                        <p>Earnings</p>
                    </div>
                </div>
                <div className="chart_section">
                    <BarChart></BarChart>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;