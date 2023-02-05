Goal: To evaluate Playwright's abiltity to perform component testing for a React application

# Approach
- Incorporate a Typescript React app
- Use Playwright to reference the app
- Confirm page attributes and include visual regression test

## CODE PRIOR SETUP (REFERENCE ONLY)
- Created a typescript react app as a starting point
**npx create-react-app react-page --template typescript**
- Confiming compilation using npm start from the subdirectory

- Installed Playwright pre release version for analysing the React component
**npm init playwright@latest -- --ct**

## CODE SETUP
**npm i**
**npx playwright install**
**cd react-page**
**npm i**



## EXECUTION 
  Runs the component tests.
  **npm run test-ct**

  Runs the tests only on Desktop Chrome.
  **npm run test-ct -- --project=chromium**

  Runs the tests in the specific file.
  **npm run test-ct App.test.ts**


  Runs the tests in debug mode.
  **npm run test-ct -- --debug**


### INFORMATION
Using two Project entries in the playwright-ct.config.ts file to get the react app to work on 
- 1368x768 low desktop resolution
- 360x800 most common mobile resolution https://gs.statcounter.com/screen-resolution-stats/mobile/worldwide

Playwright has entry point files to setup a page object before putting components into it
These are the index.html and index.ts in the playwright director
Component tests will render part of the page with the CSS. 
If there are CSS files that are locally stored as part of the React application, these may need to be added to the index.ts

The Playwright test file lives with the React Component in it's directory.
The react app initially comes with a test for each component (now has an extension of tsxignore)

### TROUBLESHOOTING
Initially encountered the following errors, including corrections below

ERROR "[vite]: Rollup failed to resolve import "react" from "D:/PROJECTS_GIT/PlaywrightComponentTesting/playwright/index.ts".
This is most likely unintended because it can break your application at runtime.
If you do want to externalize this module explicitly add it to
`build.rollupOptions.external`"
WORKAROUND: Add  "react": "^18.2.0", and "react-dom": "^18.2.0" as dev dependencies in my package.json

ERROR: "Binding element 'mount' implicitly has an 'any' type.",
WORKAROUND: The test spec files need to have a tsx extension to prevent eslint issues