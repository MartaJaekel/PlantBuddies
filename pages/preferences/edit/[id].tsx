import FilterForm from "../../../components/FilterForm";
import styled from "styled-components";
import { useRouter } from "next/router";
import Headline from "../../../components/Headline";
import BackButton from "../../../components/BackButton";
import { StyledTitle } from "../../../components/Title/StyledTitle";
import Head from "next/head";
import { Preference } from "../../../types/preference";
import { Plant } from "../../../types/plant";
import React from "react";

interface EditPreferencePageProps {
  preferences: Preference[];
  onEditPreference: (editedPreference: Preference) => void;
  plants: Plant[];
}

export default function EditPreferencePage({
  preferences,
  onEditPreference,
  plants,
}: EditPreferencePageProps) {
  const router = useRouter();
  const { id } = router.query;

  const thisPreference = preferences?.find(
    (preference) => preference.id === id
  );

  if (!thisPreference) {
    return <div>Preference not found</div>;
  }

  return (
    <>
      <Head>
        <title>Edit Preference</title>
      </Head>

      <StyledButton>
        <BackButton />
      </StyledButton>
      <Headline />
      <main>
        <StyledTitle>Edit your Preference</StyledTitle>
        <FilterForm
          plants={plants}
          preferenceFilterSettings={thisPreference?.filterSettings}
          preferenceId={thisPreference.id}
          preferenceFilterTitle={thisPreference?.preferenceTitle}
          onEditPreference={onEditPreference}
        />
      </main>
    </>
  );
}

const StyledButton = styled.div`
  position: fixed;
  top: 2.75rem;
  z-index: 3;
`;
