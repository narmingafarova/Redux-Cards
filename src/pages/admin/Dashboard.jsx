import React from 'react'
import { Button, Table } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { LinkContainer } from 'react-router-bootstrap';
import { removeCard } from '../../action/cardAction';

const Dashboard = () => {
    const cardData = useSelector(card => card);
    const dispatch = useDispatch();
    return (
        <div className="dashboard mt-5">
            <LinkContainer to="/dashboard/add">
                <Button className='mb-3' variant='success'>Add New Card</Button>
            </LinkContainer>
            <Table bordered className='bg-white text-center'>
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
                    {cardData.map((item, i) => (
                        <tr key={i}>
                            <td>{i + 1}</td>
                            <td>
                                <img width={50} src={item.photo} alt="" />
                            </td>
                            <td>{item.title}</td>
                            <td>{item.desc.slice(0, 30)}...</td>
                            <td>
                                <LinkContainer to={`/dashboard/edit/${item.id}`}>
                                    <Button variant='warning'>Edit</Button>
                                </LinkContainer>
                            </td>
                            <td>
                                <Button variant='danger' onClick={() => { dispatch(removeCard({ id: item.id })) }}>Delete</Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    )
}

export default Dashboard