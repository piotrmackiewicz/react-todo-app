import React from 'react'
import { Form, Button, Col, Row } from 'react-bootstrap'
import { Formik } from 'formik';
import * as yup from 'yup'
import { Link } from '@reach/router'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSave, faBan } from '@fortawesome/free-solid-svg-icons'

const schema = yup.object({
    title: yup.string().required(),
    priority: yup.number().required().moreThan(0)
});

const CreateTodoForm = ({ onSubmitForm, formData }) => {
    console.log(formData)
    return (
        <Formik
            validationSchema={schema}
            onSubmit={onSubmitForm}
            initialValues={{
                title: formData ? formData.title : '',
                description: formData ? formData.description : '',
                priority: formData ? formData.priority : 1
            }}
        >
            {({
                handleSubmit,
                handleChange,
                values,
                errors,
            }) => (
                    <Row className="justify-content-center">
                        <Col lg={4} sm={8} xs={12}>
                            <Form noValidate onSubmit={handleSubmit}>
                                <Form.Row>
                                    <Form.Group className="w-100">
                                        <Form.Control
                                            type="text"
                                            name="title"
                                            value={values.title}
                                            onChange={handleChange}
                                            isInvalid={!!errors.title}
                                            placeholder="Todo Title"
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            {errors.title}
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                </Form.Row>
                                <Form.Row>
                                    <Form.Group className="w-100">
                                        <Form.Control
                                            as="textarea"
                                            rows="5"
                                            name="description"
                                            value={values.description}
                                            onChange={handleChange}
                                            placeholder="Todo Description"
                                        />
                                    </Form.Group>
                                </Form.Row>
                                <Form.Row className="mb-3">
                                    <Form.Label column sm={2}>Priority</Form.Label>
                                    <Col>
                                        <Form.Control
                                            type="number"
                                            name="priority"
                                            value={values.priority}
                                            onChange={handleChange}
                                            isInvalid={!!errors.priority}
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            {errors.priority}
                                        </Form.Control.Feedback>
                                    </Col>
                                </Form.Row>
                                <Form.Row>
                                    <Col>
                                        <Link to="/">
                                            <Button className=""><FontAwesomeIcon icon={faBan} /> Cancel</Button>
                                        </Link>
                                    </Col>
                                    <Col>
                                        <Button type="submit"><FontAwesomeIcon icon={faSave} /> Save</Button>
                                    </Col>
                                </Form.Row>
                            </Form>
                        </Col>
                    </Row>
                )}
        </Formik>
    )
}

export default CreateTodoForm;