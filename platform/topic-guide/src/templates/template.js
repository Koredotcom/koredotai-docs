import React, { useState, useEffect } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import ListGroup from 'react-bootstrap/ListGroup';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';


const numberTransFormTwoDegit = (n) => {
    return n > 9 ? "" + n : "0" + n;
}

const accordionItem = (template, data, index) => {
    return <Accordion.Item eventKey={index}>
        <Accordion.Header>{data.title}{data.list && <span>({numberTransFormTwoDegit(data.list.length)})</span>}</Accordion.Header>
        <Accordion.Body>
            {template}
        </Accordion.Body>
    </Accordion.Item>

}



function VideoDialog({ data }) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <Card onClick={handleShow} style={{ width: '18rem' }}>
               { data.media && <Card.Img variant="top" src={data.thumbnail} /> }
                <Card.Body>
                    <Card.Title>{data.subTitle}</Card.Title>
                    <Card.Text>
                        {data.description}
                    </Card.Text>
                </Card.Body>
            </Card>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{data.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body><video width="400" controls>
                    <source src={data.media} type="video/mp4" />
                </video>
                    <h4>{data.subTitle}</h4>
                    <p>{data.description}</p></Modal.Body>

            </Modal></>)
}


export const templates = {
    introduction: (data, index) => {
        return (
            <>  {accordionItem(
                <VideoDialog data={data} />,
                data, index)}
            </>
        )
    },
    faqs: (data, index) => {
        return (<>
            { accordionItem(
                <ListGroup>
                    {data.list.map(res => {
                        if(res.hide){
                            return "";
                        }
                        return (<ListGroup.Item><a href={res.link}> {res.question} </a></ListGroup.Item>)
                    })}
                </ListGroup>, data, index)}
        </>);
    },
    videos: (data, index) => {

        const videosList = data.list.map(res => {
            if(res.hide){
                return "";
            }
            return (

                <VideoDialog data={res} />
            )
        });

        return (<>
            {accordionItem(videosList, data, index)}
        </>);
    },
    link: (data) => {
        return (<>
            {<Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={data.icon} />
                        <Card.Body>
                            <Card.Title>{data.title}</Card.Title>
                            <Card.Text>
                                {data.description}
                            </Card.Text>
                        </Card.Body>
                    </Card>}
        </>)
    }
}