import React from 'react'
import { Row } from 'react-bootstrap'
import { connect } from 'react-redux'
import SingleCard from '../components/SingleCard'

const CardsPage = ({ pvalue }) => {
  return (
    <Row className='cards-page g-5 my-4'>
      {pvalue.map(i => (
        <SingleCard key={i.id} photo={i.photo} title={i.title} id={i.id} desc={i.desc} date={i.date} category={i.category} view={i.view} />
      ))}
    </Row>
  )
}

const mapStateToProps = (state) => {
  return {
    pvalue: state
  }
}

export default connect(mapStateToProps)(CardsPage);