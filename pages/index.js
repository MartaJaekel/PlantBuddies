import PlantCard from "@/components/Card";
import Navigation from "@/components/Navigation";
import styled from "styled-components";

export default function HomePage() {
  return (
    <>
      <StyledHeader>PlantBuddy</StyledHeader>
      <PlantCard />
    </>
  );
}

const StyledHeader = styled.h1`
  position: fixed;
  top: 0;
  background-color: white;
  width: 100%;
  text-align: center;
  color: var(--color-green);
  font-family: serif;
  font-size: 3rem;
  margin: 0;
  padding: 1rem;
`;
