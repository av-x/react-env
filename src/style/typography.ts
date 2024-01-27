import { injectGlobal } from '@emotion/css';

export default injectGlobal`
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    margin: 0;
    padding: 0;
    font-weight: 500;
    line-height: 1.5;
  }

  h1 {
    font-size: calc(4.5 * var(--font-size-base));
  }

  h2 {
    font-size: calc(3.75 * var(--font-size-base));
  }

  h3 {
    font-size: calc(3 * var(--font-size-base));
  }

  h4 {
    font-size: calc(2.25 * var(--font-size-base));
  }

  h5 {
    font-size: calc(1.875 * var(--font-size-base));
  }

  h6 {
    font-size: calc(1.5 * var(--font-size-base));
  }

  p {
    font-size: var(--font-size-base);
    font-weight: 400;
    letter-spacing: -0.03rem;

    &.xl {
      font-size: var(--font-size-xl);
    }

    &.lg {
      font-size: var(--font-size-lg);
    }

    &.md {
      font-size: var(--font-size-md);
    }

    &.sm {
      font-size: var(--font-size-sm);
    }

    &.xs {
      font-size: var(--font-size-xs);
      letter-spacing: -0.01rem;
    }
  }

  &.bold {
    font-weight: 500;
  }
`;
