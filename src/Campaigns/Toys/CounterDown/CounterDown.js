import { useEffect, useRef, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './counterdown.css';

const CounterDown = () => {
  const [timerDays, setTimerDays] = useState('00');
  const [timerHours, setTimerHours] = useState('00');
  const [timerMinutes, setTimerMinutes] = useState('00');
  const [timerSeconds, setTimerSeconds] = useState('00');

  let interval = useRef();

  const startTimer = () => {
    const countdownDate = new Date('April 25, 2025 18:00:00').getTime();

    interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countdownDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      if (distance < 0) {
        clearInterval(interval.current);
      } else {
        setTimerDays(days);
        setTimerHours(hours);
        setTimerMinutes(minutes);
        setTimerSeconds(seconds);
      }
    }, 1000);
  };

  useEffect(() => {
    startTimer();
    return () => {
      clearInterval(interval);
    };
  });

  return (
    <Container fluid className=" timer-container w-75 align-items-center mb-5">
      <Row>
        <Col>
          <h2 className="text-primary text-center">Tiempo restante</h2>
        </Col>
      </Row>
      <Row className="border  bg-primary  rounded border-2 text-center py-5 px-5 ">
        <Col md={2} lg={2}>
          <strong>
            <p className="fs-1 text-white mb-0 timer-state">{timerDays}</p>
          </strong>
          <p className="text-white">
            <small>Dias</small>
          </p>
        </Col>
        <Col
          lg={1}
          md={1}
          className="d-flex align-items-center justify-content-center"
        >
          <span className="fs-5 text-white number-separator">:</span>
        </Col>
        <Col md={2} lg={2}>
          <strong>
            <p className="fs-1 text-white mb-0 timer-state">{timerHours}</p>
          </strong>
          <p className="text-white">
            <small>Horas</small>
          </p>
        </Col>
        <Col
          lg={1}
          md={1}
          className="d-flex align-items-center justify-content-center"
        >
          <span className="fs-5 text-white number-separator">:</span>
        </Col>
        <Col md={2} lg={2}>
          <strong>
            <p className="fs-1 text-white mb-0 timer-state">{timerMinutes}</p>
          </strong>
          <p className="text-white">
            <small>Minutos</small>
          </p>
        </Col>
        <Col
          lg={1}
          md={1}
          className="d-flex align-items-center justify-content-center"
        >
          <span className="fs-5 text-white number-separator">:</span>
        </Col>
        <Col md={2} lg={2}>
          <strong>
            <p className="fs-1 text-white mb-0 timer-state">{timerSeconds}</p>
          </strong>
          <p className="text-white">
            <small>Segundos</small>
          </p>
        </Col>
      </Row>
    </Container>
  );
};
export default CounterDown;
