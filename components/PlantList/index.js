import styled from "styled-components";
import PlantCard from "../Card";

export default function PlantList({
  favorites,
  onToggleFavorite,
  search,
  searchResult,
  sortedPlants,
}) {
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
      {search.length === 0
        ? sortedPlants.map((plant) => (
            <PlantCard
              key={plant.id}
              plant={plant}
              onToggleFavorite={onToggleFavorite}
              isFavorite={favorites?.includes(plant.id)}
            />
          ))
        : searchResult.map((plant) => (
            <PlantCard
              key={plant.id}
              plant={plant}
              onToggleFavorite={onToggleFavorite}
              isFavorite={favorites?.includes(plant.id)}
            />
          ))}
    </StyledPlantList>
  );
}

const StyledPlantList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
`;

const ErrorMessageContainer = styled.div`
  text-align: center;
`;

const StyledSpan = styled.span`
  font-family: serif;
  font-style: italic;
`;

const NoMatches = styled.p`
  text-align: center;
  margin: 1rem auto;
  color: red;
  max-width: 19rem;
`;
