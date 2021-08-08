
import ReactTable from "react-table-6";
import 'react-table-6/react-table.css';


function TradersListTable() {
    const columns = [
        {  
            Header: 'Trader Id',  
            accessor: 'id',
            sortable: false,
            filterable: false,
            style: {
                textAlign: "center",
            },
            width: 100,
            maxWidth: 100,
            minWidth: 100
        },

        {  
            Header: 'Full Name',  
            accessor: 'fullname',
            sortable: false,
            filterable: false,
        },
        {
            Header: "Business Category",
            accessor: "roles",
            sortable: false,
            filterable: false,
            style: {
                textAlign: "center"
            },
        },
        {
            Header: "Reg. Date",
            accessor: "faculty",
            sortable: false,
            filterable: false,
            style: {
                textAlign: "center"
            },
        },

        {
            Header: "Updated At",
            accessor: "voteresult",
            sortable: false,
            filterable: false,
            style: {
                textAlign: "center"
            },
        },

        {
            Header: "Actions",
            accessor: "voteresult",
            sortable: false,
            filterable: false,
            style: {
                textAlign: "center"
            },
        },

        
    ]  
    
    return (
        <>
           <div className="tbl_box">
                <h1 className="mainboxTitle">Traders list</h1>
                <div className="tables">
                    <ReactTable 
                        // data={getData} 
                        columns={columns}
                        noDataText={"Please Wait..."}
                        filterable
                        defaultPageSize={8}
                        pageSizeOptions={[2, 4, 6]}
                        />
                </div>
           </div>
        </>
    )
}

export default TradersListTable;