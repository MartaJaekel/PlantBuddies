import useSWR from "swr";
import styled from "styled-components";
import { useRouter } from "next/router";
import Image from "next/image";
import BackButton from "../../components/BackButton";
import Head from "next/head";

interface CategoryDetailProps {
  theme: string;
}

export default function CategoryDetail({ theme }: CategoryDetailProps) {
  const router = useRouter();
  const { slug } = router.query;

  const { data: category, error: categoriesError } = useSWR(
    `/api/categories/${slug}`
  );

  if (categoriesError) return <div>Error occurred while fetching data</div>;
  if (!category) return <div>Loading...</div>;

  const categoryColor =
    theme === "light" ? category.bgcolor : category.bgcolorDark;

  return (
    <>
      <Head>
        <title>{category.title}</title>
      </Head>
      <StyledMain>
        <BackButton />
        <StyledImage
          src={category.image}
          width={200}
          height={200}
          alt={category.title}
        />
        <StyledSection categoryColor={categoryColor}>
          <StyledName>{category.title}</StyledName>
         <StyledArticle>
            <StyledDescription>{category.description}</StyledDescription>
          </StyledArticle>
        </StyledSection>
      </StyledMain>
    </>
  );
}

interface StyledSectionProps {
  categoryColor: string;
}

const StyledMain = styled.main`
  position: relative;
   width: 100%;
   min-height: 100vh;
   padding-bottom: 4rem;
   @media (min-width: 1024px) {
    display: flex;
    width: 100%;
    margin: 0 auto;
  }
`;

const StyledImage = styled(Image)`
  width: 100%;
  height: auto;
  display: block;
  object-fit: cover;

  @media (min-width: 1024px) {
    width: 100%;
    height: auto;
  }
`;

const StyledSection = styled.section<StyledSectionProps>`
  padding: 1rem 2rem 2rem 2rem;
  background-color: ${({ categoryColor }) => categoryColor};
  color: ${({ theme }) => theme.infoText};
  width: 100%;
`;

const StyledName = styled.h1`
text-align: center;
  font-family: serif;
  font-size: 2rem;
  line-height: 2rem;
  color: ${({ theme }) => theme.formText};
  margin: 0;
`;
const StyledArticle = styled.article`
  max-width: 800px;
  margin: 0 auto;
  text-align: justify;
  font-size: 1rem;
  line-height: 1.6;
  color: ${({ theme }) => theme.infoText};
  @media (min-width: 1024px) {
    font-size: 1.2rem;
    line-height: 1.8;
  }
`;

const StyledDescription = styled.p`
  margin-top: 1rem;
  font-family: "Georgia", serif;
  font-style: italic;
  font-size: 1.1rem;
  line-height: 1.6rem;
  text-align: justify;
  color: ${({ theme }) => theme.formText};
  @media (min-width: 1024px) {
    font-size: 1.3rem;
    line-height: 1.9rem;
  }
`;