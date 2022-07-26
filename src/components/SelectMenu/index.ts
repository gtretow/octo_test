import styled from "styled-components";

export const SelectWrapper = styled.div`
  width: 200px;
  position: relative;
`;

export const Select = styled.select`
  font-size: 1.5rem;
  padding: 1em 5em 1em 1.5em;
  background: #4d5061;
  color: white;
  border: 0;
  margin-top: 5px;

  width: 180px;

  option {
    width: 50px;
  }
`;

export const Options = styled.option``;

export const CustomArrow = styled.span`
  background: #3b3c47;
  display: block;
  height: 100%;
  width: 4rem;
  position: absolute;
  top: 0;
  right: 20px;
  pointer-events: none;

  &::before,
  &::after {
    --size: 0.65em;

    content: "";
    position: absolute;
    width: 0;
    height: 0;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  &::before {
    border-left: var(--size) solid transparent;
    border-right: var(--size) solid transparent;
    border-bottom: var(--size) solid rgba(255, 255, 255, 0.5);
    top: 40%;
  }

  &::after {
    border-left: var(--size) solid transparent;
    border-right: var(--size) solid transparent;
    border-top: var(--size) solid rgba(255, 255, 255, 0.5);

    top: 60%;
  }
`;
