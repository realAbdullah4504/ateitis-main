import React from 'react'
import translations from '../utils/translations'
import { Col, Container, Row } from 'react-bootstrap'
import Titulo from './titulo'
import BlogsCard from './blogs-card'

export default function BlogsBlock({ language, data }) {
    const blogsData = data?.blogs
    return (
        <div className="main-section-content">
            <Container className="mt-4 mb-4">
                <Row>
                    <Col>
                        <Titulo
                            id="clientes-satisfechos"
                            data={translations.ourBlogs[language]}
                        // showInicial={false}
                        ></Titulo>
                    </Col>
                </Row>
                <div className="blogs-container">
                    {
                        blogsData?.map((blog, index) => (
                            <BlogsCard key={index} blog={blog} />
                        ))
                    }

                </div>
            </Container>
        </div>
    )
}
