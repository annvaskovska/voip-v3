import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './styles.css';

class WorkWith extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.prev = this.prev.bind(this);
        this.next = this.next.bind(this);

        const clients = [
            {
                id: 1,
                name: 'Chicco',
                className: 'chicco'
            },
            {
                id: 2,
                name: 'disla',
                className: 'disla',
            },
            {
                id: 3,
                name: 'eldorado',
                className: 'eldorado',

            },
            {
                id: 4,
                name: 'disla',
                className: 'disla',
            },
            {
                id: 5,
                name: 'eldorado',
                className: 'eldorado',

            },
        ];

        this.state = {
            clients,
            visibleClients: clients.slice(0, 3),
            startFrom: 0,
        };

    }

    prev() {
        const { startFrom, clients } = this.state;
        const visibleClients = clients.slice(startFrom + 1);
        this.setState({
            startFrom: startFrom - 1,
            visibleClients,
        });
    }

    next() {
        const { startFrom, clients } = this.state;
        const visibleClients = clients.slice(startFrom + 1);
        this.setState({
            startFrom: startFrom + 1,
            visibleClients,
        });
    }

    render() {
        const { visibleClients } = this.state;

        return (
            <Container fluid='true' className='work-with-container'>
               <Row className='justify-content-md-center'>
                   <Col md={{ span: 1 }} className='align-self-center'>
                       <div
                           className='prev'
                           onClick={this.prev}
                       />
                   </Col>
                   {
                       visibleClients.map((client) => {
                           const className=`company ${client.className}`;
                           return (
                               <Col
                                   md={{ span: 2 }}
                                   className={className}
                                   key={client.id}
                                   title={client.name}
                               />
                           )
                       })
                   }
                   <Col md={{ span: 1 }} className='align-self-center'>
                       <div
                           className='next'
                           onClick={this.next}
                       />
                   </Col>
               </Row>
            </Container>
        );
    }
}

export default WorkWith;