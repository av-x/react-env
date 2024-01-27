import { injectGlobal } from '@emotion/css';

/**
 * Spacing helpers:
 *
 * .m-x-4 --> { margin-left: 4px; margin-right: 4px; }
 * .m-y-4 --> { margin-top: 4px; margin-bottom: 4px; }
 * .m-t-4 --> { margin-top: 4px; }
 * .m-r-4 --> { margin-right: 4px; }
 * .m-b-4 --> { margin-bottom: 4px; }
 * .m-l-4 --> { margin-left: 4px; }
 * .m-4   --> { margin: 4px; }
 *
 * .p-x-auto --> { padding-left: auto; padding-right: auto; }
 * .p-y-auto --> { padding-top: auto; padding-bottom: auto; }
 * .p-t-auto --> { padding-top: auto; }
 * .p-r-auto --> { padding-right: auto; }
 * .p-b-auto --> { padding-bottom: auto; }
 * .p-l-auto --> { padding-left: auto; }
 * .p-auto   --> { padding: auto; }
 */
function spacingCss(): string {
  const spacingHash = {
    '0': '0px',
    '4': '4px',
    '8': '8px',
    '12': '12px',
    '16': '16px',
    '24': '24px',
    '32': '32px',
    '36': '36px',
    '40': '40px',
    '44': '44px',
    auto: 'auto',
  };
  let cssString = '';

  for (const [key, val] of Object.entries(spacingHash)) {
    cssString += `
      .m-${key} { margin: ${val}; }
      .m-x-${key} { margin-left: ${val}; margin-right: ${val}; };
      .m-y-${key} { margin-top: ${val}; margin-bottom: ${val}; };
      .m-t-${key} { margin-top: ${val}; }
      .m-r-${key} { margin-right: ${val}; }
      .m-b-${key} { margin-bottom: ${val}; }
      .m-l-${key} { margin-left: ${val}; }

      .p-${key} { padding: ${val}; }
      .p-x-${key} { padding-left: ${val}; padding-right: ${val}; };
      .p-y-${key} { padding-top: ${val}; padding-bottom: ${val}; };
      .p-t-${key} { padding-top: ${val}; }
      .p-r-${key} { padding-right: ${val}; }
      .p-b-${key} { padding-bottom: ${val}; }
      .p-l-${key} { padding-left: ${val}; }
    `;
  }

  return cssString;
}

export default injectGlobal`
  .spin {
    animation spin 2000ms linear infinite;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  ${spacingCss()}
`;
