import styled from "styled-components";
import Link from "next/link";

export default function PreferenceCard({ preference }) {
  return (
    <StyledLink href={`preferences/${preference?.id}`}>
        {preference?.preferenceTitle}
    </StyledLink>
  );
}

const StyledLink = styled(Link)`
  background-color: var(--color-green);
  padding: 0.6rem 1.5rem;
  border-radius: 8px;
  color: var(--color-beige);
  border: none;
  font-weight: 600;
  font-size: 0.8rem;
  cursor: pointer;
  max-width: 19rem;
  text-decoration: none;
  display: block;
`;
