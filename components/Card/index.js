import Image from "next/image";
import styled from "styled-components";
import Link from "next/link";

export default function PlantCard({plantsToDisplay}) {
  if (plantsToDisplay.length === 0) {
    return <NoMatches>Apologies, but we couldn't find any plants in our database that align with your filter criteria.</NoMatches>
  }
  return (
    <StyledList>
      {plantsToDisplay.map((plant) => (
        <StyledLink key={plant.id} href={`plants/${plant.id}`}>
          <li>
            <StyledFigure>
              <Image
                src={plant.image}
                width={150}
                height={150}
                alt={plant.commonName}
              />
              <StyledCaption>{plant.commonName}</StyledCaption>
            </StyledFigure>
          </li>
        </StyledLink>
      ))}
    </StyledList>
  );
}

const StyledList = styled.ul`
  /* margin-top: 6rem; */
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
`;

const StyledFigure = styled.figure`
  margin: 0;
  width: 9rem;
  height: 13rem;
  border-radius: 1rem;
  border: 2px solid #e6e6e6;
  overflow: hidden;
  background-color: var(--color-beige);
`;

const StyledCaption = styled.figcaption`
  text-align: center;
  margin: 0.25rem;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: var(--color-black);
`;

const NoMatches = styled.p`
  text-align: center;
  margin: 1rem auto;
  color: red;
  max-width: 19rem;
`;
