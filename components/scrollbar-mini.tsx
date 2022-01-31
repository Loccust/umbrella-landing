import styled from "@emotion/styled";

export const ScrollBarMini = styled.div`
  display: -webkit-inline-box;
  max-width: 40vw;
  overflow-x: auto;
  overflow-y: hidden;
  margin: 2px;
  padding: 5px;

  @media (max-width: 720px) {
    max-width: 90vw;
    margin: auto;
    margin-top: -100px;
    margin-left: 5px;
  }

  &::-webkit-scrollbar-track {
    background-color: rgb(0 0 0 / 30%);
    border-radius: 10px;
  }
  &::-webkit-scrollbar {
    width: 7px;
    height: 7px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: rgb(255 255 255 / 40%);
    border-radius: 10px;
  }
`;
