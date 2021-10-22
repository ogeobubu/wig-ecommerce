import styled from "styled-components";

const Section = styled.section`
  height: 30px;
  background-color: teal;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  font-weight: 500;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Announcement = () => {
  return (
    <Section>
      <Container>
        <marquee direction="left">
          {" "}
          30% off for all purchases made in Hair Protege. Get yours now while
          the offer lasts.{" "}
        </marquee>
      </Container>
    </Section>
  );
};

export default Announcement;
