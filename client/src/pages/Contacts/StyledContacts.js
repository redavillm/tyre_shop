import styled from "styled-components";

export const StyledContacts = styled.div`
  color: #1a2902;
  margin: 15px 30px;
  display: flex;
  justify-content: space-around;
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
