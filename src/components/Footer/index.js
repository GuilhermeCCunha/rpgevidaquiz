/* eslint-disable linebreak-style */
/* eslint-disable react/react-in-jsx-scope */
import styled from 'styled-components';

// src/components/Footer/index.js
const FooterWrapper = styled.footer`
  background-color: #00000070;
  padding: 20px;
  display: flex;
  align-items: center;
  border-radius: 4px; 
  img {
    width: 85px; /*85px;*/
    margin-right: 23px;
  }
  a {
    color: white;
    text-decoration: none;
    transition: .3s;
    &:hover,
    &:focus {
      opacity: .5;
    }
    span {
      text-decoration: underline;
    }
  }
`;

export default function Footer(props) {
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <FooterWrapper {...props}>
      <a href="https://www.youtube.com/channel/UCBJvMQ2sSW2XfZqDx5XI4Og" target="_blank" rel="noreferrer">
        <img src="/images/Dantelogo.png" alt="Logo Dante" />
      </a>
      <p>
        Clique no logo para conhecer o meu canal!
        {' '}

        {' '}
        <a href="/#">
          <span> </span>
        </a>
      </p>
    </FooterWrapper>
  );
}
