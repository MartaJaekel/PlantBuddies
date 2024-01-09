import { StyledHeadline } from "@/components/Headline/StyledHeadline";
import styled from "styled-components";
import PreferenceList from "@/components/PreferenceList";
import FilterForm from "@/components/FilterForm";

export default function PreferencesPage({
  plants,
  preferences,
  handleAddPreference,
  handleDeletePreference
}) {
  return (
    <>
      <StyledHeadline>PlantBuddy</StyledHeadline>
      <main>
        <StyledTitle>Add your Plant Preferences</StyledTitle>
        <FilterForm plants={plants} onAddPreference={handleAddPreference} />
        <PreferenceList preferences={preferences} handleDeletePreference={handleDeletePreference} />
      </main>
    </>
  );
}
  
const StyledTitle = styled.h2`
  text-align: center;
  font-size: 1.25rem;
  color: ${({ theme }) => theme.primaryGreen};
  margin: 6rem 0 2rem 0;
`;
