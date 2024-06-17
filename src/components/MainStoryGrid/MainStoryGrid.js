import React from "react";
import styled from "styled-components/macro";

import { MAIN_STORY, OPINION_STORIES, SECONDARY_STORIES } from "../../data";

import SectionTitle from "../SectionTitle";
import MainStory from "../MainStory";
import SecondaryStory from "../SecondaryStory";
import OpinionStory from "../OpinionStory";
import Advertisement from "../Advertisement";
import { QUERIES } from "../../constants";

const MainStoryGrid = () => {
  return (
    <Wrapper>
      <MainStorySection>
        <MainStory {...MAIN_STORY} />
      </MainStorySection>

      <SecondaryStorySection>
        <StoryList>
          {SECONDARY_STORIES.map((story, index) => (
            <VerticalStoryWrapper key={story.id}>
              <SecondaryStory {...story} />
            </VerticalStoryWrapper>
          ))}
        </StoryList>
      </SecondaryStorySection>

      <OpinionSection>
        <SectionTitle>Opinion</SectionTitle>
        <StoryList>
          {OPINION_STORIES.map((story, index) => (
            <VerticalStoryWrapper key={story.id}>
              <OpinionStory {...story} />
            </VerticalStoryWrapper>
          ))}
        </StoryList>
      </OpinionSection>

      <AdvertisementSection>
        <Advertisement />
      </AdvertisementSection>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  grid-template-areas:
    "main-story"
    "secondary-stories"
    "opinion-stories"
    "advertisement";
  margin-bottom: 48px;
  background-color: var(--color-gray-100);

  @media ${QUERIES.tabletOnly} {
    grid-template-columns: 2fr 1fr;
    grid-template-areas:
      "main-story secondary-stories"
      "advertisement advertisement"
      "opinion-stories opinion-stories";
  }

  @media ${QUERIES.laptopAndUp} {
    grid-template-columns: 4fr 3fr 2fr;
    grid-template-areas:
      "main-story  secondary-stories opinion-stories"
      "main-story  advertisement advertisement";
  }
`;

const MainStorySection = styled.section`
  grid-area: main-story;
  background-color: var(--color-gray-100);

  @media ${QUERIES.tabletAndUp} {
    padding-right: 16px;
    border-right: 1px solid var(--color-gray-300);
  }
`;

const SecondaryStorySection = styled.section`
  grid-area: secondary-stories;
  padding: 24px 0;
  background-color: var(--color-gray-100);

  @media ${QUERIES.tabletAndUp} {
    padding-left: 16px;
    padding-top: 0;
  }

  @media ${QUERIES.laptopAndUp} {
    padding-right: 16px;
    padding-bottom: 16px;
    padding-right: 16px;
    border-right: 1px solid var(--color-gray-300);
  }
`;

const OpinionSection = styled.section`
  grid-area: opinion-stories;
  padding: 24px 0;
  background-color: var(--color-gray-100);

  @media ${QUERIES.laptopAndUp} {
    padding-left: 16px;
    padding-top: 0;
    padding-bottom: 16px;
    margin-top: -8px;
  }
`;

const AdvertisementSection = styled.section`
  grid-area: advertisement;
  padding: 24px 0;
  background-color: var(--color-gray-100);

  @media ${QUERIES.laptopAndUp} {
    margin-left: 16px;
    padding-top: 16px;
    border-top: 1px solid var(--color-gray-300);
    margin-top: 16px;
  }
`;

const VerticalStoryWrapper = styled.div`
  &:not(:last-of-type) {
    border-bottom: solid 1px var(--color-gray-300);
    padding-bottom: 16px;
    margin-bottom: 16px;
  }

  @media ${QUERIES.tabletOnly} {
    ${OpinionSection} & {
      border-bottom: revert;
    }
  }
`;

const StoryList = styled.div`
  display: flex;
  flex-direction: column;

  @media ${QUERIES.tabletOnly} {
    ${OpinionSection} & {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 32px;
    }
  }
`;

export default MainStoryGrid;
