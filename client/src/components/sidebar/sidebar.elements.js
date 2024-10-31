import styled from "styled-components";

const transitionTime = 0.65;

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
  overflow: hidden;
  transition: ${transitionTime}s;

  * {
    transition: ${transitionTime}s;
  }

  img {
    user-select: none;
  }

  .logo {
    display: flex;
    align-items: left;
    padding-top: 2.5rem;
    margin-bottom: 5.25rem;
    position: relative;

    &--lg {
      opacity: 1;
      position: absolute;
    }
    &--sm {
      opacity: 0;
      position: absolute;
    }
  }

  .navigation {
    &-item {
      text-align: left;
      padding: 1.25rem 0;

      display: flex;
      align-items: center;
      white-space: nowrap;
      min-width: 10rem; /* prevent icons from moving on minimize */

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

    text-align: left;

    white-space: nowrap;
    min-width: 10rem; /* prevent icon from moving on minimize */

    &-btn div {
      display: flex;
      align-items: center;
      width: 1rem; /* hacky way of forcing the anim rotation to hinge on the arrow... transform-origin wasn't cutting it */

      img {
        margin-right: 1.25rem;
      }

      span {
        opacity: 1;
      }
    }
  }

  .navigation-item,
  .minimize-btn {
    &:hover {
      cursor: pointer;
      filter: brightness(300%);
    }
  }

  &.minimized {
    width: 3rem;
    transition: ${transitionTime}s;

    > * {
      transition: ${transitionTime}s;
    }

    .logo {
      &--lg {
        opacity: 0;
      }
      &--sm {
        opacity: 1;
      }
    }

    .navigation-item span {
      opacity: 0;
      transform: translateX(-1rem);
    }

    .minimize-btn div {
      transform: rotate(-180deg);

      span {
        opacity: 0;
      }
    }
  }

  @media (max-width: 960px) {
    height: 4.625rem;
    width: 100vw;
    position: fixed;
    bottom: 0;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding-left: 0;

    border-top-left-radius: 1rem;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;

    .logo,
    .minimize {
      display: none;
    }

    .navigation {
      display: flex;
      width: 100%;

      .navigation-item {
        display: flex;
        flex-direction: column;
        align-items: center;
        min-width: 0;
        flex-grow: 1;

        img {
          margin: 0 auto 0.75rem auto;
        }

        span {
          opacity: 1;
          font-size: 0.75rem;
          transition: 0;
          transform: translateX(0);
        }
      }
    }

    &.minimized {
      width: 100vw;
    }
  }

  @media (max-width: 500px) {
    height: 3.25rem;

    .navigation .navigation-item {
      img {
        margin: 0;
      }
      span {
        display: none;
      }
    }
  }
`;
