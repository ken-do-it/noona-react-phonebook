import React from 'react'
import { Row, Col } from 'react-bootstrap'

const ContactItem = ({item}) => {
  return (
    <div >
        <Row className='contact-card'>
            <Col lg={2}>
            <img width={50} src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Unknown_person.jpg/925px-Unknown_person.jpg" alt="" />
            </Col>

            <Col lg={10}>
            <div>{item.name}</div>
            <div>{item.phoneNumber}</div>
            </Col>  
        </Row>
    </div>
  )
}

export default ContactItem