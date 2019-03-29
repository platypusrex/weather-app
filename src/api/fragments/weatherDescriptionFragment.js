import gql from 'graphql-tag';

export const WeatherDescriptionFragment = gql`
  fragment WeatherDescription on WeatherDescription {
    id
    main
    description
    icon
  }
`;