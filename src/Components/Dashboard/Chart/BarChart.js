import React from 'react';
import './BarChart.css';
import { Bar, Doughnut } from "react-chartjs-2"


const BarChart = () => {
    return (
        <div className="bar_chart_item">
            <div className="bar_chart">
                <Bar
                    data={{
                        labels: ['Jun', 'Feb', 'March', 'April', 'May', 'June', 'July'],
                        datasets: [
                            {
                                label: 'Total Earn ($)',
                                data: ['1000', '2000', '1800', '2500', '2100', '3100', '1200'],
                                backgroundColor: [
                                    'rgba(255, 99, 132, 0.8)',
                                    'rgba(54, 162, 235, 0.8)',
                                    'rgba(255, 206, 86, 0.8)',
                                    'rgba(75, 192, 192, 0.8)',
                                    'rgba(153, 102, 255, 0.8)',
                                    'rgba(255, 159, 64, 0.8)',
                                    'rgba(122, 99, 64, 0.8)',
                                ],
                            }
                        ]
                    }}
                    height={300}
                    width={200}
                    options={{
                        maintainAspectRatio: false,
                        scales: {
                            yAxes: [
                                {
                                    ticks: {
                                        beginAtZero: true,
                                        responsive: true,
                                    }
                                }
                            ]
                        }
                    }}
                />
            </div>
            <div className="pie-chart">
                <Doughnut
                    data={{
                        labels: [
                            'Red',
                            'Blue',
                            'Yellow'
                          ],
                          datasets: [{
                            label: 'My First Dataset',
                            data: [200, 50, 100],
                            backgroundColor: [
                              'rgb(255, 99, 132)',
                              'rgb(54, 162, 235)',
                              'rgb(255, 205, 86)'
                            ],
                            hoverOffset: 4
                          }]
                    }}
                    height={300}
                    width={200}
                    options={{
                        maintainAspectRatio: false,
                        scales: {
                            yAxes: [
                                {
                                    ticks: {
                                        beginAtZero: true,
                                        responsive: true
                                    }
                                }
                            ]
                        }
                    }}
                />
            </div>
        </div>
    );
};

export default BarChart;