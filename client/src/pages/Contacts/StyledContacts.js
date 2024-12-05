import styled from "styled-components";

export const StyledContacts = styled.div`
  color: #1a2902;
  margin: 15px 30px;
  display: flex;
  justify-content: space-around;
  }
`;

export const StyledContactForm = styled.div`
  max-width: 600px;
  & input {
    all: unset;
    padding: 5px 10px;
    margin-bottom: 20px;
    border: 1px solid black;
    background-color: #aec670;
    font-size: 18px;
    box-shadow: 1px 2px 6px 1px rgba(0, 0, 0, 0.68);
    -webkit-box-shadow: 1px 2px 6px 1px rgba(0, 0, 0, 0.68);
    -moz-box-shadow: 1px 2px 6px 1px rgba(0, 0, 0, 0.68);
  }
  & textarea {
    all: unset;
    padding: 5px 10px;
    margin-bottom: 20px;
    border: 1px solid black;
    background-color: #aec670;
    font-size: 18px;
    box-shadow: 1px 2px 6px 1px rgba(0, 0, 0, 0.68);
    -webkit-box-shadow: 1px 2px 6px 1px rgba(0, 0, 0, 0.68);
    -moz-box-shadow: 1px 2px 6px 1px rgba(0, 0, 0, 0.68);
  }
`;

export const StyledIcons = styled.div`
  display: flex;
  & a {
    margin: 5px 10px 0px 10px;
  }
`;

export const StyledMap = styled.div`
  position: relative;
  overflow: hidden;
  & a {
    color: #eee;
    font-size: 12px;
    position: absolute;
    top: 0px;
  }
  & iframe {
    position: relative;
  }
`;
