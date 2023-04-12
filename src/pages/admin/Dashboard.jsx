import React from 'react'
import { Button, Table } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { LinkContainer } from 'react-router-bootstrap';
import { removeCardFromDatabase } from '../../action/cardAction';

const Dashboard = () => {
    const cardData = useSelector(card => card);
    const dispatch = useDispatch();
    return (
        <div className="dashboard mt-5">
            <LinkContainer to="/dashboard/add">
                <Button className='mb-3' variant='success'>Add New Card</Button>
            </LinkContainer>
            <Table className='text-center'>
                <thead>
                    <tr>
                        <th>&#8470;</th>
                        <th>Photo</th>
                        <th>Title</th>
                        <th>Description</th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {cardData.map((item, i) => (
                        <tr key={i}>
                            <td>{i + 1}</td>
                            <td>
                                <img width={50} src={item.photo} alt="" />
                            </td>
                            <td>{item.title}</td>
                            <td>{item.desc.length > 30 ? item.desc.slice(0, 30) + "..." : item.desc}</td>
                            <td>
                                <LinkContainer to={`/dashboard/edit/${item.id}`}>
                                    <Button variant='warning'>Edit</Button>
                                </LinkContainer>
                            </td>
                            <td>
                                <Button variant='danger' onClick={() => { dispatch(removeCardFromDatabase(item.id)) }}>X</Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    )
}

export default Dashboard