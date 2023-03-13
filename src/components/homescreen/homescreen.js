import React, { useRef, useState, useEffect } from "react";
import styled from "styled-components";

const Homescreen = () => {
  const [byDays, setByDays] = useState("00");
  const [byHours, setByHours] = useState("00");
  const [byMinutes, setByMinutes] = useState("00");
  const [bySecs, setBySecs] = useState("00");

  let interval = useRef();

  const startTime = () => {
    const countDown = new Date("March 3, 2023, 00:00:00").getTime();

    interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countDown - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const secs = Math.floor((distance % (1000 * 60)) / 1000);

      if (distance < 0) {
        clearInterval(interval.current);
      } else {
        setByDays(days);
        setByHours(hours);
        setByMinutes(minutes);
        setBySecs(secs);
      }
    }, 1000);
  };

  useEffect(() => {
    startTime();
    return () => {
      clearInterval(interval.current);
    };
  });

  return (
    <Container>
      <Card>
        <Wrapper>
          <H1>COUNTDOWN TO MY BIRTHDAY</H1>
          <Cardholder>
            <Hold>
              <Nav>{byDays}</Nav>
              <Span>Days</Span>
            </Hold>
            <Hold>
              <Nav>{byHours}</Nav>
              <Span>Hours</Span>
            </Hold>
            <Hold>
              <Nav>{byMinutes}</Nav>
              <Span>Minutes</Span>
            </Hold>
            <Hold>
              <Nav>{bySecs}</Nav>
              <Span>Seconds</Span>
            </Hold>
          </Cardholder>
        </Wrapper>
      </Card>
    </Container>
  );
};
export default Homescreen;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: black;
`;
const Card = styled.div`
  width: 300px;
  height: 200px;
  background-color: blue;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Cardholder = styled.div`
  width: 90%;
  height: 150px;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
`;
const Hold = styled.div`
  width: 150px;
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
`;
const Nav = styled.div`
  color: black;
  font-family: sans-serif;
  font-size: 17px;
  /* font-weight: bold; */
`;
const Span = styled.div`
  color: black;
  font-family: sans-serif;
  font-size: 12px;
  /* font-weight: bold; */
`;
const Wrapper = styled.div`
  width: 90%;
  height: 80%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
`;
const H1 = styled.div`
  color: black;
  font-size: 17px;
`;
