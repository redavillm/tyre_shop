import styled from "styled-components";

export const StyledModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const StyledCart = styled.div`
  height: 96%;
  display: flex;
  flex-direction: column;
  & button {
    cursor: pointer;
    padding: 10px 30px;
    border: none;
  }
  & button:hover {
    background: #9b9b9b;
  }
`;
export const StyledCartFooter = styled.div`
  position: sticky;
  bottom: 0;
  background: #f9f9f9;
  padding: 10px;
  border-top: 1px solid #ddd;
  z-index: 1;
`;
export const StyledCartContent = styled.section`
  flex-grow: 1;
  overflow-y: auto;
  padding: 10px;
`;

export const StyledCloseModalBtn = styled.div`
  display: flex;
  justify-content: flex-end;
`;
