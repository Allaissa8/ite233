import { Button, Form } from "react-bootstrap";

const ContactForm = () => {
  return (
    <Form>
      <Form.Group className="mb-3">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="johndoe@example.com" />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Message</Form.Label>
        <Form.Control as="textarea" rows={3} placeholder="Write a message..." />
      </Form.Group>
      <div className="d-grid gap-2">
        <Button size="lg" variant="dark" href="mailto:llca.soriano.up@phinamed.com ">Submit</Button>
    </div>
     
    </Form>
  )
}

export default ContactForm