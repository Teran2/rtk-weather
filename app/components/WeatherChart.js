import { Container, Row, Col } from "react-bootstrap";
import {
  Sparklines,
  SparklinesLine,
  SparklinesReferenceLine,
} from "react-sparklines";

export default function WeatherChart() {
  return (
    <Container>
      <Row>
        <Col>
          {/* <Sparklines data={sampleData}>
            <SparklinesLine />
            <SparklinesReferenceLine type="avg" />
          </Sparklines> */}
        </Col>
        <Col>Temp Test</Col>
        <Col>Pressure Test</Col>
        <Col>Humidity Test</Col>
      </Row>
    </Container>
  );
}
