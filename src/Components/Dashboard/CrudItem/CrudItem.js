import React from 'react';
import './CrudItem.css'

const CrudItem = () => {

    const CrudData = [
        { id: 1, name: "Abdul Karim", gmail: "abdularim@gmail.com", phone: "012336456453", location: "mirpur-12" },
        { id: 2, name: "Abdul Rahim", gmail: "abdularim@gmail.com", phone: "012336456453", location: "mirpur-12" },
        { id: 3, name: "Abdul Dalim", gmail: "abdularim@gmail.com", phone: "012336456453", location: "mirpur-12" },
        { id: 4, name: "Abdul Nasir", gmail: "abdularim@gmail.com", phone: "012336456453", location: "mirpur-12" },
        { id: 5, name: "Abdul Kamrul", gmail: "abdularim@gmail.com", phone: "012336456453", location: "mirpur-12" },
        { id: 6, name: "Abdul Asif", gmail: "abdularim@gmail.com", phone: "012336456453", location: "mirpur-12" },
        { id: 7, name: "Abdul Habib", gmail: "abdularim@gmail.com", phone: "012336456453", location: "mirpur-12" },
        { id: 8, name: "Abdul Habib", gmail: "abdularim@gmail.com", phone: "012336456453", location: "mirpur-12" },
        { id: 9, name: "Abdul Habib", gmail: "abdularim@gmail.com", phone: "012336456453", location: "mirpur-12" },
        { id: 10, name: "Abdul Habib", gmail: "abdularim@gmail.com", phone: "012336456453", location: "mirpur-12" }




    ]

    return (
        <div className="crud_content">
            <h3>Ordered Products</h3>
            <div className="crud_item">
                <div className="crud_content_container">
                    <table border>
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Name</th>
                                <th>Email Address</th>
                                <th>Phone</th>
                                <th>Location</th>
                                <th>Update</th>
                            </tr>
                        </thead>
                        {
                            CrudData.map(data =>

                                <tbody>
                                    <tr>
                                        <td>{data.id}</td>
                                        <td>{data.name}</td>
                                        <td>{data.gmail}</td>
                                        <td>{data.phone}</td>
                                        <td>{data.location}</td>
                                        <td><button>Update</button><button className="btn_btn">delete</button></td>
                                    </tr>

                                </tbody>
                            )
                        }
                    </table>
                </div>
            </div>
        </div>
    );
};

export default CrudItem;

