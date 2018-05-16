import React, { Component} from "react";
import ReactTable from "react-table";
import "react-table/react-table.css";
import { Link } from "react-router-dom";



import "./main-page-css/main-page.css"

export default class MainPage extends Component {
    constructor(props) {
        super(props)
       
    }


    /// packing data for table look
    packingData = () => {
        const data = [];
        this.props.data.forEach(element => {
            const obj = {
                direction: <i class="fas fa-plane"></i>,
                height: element.altitude || "n/a",
                flightCode: <Link to={`/detailsPage/${element.flightId}`} >{element.flightId || "n/a"}</Link>
            }
            data.push(obj);
        });  
        return data;
    }
    

    render() {
        
        let packed = [];
        packed = this.packingData();
        return (
            <div className="table">
            <ReactTable 
                data={packed}
               
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
                
                // defaultPageSize={(packed) => packed.length}
                className="-striped -highlight"
                showPagination={false}
                // pageSizeOptions={this.props.data.length}
                pageSize={this.props.data.length}
            />
            </div>
        )
    }

}