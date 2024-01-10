import React from "react";
import { useState } from "react";
import styled from "styled-components";
import { StyledHeadline } from "@/components/Headline/StyledHeadline";
import { useRouter } from "next/router";
import Image from "next/image";

export default function EntryForm({ onFormSubmit }) {
  const [url, setUrl] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [careTipps, setCareTipps] = useState("");
  const [location, setLocation] = useState("");

  const router = useRouter();
  const goBack = () => {
    router.back();
  };
  const isUrlValid = (url) => {
    const urlRegex = /^(https?:\/\/)?([\w-]+\.)+[\w-]+(\/[\w-./?%&=]*)?$/;
    return urlRegex.test(url);
  };

  function handleSubmit(event) {
    event.preventDefault();
    if (isUrlValid(url)) {
      const entry = { url, name, description, careTipps, location };
      onFormSubmit(entry);
      router.push("/journal");
    } else {
      alert("Invalid URL. Please enter a valid image URL.");
    }
  }
  function handleReset(event) {
    event.target.reset();
  }

  return (
    <>
      <StyledHeadline>PlantBuddy</StyledHeadline>
      <StyledBackButton type="button" aria-label="Go Back" onClick={goBack}>
        <Image
          src="/assets/ArrowIcon.svg"
          alt="Back Link"
          width={25}
          height={20}
        />
      </StyledBackButton>
      <main>
        <StyledTitle>Plant Journal </StyledTitle>
        <StyledForm onSubmit={handleSubmit} onReset={handleReset}>
          <StyledLabel htmlFor="url"></StyledLabel>
          <StyledInput
            type="url"
            id="url"
            name="url"
            placeholder="Image Upload URL"
            onChange={(event) => setUrl(event.target.value)}
            required
          />
          <StyledLabel htmlFor="name"></StyledLabel>
          <StyledInput
            type="text"
            id="name"
            name="name"
            placeholder="Name"
            onChange={(event) => setName(event.target.value)}
          />
          <StyledLabel htmlFor="description"></StyledLabel>
          <StyledTextarea
            type="text"
            id="description"
            name="description"
            placeholder="Description"
            onChange={(event) => setDescription(event.target.value)}
          />
          <StyledLabel htmlFor="care"></StyledLabel>
          <StyledTextarea
            type="text"
            id="care"
            name="care"
            placeholder="Care Tipps"
            onChange={(event) => setCareTipps(event.target.value)}
          />
          <StyledLabel htmlFor="location"></StyledLabel>
          <StyledInput
            type="text"
            id="location"
            name="location"
            placeholder="Location"
            onChange={(event) => setLocation(event.target.value)}
          />

          <StyledButtonContainer>
            <StyledButton type="reset">Cancel</StyledButton>
            <StyledButton type="submit">Save</StyledButton>
          </StyledButtonContainer>
        </StyledForm>
      </main>{" "}
    </>
  );
}

const StyledForm = styled.form`
  position: relative;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
  max-width: 19rem;
  margin: 3rem auto;
  padding: 0rem 0rem 2rem 0;
  border-bottom: 2px solid var(--color-grey);
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
const StyledInput = styled.input`
  background-color: var(--color-grey);
  padding: 0.6rem 1.5rem;
  border-radius: 8px;
  color: var(--color-green);
  border: none;
  font-weight: 600;
  cursor: pointer;

  &::placeholder {
    color: var(--color-lightGreen);
    font-weight: 600;
  }
`;

const StyledTextarea = styled.textarea`
  background-color: var(--color-grey);
  padding: 1rem;
  border-radius: 8px;
  color: var(--color-green);
  border: none;
  font-weight: 600;
  cursor: pointer;
  resize: vertical; 
  min-height: 100px; 
  &::placeholder {
    color: var(--color-lightGreen);
    font-weight: 600;
  }
`;
const StyledButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const StyledButton = styled.button`
  color: white;
  background-color: var(--color-green);
  border: none;
  border-radius: 8px;
  padding: 0.6rem 0.4rem;
  font-weight: 600;
  cursor: pointer;
  width: 9rem;
`;
const StyledBackButton = styled.button`
  position: absolute;
  top: 1.75rem;
  left: 1rem;
  font-size: 2rem;
  background-color: var(--color-green);
  border-radius: 50%;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  border: none;
  z-index: 2;
`;
const StyledTitle = styled.h2`
  text-align: center;
  margin-top: 6rem;
  margin-bottom: 2rem;
  font-size: 1.5;
  color: var(--color-green);
`;
/*const [formValues, setFormValues] = useState({
        url: "",
        name: "",
        description: "",
        care: "",
        location: ""
    });*/

/*function handleInputChange(event) {
    // Extract the name and value from the input field
    const name = event.target.name;
    const value = event.target.value;
// Update the formValues state using setFormValues
    setFormValues((prevValues)  => {
         // Create a new object by copying the previous values
    const newValues = {...prevValues};
    newValues[name]= value;
 // Return the new object as the updated state
    return newValues;
     }) }*/
