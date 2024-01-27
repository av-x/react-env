import { injectGlobal } from '@emotion/css';

export default injectGlobal`
  :root {
    --color-white: #f4f5f7;

    --color-gray-900: #101828;
    --color-gray-800: #1d2939;
    --color-gray-700: #344054;
    --color-gray-600: #475467;
    --color-gray-500: #667085;
    --color-gray-400: #98a2b3;
    --color-gray-300: #d0d5dd;
    --color-gray-200: #eaecf0;
    --color-gray-100: #f2f4f7;
    --color-gray-50: #f9fafb;
    --color-gray-25: #fcfcfd;

    --color-primary-900: #42307d;
    --color-primary-800: #53389e;
    --color-primary-700: #6941c6;
    --color-primary-600: #7f56d9;
    --color-primary-500: #9e77ed;
    --color-primary-400: #b692f6;
    --color-primary-300: #d6bbfb;
    --color-primary-200: #e9d7fe;
    --color-primary-100: #f4ebff;
    --color-primary-50: #f9f5ff;
    --color-primary-25: #fcfaff;

    --color-error-900: #7a271a;
    --color-error-800: #912018;
    --color-error-700: #b42318;
    --color-error-600: #d92d20;
    --color-error-500: #f04438;
    --color-error-400: #f97066;
    --color-error-300: #fda29b;
    --color-error-200: #fecdca;
    --color-error-100: #fee4e2;
    --color-error-50: #fef3f2;
    --color-error-25: #fffbfa;

    --color-warning-900: #7a2e0e;
    --color-warning-800: #93370d;
    --color-warning-700: #b54708;
    --color-warning-600: #dc6803;
    --color-warning-500: #f79009;
    --color-warning-400: #fdb022;
    --color-warning-300: #fec84b;
    --color-warning-200: #fedf89;
    --color-warning-100: #fef0c7;
    --color-warning-50: #fffaeb;
    --color-warning-25: #fffcf5;

    --color-success-900: #054f31;
    --color-success-800: #05603a;
    --color-success-700: #027a48;
    --color-success-600: #039855;
    --color-success-500: #12b76a;
    --color-success-400: #32d583;
    --color-success-300: #6ce9a6;
    --color-success-200: #a6f4c5;
    --color-success-100: #d1fadf;
    --color-success-50: #ecfdf3;
    --color-success-25: #f6fef9;

    --color-bluegray-900: #101323;
    --color-bluegray-800: #293056;
    --color-bluegray-700: #363f72;
    --color-bluegray-600: #3e4784;
    --color-bluegray-500: #4e5ba6;
    --color-bluegray-400: #717bbc;
    --color-bluegray-300: #afb5d9;
    --color-bluegray-200: #d5d9eb;
    --color-bluegray-100: #eaecf5;
    --color-bluegray-50: #f8f9fc;
    --color-bluegray-25: #fcfcfd;

    --color-bluelight-900: #0b4a6f;
    --color-bluelight-800: #065986;
    --color-bluelight-700: #026aa2;
    --color-bluelight-600: #0086c9;
    --color-bluelight-500: #0ba5ec;
    --color-bluelight-400: #36bffa;
    --color-bluelight-300: #7cd4fd;
    --color-bluelight-200: #b9e6fe;
    --color-bluelight-100: #e0f2fe;
    --color-bluelight-50: #f0f9ff;
    --color-bluelight-25: #f5fbff;

    --color-blue-900: #194185;
    --color-blue-800: #1849a9;
    --color-blue-700: #175cd3;
    --color-blue-600: #1570ef;
    --color-blue-500: #2e90fa;
    --color-blue-400: #53b1fd;
    --color-blue-300: #84caff;
    --color-blue-200: #b2ddff;
    --color-blue-100: #d1e9ff;
    --color-blue-50: #eff8ff;
    --color-blue-25: #f5faff;

    --color-indigo-900: #2d3282;
    --color-indigo-800: #2d31a6;
    --color-indigo-700: #3538cd;
    --color-indigo-600: #444ce7;
    --color-indigo-500: #6172f3;
    --color-indigo-400: #8098f9;
    --color-indigo-300: #a4bcfd;
    --color-indigo-200: #c7d7fe;
    --color-indigo-100: #e0eaff;
    --color-indigo-50: #eef4ff;
    --color-indigo-25: #f5f8ff;

    --color-purple-900: #3e1c96;
    --color-purple-800: #4a1fb8;
    --color-purple-700: #5925dc;
    --color-purple-600: #6938ef;
    --color-purple-500: #7a5af8;
    --color-purple-400: #9b8afb;
    --color-purple-300: #bdb4fe;
    --color-purple-200: #d9d6fe;
    --color-purple-100: #ebe9fe;
    --color-purple-50: #f4f3ff;
    --color-purple-25: #fafaff;

    --color-pink-900: #851651;
    --color-pink-800: #9e165f;
    --color-pink-700: #c11574;
    --color-pink-600: #dd2590;
    --color-pink-500: #ee46bc;
    --color-pink-400: #f670c7;
    --color-pink-300: #faa7e0;
    --color-pink-200: #fcceee;
    --color-pink-100: #fce7f6;
    --color-pink-50: #fdf2fa;
    --color-pink-25: #fef6fb;

    --color-rose-900: #89123e;
    --color-rose-800: #a11043;
    --color-rose-700: #c01048;
    --color-rose-600: #e31b54;
    --color-rose-500: #f63d68;
    --color-rose-400: #fd6f8e;
    --color-rose-300: #fea3b4;
    --color-rose-200: #fecdd6;
    --color-rose-100: #ffe4e8;
    --color-rose-50: #fff1f3;
    --color-rose-25: #fff5f6;

    --color-orange-900: #7e2410;
    --color-orange-800: #9c2a10;
    --color-orange-700: #c4320a;
    --color-orange-600: #ec4a0a;
    --color-orange-500: #fb6514;
    --color-orange-400: #fd853a;
    --color-orange-300: #feb273;
    --color-orange-200: #fddcab;
    --color-orange-100: #ffead5;
    --color-orange-50: #fff6ed;
    --color-orange-25: #fffaf5;

    --gradient-gray: linear-gradient(
      67deg,
      #455569 0%,
      #647087 50%,
      #455569 100%
    );
    --gradient-primary: linear-gradient(
      67deg,
      #8427fb 0%,
      #7f84fe 50%,
      #8427fb 100%
    );

    --font-family: 'Circular Std', 'Nunito Sans', 'Helvetica Neue', Helvetica,
      Arial, sans-serif;

    --font-size-base: 1rem;
    --font-size-xl: calc(1.25 * var(--font-size-base));
    --font-size-lg: calc(1.125 * var(--font-size-base));
    --font-size-md: calc(1 * var(--font-size-base));
    --font-size-sm: calc(0.875 * var(--font-size-base));
    --font-size-xs: calc(0.75 * var(--font-size-base));

    --shadow-xs: 0px 1px 2px rgba(16, 24, 40, 0.05);
    --shadow-sm: 0px 1px 3px rgba(16, 24, 40, 0.1),
      0px 1px 2px rgba(16, 24, 40, 0.06);
    --shadow-md: 0px 4px 8px -2px rgba(16, 24, 40, 0.1),
      0px 2px 4px -2px rgba(16, 24, 40, 0.06);
    --shadow-lg: 0px 12px 16px -4px rgba(16, 24, 40, 0.08),
      0px 4px 6px -2px rgba(16, 24, 40, 0.03);
    --shadow-xl: 0px 20px 24px -4px rgba(16, 24, 40, 0.08),
      0px 8px 8px -4px rgba(16, 24, 40, 0.03);
    --shadow-xxl: 0px 24px 48px -12px rgba(16, 24, 40, 0.18);
    --shadow-xxxl: 0px 32px 64px -12px rgba(16, 24, 40, 0.14);

    --radius-sm: 4px;
    --radius-md: 8px;
    --radius-lg: 12px;
    --radius-xl: 16px;
  }
`;
