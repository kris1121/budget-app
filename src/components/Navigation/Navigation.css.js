import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  background-color: ${(props) => props.theme.colors.gray.light};
  padding: ${(props) => props.theme.spacing.sm}px 0;
  justify-content: space-between;
`;

export const List = styled.ul`
  display: flex;
`;
