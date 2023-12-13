import { plants as plantsData } from "@/lib/data";
import Image from "next/image";
import { useEffect, useState } from "react";
import styled from "styled-components";
import Link from "next/link";

export default function PlantCard({search}) {
  const [plants, setPlants] = useState([...plantsData]);
  useEffect(() => {
    const searchResult = plantsData.filter((plant) => {
      if (
        search.length >= 3 &&
        plant.commonName.toLowerCase().includes(search.toLowerCase())
      ) {
        return plant;
      } else if (search.length < 3) {
        return plant;
      }
    });
    setPlants(searchResult);
  }, [search]);

  return (
    <StyledList>
      {plants.map((plant) => (
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
