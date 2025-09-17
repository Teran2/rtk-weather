'use client';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

export const SearchBar = () => {
  return (
    <InputGroup>
      <Form.Control placeholder="Get a five-day forecast in your favorite cities" />
      <Button variant="secondary">Submit</Button>
    </InputGroup>
  );
};
