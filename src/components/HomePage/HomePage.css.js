import styled from "styled-components";

export const Title = styled.h1`
  font-size: 7rem;
  color: ${({ theme }) => theme.colors.green.normal};
`;
export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.gray.normal};
  margin: auto auto;
`;
