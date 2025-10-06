"use client";
import { Container, Row, Col } from "react-bootstrap";
import SearchForm from "./components/SearchForm";
import WeatherChart from "./components/WeatherChart";

export default function Home() {
  return (
    <Container>
      <SearchForm />
      <hr />
      <Container>
        <Row>
          <Col>City</Col>
          <Col>Temperature (F)</Col>
          <Col>Pressure (hPa)</Col>
          <Col>Humidity (%)</Col>
        </Row>
      </Container>
      <hr />
      <WeatherChart />
    </Container>
  );
}
