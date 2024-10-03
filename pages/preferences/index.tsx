import Headline from "../../components/Headline";
import PreferenceList from "../../components/PreferenceList";
import FilterForm from "../../components/FilterForm";
import { StyledTitle } from "../../components/Title/StyledTitle";
import Head from "next/head";
import { Plant } from "../../types/plant";
import { Preference } from "../../types/preference";
import styled from "styled-components";

interface PreferencesPageProps {
  plants: Plant[];
  preferences: Preference[];
  handleAddPreference: (NewPreference: Preference) => void;
  handleDeletePreference: (id: string | undefined ) => void;
}

export default function PreferencesPage({
  plants,
  preferences,
  handleAddPreference,
  handleDeletePreference,
}: PreferencesPageProps) {
  return (
    <>
      <Head>
        <title>Add Preferences</title>
      </Head>
      <Headline />
      <Wrapper>
      <CenteredContent>
        <StyledTitle>Add your Plant Preferences</StyledTitle>
        <FilterForm plants={plants} onAddPreference={handleAddPreference} />
        <PreferenceList
          preferences={preferences}
          handleDeletePreference={handleDeletePreference}
        />
          </CenteredContent>
      </Wrapper>
    </>
  );
}
const Wrapper = styled.div`
  margin: 0 auto;
  padding: 1rem;
  max-width: 80rem;
`;

const CenteredContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: calc(100vh - 15rem);
`;