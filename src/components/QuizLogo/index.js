/* eslint-disable linebreak-style */
import styled from 'styled-components';

import React from 'react';
import PropTypes from 'prop-types';

function Logo({ className }) {
  return (
    <svg className={className} width="335" height="67" viewBox="0 0 135 67" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0)">
        <path d="M 58.125 13.125 L 45 13.125 L 45 11.25 L 46.875 11.25 L 46.875 9.375 L 48.75 9.375 L 48.75 7.5 L 50.625 7.5 L 50.625 5.625 L 45 5.625 L 45 3.75 L 58.125 3.75 L 58.125 5.625 L 56.25 5.625 L 56.25 7.5 L 54.375 7.5 L 54.375 9.375 L 52.5 9.375 L 52.5 11.25 L 58.125 11.25 L 58.125 13.125 Z M 28.125 13.125 L 16.875 13.125 L 16.875 11.25 L 15 11.25 L 15 3.75 L 18.75 3.75 L 18.75 11.25 L 24.375 11.25 L 24.375 3.75 L 28.125 3.75 L 28.125 13.125 Z M 148.125 13.125 L 136.875 13.125 L 136.875 11.25 L 135 11.25 L 135 9.375 L 136.875 9.375 L 136.875 7.5 L 144.375 7.5 L 144.375 5.625 L 136.875 5.625 L 136.875 3.75 L 146.25 3.75 L 146.25 5.625 L 148.125 5.625 L 148.125 13.125 Z M 153.75 13.125 L 150 13.125 L 150 3.75 L 161.25 3.75 L 161.25 5.625 L 163.125 5.625 L 163.125 13.125 L 159.375 13.125 L 159.375 5.625 L 153.75 5.625 L 153.75 13.125 Z M 191.25 13.125 L 181.875 13.125 L 181.875 11.25 L 180 11.25 L 180 5.625 L 181.875 5.625 L 181.875 3.75 L 191.25 3.75 L 191.25 5.625 L 193.125 5.625 L 193.125 9.375 L 183.75 9.375 L 183.75 11.25 L 191.25 11.25 L 191.25 13.125 Z M 11.25 1.875 L 13.125 1.875 L 13.125 9.375 L 11.25 9.375 L 11.25 11.25 L 9.375 11.25 L 9.375 13.125 L 1.875 13.125 L 1.875 11.25 L 0 11.25 L 0 1.875 L 1.875 1.875 L 1.875 0 L 11.25 0 L 11.25 1.875 Z M 88.125 13.125 L 76.875 13.125 L 76.875 11.25 L 75 11.25 L 75 5.625 L 76.875 5.625 L 76.875 3.75 L 84.375 3.75 L 84.375 0 L 88.125 0 L 88.125 13.125 Z M 129.375 13.125 L 120 13.125 L 120 0 L 129.375 0 L 129.375 1.875 L 131.25 1.875 L 131.25 3.75 L 133.125 3.75 L 133.125 9.375 L 131.25 9.375 L 131.25 11.25 L 129.375 11.25 L 129.375 13.125 Z M 174.375 13.125 L 170.625 13.125 L 170.625 5.625 L 166.875 5.625 L 166.875 3.75 L 170.625 3.75 L 170.625 0 L 174.375 0 L 174.375 3.75 L 178.125 3.75 L 178.125 5.625 L 174.375 5.625 L 174.375 13.125 Z M 43.125 13.125 L 31.875 13.125 L 31.875 11.25 L 35.625 11.25 L 35.625 5.625 L 33.75 5.625 L 33.75 3.75 L 39.375 3.75 L 39.375 11.25 L 43.125 11.25 L 43.125 13.125 Z M 101.25 13.125 L 91.875 13.125 L 91.875 11.25 L 90 11.25 L 90 5.625 L 91.875 5.625 L 91.875 3.75 L 101.25 3.75 L 101.25 5.625 L 103.125 5.625 L 103.125 11.25 L 101.25 11.25 L 101.25 13.125 Z M 9.375 7.5 L 9.375 1.875 L 3.75 1.875 L 3.75 11.25 L 7.5 11.25 L 7.5 9.375 L 5.625 9.375 L 5.625 7.5 L 9.375 7.5 Z M 123.75 1.875 L 123.75 11.25 L 127.5 11.25 L 127.5 9.375 L 129.375 9.375 L 129.375 3.75 L 127.5 3.75 L 127.5 1.875 L 123.75 1.875 Z M 78.75 5.625 L 78.75 11.25 L 84.375 11.25 L 84.375 5.625 L 78.75 5.625 Z M 93.75 5.625 L 93.75 11.25 L 99.375 11.25 L 99.375 5.625 L 93.75 5.625 Z M 138.75 9.375 L 138.75 11.25 L 144.375 11.25 L 144.375 9.375 L 138.75 9.375 Z M 183.75 5.625 L 183.75 7.5 L 189.375 7.5 L 189.375 5.625 L 183.75 5.625 Z M 39.375 1.875 L 35.625 1.875 L 35.625 0 L 39.375 0 L 39.375 1.875 Z M 11.25 11.25 L 11.25 13.125 L 13.125 13.125 L 13.125 11.25 L 11.25 11.25 Z" fill="white" />
      </g>
      <defs>
        <clipPath id="clip0">
          <rect width="334.373" height="67" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}

Logo.propTypes = {
  className: PropTypes.string.isRequired,
};

const QuizLogo = styled(Logo)`
  margin: auto;
  display: block;
  @media screen and (max-width: 500px) {
    margin: 0;
  }
`;

export default QuizLogo;
