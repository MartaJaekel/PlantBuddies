import styled from "styled-components";
import { Plant } from "../../types/plant";
import PlantCard from "../Card";

interface PlantListProps {
  favorites: string[],
  onToggleFavorite: (plantId: string) => void;
  search: string,
  searchResult: Plant[];
  sortedPlants: Plant[];
  theme: string;
  plants: Plant[];
}

export default function PlantList({
  favorites,
  onToggleFavorite,
  search,
  searchResult,
  sortedPlants,
  theme,
}: PlantListProps) {
  const error = search.length > 0 && searchResult.length === 0;
  if (error) {
    return (
      <ErrorMessageContainer>
        <p>
          Sorry, we could not find <br />
          anything with the name <br />
          <StyledSpan>{search}</StyledSpan>
        </p>
      </ErrorMessageContainer>
    );
  }

  return (
    <StyledPlantList>
      {(search.length ? searchResult : sortedPlants).map((plant) =>
        <PlantCard
          key={plant._id}
          plant={plant}
          onToggleFavorite={onToggleFavorite}
          isFavorite={favorites?.includes(plant._id)}
          theme={theme}
        />
      )}
    </StyledPlantList>
  );
}

const StyledPlantList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
  max-width: 41rem;
  margin: 2rem auto 0 auto;

  @media (min-width: 1024px) {
    max-width: 61rem;
  }
`;

const ErrorMessageContainer = styled.div`
  text-align: center;
`;

const StyledSpan = styled.span`
  font-family: serif;
  font-style: italic;
`;

