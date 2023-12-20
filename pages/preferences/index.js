import { StyledHeadline } from "@/components/Headline/StyledHeadline";
import styled from "styled-components";
import PreferenceList from "@/components/PreferenceList";
import FilterForm from "@/components/FilterForm";

export default function PreferencesPage({
  plants,
  preferences,
  handleAddPreference,
}) {
  return (
    <>
      <StyledHeadline>PlantBuddy</StyledHeadline>
      <main>
        <StyledTitle>Add your Preferences</StyledTitle>
        <FilterForm plants={plants} onAddPreference={handleAddPreference} />
        <PreferenceList preferences={preferences} />
      </main>
    </>
  );
}

const StyledTitle = styled.h1`
  text-align: center;
  margin: 6rem 0 2rem 0;
  font-size: 1.25rem;
  color: var(--color-green);
`;
