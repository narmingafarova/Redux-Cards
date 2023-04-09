import React from 'react'
import { Card } from 'react-bootstrap';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom'

const CardDetails = ({ pvalue }) => {
  const { id } = useParams();
  const details = pvalue.find(i => (i.id === id))

  return (
    <>
      {details === undefined ? "Loading..." :
        <div className='mt-5 details-card'>
          <Card className='w-50 mx-auto'>
            <div className="card-bg p-4">
              <Card.Img variant="top" src={details.photo} />
              <div className="card-top-info d-flex flex-column justify-content-between align-items-center ps-3">
                <div className="mask-img mb-2">
                  <img src="https://frenify.com/work/envato/frenify/wp/salla/1/wp-content/themes/salla/framework/svg/brush.svg" alt="webkit" width={100} />
                  <span>{details.date}</span>
                </div>
                <div className="divider">
                  <span></span>
                </div>
                <div className="category mt-4">
                  <a href="/" className='text-decoration-none text-uppercase'>{details.category}</a>
                </div>
              </div>
              <Card.Body className='text-center mt-5'>
                <Card.Title className='mt-3'>{details.title}</Card.Title>
                <Card.Text>
                  {details.info}
                </Card.Text>
              </Card.Body>
            </div>
          </Card>
        </div>
      }
    </>
  )
}

const mapStateToProps = (state) => {
  return {
    pvalue: state
  }
}

export default connect(mapStateToProps)(CardDetails)