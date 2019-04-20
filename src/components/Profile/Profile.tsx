import * as React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { ProfileImage } from './components/ProfileImage';
import { ProfileName } from './components/ProfileName';
import { ProfileTitle } from './components/ProfileTitle';
import { ProfileContact } from './components/ProfileContact';
import { ProfileSummary } from './components/ProfileSummary';
import { ProfileSkills } from './components/ProfileSkills';

export const Profile = () => {
  const {
    json: {
      profile: { name, title, contact, summary, skills },
    },
  } = useStaticQuery(graphql`
    query {
      json {
        profile {
          name {
            lastName
            nickName
          }
          title
          contact {
            email
            github
            linkedIn
            location
          }
          summary {
            highlight
            details
          }
          skills {
            languages
            database
            technologies
            hobbies
          }
        }
      }
    }
  `);
  return (
    <>
      <ProfileImage />
      <ProfileName {...name} />
      <ProfileTitle title={title} />
      <ProfileContact contact={contact} />
      <ProfileSummary {...summary} />
      <ProfileSkills skills={skills} />
    </>
  );
};
