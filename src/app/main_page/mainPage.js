import React, { Component} from "react";
import ReactTable from "react-table";
import "react-table/react-table.css";
import { Link } from "react-router-dom";



import "./main-page-css/main-page.css"

export default class MainPage extends Component {
    constructor(props) {
        super(props)
       
    }

   


    data=[{
        direction: <i class="fas fa-plane"></i>,
        height: 12944,
        flightCode: 123434543,
    }, {
        direction: "west",
        height: 12944,
        flightCode: 123434543,
    },{
        direction: "west",
        height: 112944,
        flightCode: <Link to="/detailsPage">3234</Link>,
    },{
        direction: "west",
        height: 2944,
        flightCode: 123434543,
    }]

    

    render() {
        console.log(this.props.data);
        
        return (
            <div className="table">
            <ReactTable 
                data={this.props.data}
               
                defaultSorted={[{ // the sorting model for the table
                    id: 'height',
                    desc: true
                  }]}
                        columns= {[
                            {
                                Header: "Direction",
                                accessor: "direction"
                            }, {

                                Header: "Height",
                                accessor: "height"
                            }, {
                                Header: "FlightCode",
                                accessor: "flightCode"
                            }
                        ]}
                
                defaultPageSize={this.data.length}
                className="-striped -highlight"
                showPagination={false}
            />
            </div>
        )
    }

}