import React from 'react'
import FaqsCard from './faqs-card'
import translations from '../utils/translations'
import { Col, Container, Row } from 'react-bootstrap'
import Titulo from './titulo'
import { useResponsive } from '../hooks/useResponsive'


export default function FaqsBlock({ data, language }) {
    const leftColumn = data.faqs.filter((_, index) => index % 2 === 0);
    const rightColumn = data.faqs.filter((_, index) => index % 2 !== 0);
    const isTablet = useResponsive();
    return (
        <div className="main-section-content">
            <Container className="mt-4 mb-4">
                <Row>
                    <Col>
                        <Titulo
                            id="clientes-satisfechos"
                            data={translations.ourFaqs[language]}
                        // showInicial={false}
                        ></Titulo>
                    </Col>
                </Row>
            </Container>
            <div className='faqs-container'>
                <Container className="faqs">
                    <div className='faqs-column'>
                        {leftColumn.map((faq, index) => (
                            <FaqsCard key={index} faq={faq} number={isTablet ? (index + 1) : (index * 2) + 1}></FaqsCard>
                        ))}
                    </div>
                    <div className='faqs-column'>
                        {rightColumn.map((faq, index) => (
                            <FaqsCard key={index} faq={faq} number={isTablet ? leftColumn.length + index + 1 : (index * 2) + 2}></FaqsCard>
                        ))}
                    </div>
                </Container>
            </div>
        </div>
    )
}
