import styled from "styled-components";

export const Container = styled.div`
  background-color: ${(props) => props.theme.gray900};
  height: 100vh;
  width: 18.75rem;
  border-top-right-radius: 1rem;
  border-bottom-right-radius: 1rem;
  display: flex;
  flex-direction: column;
  color: ${(props) => props.theme.gray300};
  font-size: 1rem;
  font-weight: bold;
  padding-left: 2rem;

  > * {
    /* border: 5px solid purple; */
  }

  .logo {
    display: flex;
    align-items: left;
    padding-top: 2.5rem;
    margin-bottom: 5.25rem;
  }

  .navigation {
    &-item {
      /* border: 1px solid green; */
      text-align: left;
      padding: 1.25rem 0;

      display: flex;
      align-items: center;

      img {
        height: 1.125rem;
        width: 1.125rem;
        margin-right: 1.25rem;
      }
    }
  }

  .minimize {
    margin-top: auto;
    margin-bottom: 2.5rem;
    /* border: 1px solid green; */
    text-align: left;

    &-btn {
      display: flex;
      align-items: center;

      img {
        margin-right: 1.25rem;
      }
    }
  }

  .navigation-item,
  .minimize-btn {
    &:hover {
      transition: 0.5s;
      cursor: pointer;
      filter: brightness(300%);
    }
  }
`;
