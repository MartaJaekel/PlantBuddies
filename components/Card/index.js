import Image from "next/image";
import styled from "styled-components";
import Link from "next/link";
import FavoriteButton from "../FavoriteButton";
import { categories } from "@/lib/data-categories";

export default function PlantCard({
  onToggleFavorite,
  isFavorite,
  plant,
  theme,
}) {
  const category = categories.find(
    (category) => category.slug === plant.categorySlug
  );
  const categoryColor =
    theme === "light" ? category.bgcolor : category.bgcolorDark;

  return (
    <StyledListItem>
      <FavoriteButton
        onClick={() => onToggleFavorite(plant.id)}
        isFavorite={isFavorite}
      />
      <StyledLink href={`/plants/${plant?.id}`}>
        <StyledFigure $categoryColor={categoryColor}>
          <Image
            src={plant?.image}
            width={150}
            height={150}
            alt={plant?.commonName}
          />
          <StyledCaption>{plant?.commonName}</StyledCaption>
        </StyledFigure>
      </StyledLink>
    </StyledListItem>
  );
}

const StyledListItem = styled.li`
  position: relative;
`;

const StyledFigure = styled.figure`
  margin: 0;
  width: 9rem;
  height: 13rem;
  border-radius: 1rem;
  border: 2px solid var(--color-grey);
  overflow: hidden;
  background-color: ${({ $categoryColor }) => $categoryColor};
`;

const StyledCaption = styled.figcaption`
  color: ${({ theme }) => theme.infoText};
  text-align: center;
  justify-content: center;
  margin: 0.25rem;
`;

const StyledLink = styled(Link)`
  position: relative;
  text-decoration: none;
`;
