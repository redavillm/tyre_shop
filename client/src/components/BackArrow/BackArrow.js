import styled from "styled-components";

const StyledArrow = styled.i`
  font-size: 48px;
  cursor: pointer;
`;

export const BackArrow = ({ handler }) => {
  return (
    <StyledArrow>
      <i
        className="fa fa-long-arrow-left"
        aria-hidden="true"
        onClick={handler}
      />
    </StyledArrow>
  );
};
