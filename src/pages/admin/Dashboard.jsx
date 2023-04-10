import React from 'react'
import { Table } from 'react-bootstrap'

const Dashboard = () => {
    return (
        <div className="dashboard mt-5">
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>&#8470;</th>
                        <th>Photo</th>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                        <td>@mdo</td>
                        <td>@mdo</td>
                    </tr>
                </tbody>
            </Table>
        </div>
    )
}

export default Dashboard