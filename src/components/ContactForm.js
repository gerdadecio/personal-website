import React, { useState } from "react";
import {
  UncontrolledAlert,
  Button,
  FormGroup,
  Form,
  Input,
  Row,
  Col,
  UncontrolledTooltip,
} from "reactstrap";

const ContactForm = () => {
  const initialFormState = {name: '', email: '', phone: '', company: '', message: ''};
  const [emailForm, setEmailForm] = useState(initialFormState);
  const [messageStat, setMessageStat] = useState({color: '', message: ''});

  const sendEmail = () => {
    const templateId = 'personal_website_contact';
    const serviceId = 'gmail';
    const templateParams = {
      message: `${emailForm.message} -- Company: ${emailForm.company}`,
      from_name: emailForm.name,
      reply_to: emailForm.email,
      phone: emailForm.phone
    }

    window.emailjs.send(
      serviceId, templateId, templateParams
      ).then(res => {
        console.log('Email successfully sent!')
        setMessageStat({color: "success", message: "Thank you for your email! I'll get back to you as soon as possible."})
        setEmailForm(initialFormState);
      })
      // Handle errors here however you like, or use a React error boundary
      .catch(err => {
        setMessageStat({color: "danger", message: "Sorry, got some issues with the email server. Please reach me from my other channels or ring me up."})
        console.error('Oh well, you failed. Here some thoughts on the error that occured:', err
      )}
    )
  }

  return(
    <>
      {messageStat.message !== '' && <UncontrolledAlert color={messageStat.color}>{messageStat.message}</UncontrolledAlert>}
      <Form>
        <Row>
          <Col md="6">
            <FormGroup>
              <label>Your Name</label>
              <Input
                type="text"
                value={emailForm.name}
                onChange={e => setEmailForm({...emailForm, name: e.target.value})}
              />
            </FormGroup>
          </Col>
          <Col md="6">
            <FormGroup>
              <label>Email address</label>
              <Input
                type="email"
                value={emailForm.email}
                onChange={e => setEmailForm({...emailForm, email: e.target.value})}
              />
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col md="6">
            <FormGroup>
              <label>Phone</label>
              <Input
                type="text"
                value={emailForm.phone}
                onChange={e => setEmailForm({...emailForm, phone: e.target.value})}
              />
            </FormGroup>
          </Col>
          <Col md="6">
            <FormGroup>
              <label>Company</label>
              <Input
                type="text"
                value={emailForm.company}
                onChange={e => setEmailForm({...emailForm, company: e.target.value})}
              />
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col md="12">
            <FormGroup>
              <label>Message</label>
              <Input
                placeholder="Hello there!"
                type="textarea"
                value={emailForm.message}
                onChange={e => setEmailForm({...emailForm, message: e.target.value})}
              />
            </FormGroup>
          </Col>
        </Row>
        <Button
          className="btn-round float-right"
          color="primary"
          data-placement="right"
          id="tooltip341148792"
          type="button"
          onClick={sendEmail}
        >
          Send
        </Button>
        <UncontrolledTooltip
          delay={0}
          placement="right"
          target="tooltip341148792"
        >
          Can't wait for your message
        </UncontrolledTooltip>
      </Form>
    </>
  )
}

export default ContactForm;
