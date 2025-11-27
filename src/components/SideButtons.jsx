import { faSquareWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMessage } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';
import Modal from './Modal';
import { useState } from 'react';
import Form from './Form';
import { useNavigate } from 'react-router-dom';

const SideButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  position: fixed;
  right: 1rem;
  bottom: 50%;
`;

const WhatsAppButton = styled.a`
  display: flex;
  text-decoration: none;
  color: rgb(7, 94, 84);
  font-size: 2.5rem;
`;

const FormButton = styled.a`
  display: flex;
  text-decoration: none;
  font-size: 2.5rem;
  color: #1b3c53;
`;

function SideButtons() {
  const navigate = useNavigate();
  const [showForm, setShowForm] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    // send to Vercel API route
    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });

    if (res.ok) {
      // Navigate to the thank-you page
      navigate('/thank-you');
      setShowForm(false);
    } else {
      alert('Error sending message!');
    }
  }

  return (
    <>
      <SideButtonsContainer>
        <WhatsAppButton href="https://wa.me/+40750419349" target="_blank">
          <FontAwesomeIcon icon={faSquareWhatsapp} />
        </WhatsAppButton>
        <FormButton onClick={() => setShowForm(true)}>
          <FontAwesomeIcon icon={faMessage} />
        </FormButton>
      </SideButtonsContainer>

      <Modal
        show={showForm}
        title="Contact Form"
        onClose={() => setShowForm(false)}
      >
        <Form onSubmit={handleSubmit}></Form>
      </Modal>
    </>
  );
}

export default SideButtons;
