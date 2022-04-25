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
        <Accordion.Header>{data.title}{data.listCount && <span className="faqsCount">({numberTransFormTwoDegit(data.listCount)})</span>}</Accordion.Header>
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
            <Card onClick={handleShow}  className="vidoCard">
            <div className="vidioIcon"> {data.media && <Card.Img variant="top" src={data.media.thumbnail} />}</div> 
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
                    <source src={data.media.url} type="video/mp4" />
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
                { title: data.title }, index)}
            </>
        )
    },
    faqs: (data, index) => {
        if (data.view == "list") {
            return accordionItem(<ListGroup>
                {data.list.map(res => {
                    if (res.hide) {
                        return "";
                    }
                    return (<ListGroup.Item><a href={res.link}> <span className="faqQ">{res.question}</span> <img src="/koredotai-docs/platform/topic-guide/build/assets/images/external-link.svg" className="external-link"/></a></ListGroup.Item>);
                })}
            </ListGroup>, { title: data.title, listCount: data.list.length }, index);
        } else if (data.view == "accordian") {
            return (<>
                {accordionItem(
                    <Accordion>
                        {data.list.map((res, index) => {
                            if (res.hide) {
                                return "";
                            }
                            if (!res.markup || !res.markup.length) {
                                return (<ListGroup.Item><a href={res.link}> {res.question} </a></ListGroup.Item>)
                            }

                            return accordionItem(res.markup && res.markup.map((mark, index) => {
                                if (mark[0] == "ul") {
                                    return React.createElement(mark[0], mark[2][0], mark[1].map(ls => {
                                        return React.createElement("li", null, ls);
                                    }))
                                }
                                return React.createElement(mark[0], mark[2] && mark[2][0], mark[1]);
                            }), { title: res.question }, index);
                        })}
                    </Accordion>, { title: data.title, listCount: data.list.length }, index)}
            </>);
        }
    },
    videos: (data, index) => {

        const videosList = data.list.map(res => {
            if (res.hide) {
                return "";
            }
            return (

                <VideoDialog data={res} />
            )
        });

        return (<>
            {accordionItem(<div className="vContainer">{videosList}</div>, { title: data.title, listCount: data.list.length }, index)}
        </>);
    },
    link: (data) => {
        return (<>
            {<Card className="docsCard">
                <Card.Body>
                    <div className="docIcon"><img src="/koredotai-docs/platform/topic-guide/build/assets/images/docIcon.svg" className="docIcon"/></div>
                    <div className="descTitle">
                    <Card.Title>{data.title}</Card.Title>
                    <Card.Text>
                        {data.description}
                    </Card.Text>
                    </div>
                    <div className="ext-icon"><img src="/koredotai-docs/platform/topic-guide/build/assets/images/external-link.svg" className="external-link"/></div>
                   
                </Card.Body>
            </Card>}
        </>)
    }
}