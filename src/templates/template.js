import Accordion from 'react-bootstrap/Accordion';
import ListGroup from 'react-bootstrap/ListGroup';
import Card from 'react-bootstrap/Card'

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

export const templates = {
    introduction: (data, index) => {
        return (
            <>  {accordionItem(
                <div>
                    <video width="400" controls>
                        <source src={data.media} type="video/mp4" />
                    </video>
                    <h4>{data.subHeading}</h4>
                    <p>{data.description}</p>
                </div>,
                data, index)}
            </>
        )
    },
    faqs: (data, index) => {
        return (<>
            {accordionItem(
                <ListGroup>
                    {data.list.map(res => {
                        return <ListGroup.Item><a href={res.link}> {res.question} </a></ListGroup.Item>
                    })}
                </ListGroup>, data, index)}
        </>);
    },
    videos: (data, index) => {
        const videosList = data.list.map(res => {
            return (
                <div>
                    <video width="400" controls>
                        <source src={res.media} type="video/mp4" />
                    </video>
                    <h4>{res.subTitle}</h4>
                    <p>{res.description}</p>
                </div>
            )
        });

        return (<>
            {accordionItem(videosList, data, index)}
        </>);
    },
    files: (data) => {
        return (<>
            {data.list.map(res => {
                return (
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={res.icon} />
                        <Card.Body>
                            <Card.Title>{res.title}</Card.Title>
                            <Card.Text>
                                {res.description}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                )

            })}
        </>)
    }
}