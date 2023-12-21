import { useRouter } from "next/router";
import styled from "styled-components";
import PlantCard from "@/components/Card";
import { StyledHeadline } from "@/components/Headline/StyledHeadline";
import Link from "next/link";
import Image from "next/image";

export default function Preference({
  preferences,
  onToggleFavorite,
  favorites,
}) {
  const router = useRouter();
  const { id } = router.query;

  const preference = preferences.find((preference) => preference.id === id);

  return (
    <>
      <StyledHeadline>PlantBuddy</StyledHeadline>
      <main />
        <StyledBackLink href="/preferences">
          <Image src="/assets/ArrowIcon.svg" alt="Back Link" width={25} height={20} />
        </StyledBackLink>
      <StyledTitle>{preference?.preferenceTitle}</StyledTitle>
      <StyledPlantList>
        {preference?.preferencePlants.map((plant) => (
          <PlantCard
            key={plant.id}
            plant={plant}
            onToggleFavorite={onToggleFavorite}
            isFavorite={favorites?.includes(plant.id)}
          />
        ))}
      </StyledPlantList>
    </>
  );
}

const StyledTitle = styled.h2`
  text-align: center;
  font-size: 1.25rem;
  color: var(--color-green);
  word-wrap: break-word;
  padding: 0 2rem 0 2rem;
`;

const StyledPlantList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
`;

const StyledBackLink = styled(Link)`
  position: fixed;
  top: 1.75rem;
  left: 1rem;
  background-color: var(--color-green);
  border-radius: 50%;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  z-index: 2;
`;
