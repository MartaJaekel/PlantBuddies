import styled from "styled-components";
import { useState } from "react";
import { Plant } from "../../types/plant";

export interface SortPlantsProps {
  onSortUpdate: (plants: Plant[]) => void;
  plants: Plant[];
}

export default function SortPlants({ onSortUpdate, plants }: SortPlantsProps) {
  const [selectedOption, setSelectedOption] = useState<string>("A to Z");

  const handleSortingChange = (option: string): void => {
    setSelectedOption(option);

    let sortedPlants;
    const lowerCaseCommonName = (plant: Plant) => plant.commonName.toLowerCase();
    const sizeOrder: Record<string, number> = { small: 0, medium: 1, large: 2 };

    if (option === "Z to A") {
      sortedPlants = [...plants].sort((a, b) =>
        lowerCaseCommonName(a) < lowerCaseCommonName(b)
          ? 1
          : lowerCaseCommonName(a) > lowerCaseCommonName(b)
          ? -1
          : 0
      );
    } else if (option === "S to L") {
      sortedPlants = [...plants].sort(
        (a, b) => sizeOrder[a.size] - sizeOrder[b.size]
      );
    } else if (option === "L to S") {
      sortedPlants = [...plants].sort(
        (a, b) => sizeOrder[b.size] - sizeOrder[a.size]
      );
    } else {
      sortedPlants = [...plants].sort((a, b) =>
        lowerCaseCommonName(a) > lowerCaseCommonName(b)
          ? 1
          : lowerCaseCommonName(a) < lowerCaseCommonName(b)
          ? -1
          : 0
      );
    }

    onSortUpdate(sortedPlants);
  };

  return (
    <Form>
      <StyledLabel htmlFor="sort">Sort</StyledLabel>
      <StyledSelect
        name="sort"
        id="sort"
        onChange={(event) => handleSortingChange(event.target.value)}
        value={selectedOption}
      >
        <option value="A to Z">Name: A-Z</option>
        <option value="Z to A">Name: Z-A</option>
        <option value="S to L">Size: S-L</option>
        <option value="L to S">Size: L-S</option>
      </StyledSelect>
    </Form>
  );
}

const Form = styled.form`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 21rem;
  margin: 1rem auto 2rem auto;
  padding: 0 1rem;
  .form-row {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  @media (min-width: 1024px) {
    max-width: 31rem;
  }
`;

const StyledLabel = styled.label`
  border: 0;
  padding: 0;
  margin: 0;
  position: absolute;
  height: 1px;
  width: 1px;
  overflow: hidden;
  clip: rect(1px, 1px, 1px, 1px);
  clip-path: inset(50%);
  white-space: nowrap;
`;

const StyledSelect = styled.select`
  background-color: ${({ theme }) => theme.formField};
  padding: 0.8rem 2rem;
    appearance: none;
 background-image: url('/assets/down-arrow.svg');
  background-repeat: no-repeat;
  background-position: right 0.8rem center;
  background-size: 1rem auto;
  border-radius: 0.4rem;
  color: ${({ theme }) => theme.formText};
  border: solid 0.8px ${({ theme }) => theme.cardBorder};
  cursor: pointer;

`
