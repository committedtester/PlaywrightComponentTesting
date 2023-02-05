
Using a typescript react app as a starting point
npx create-react-app react-page --template typescript
(confiming compilation using npm start from the subdirectory)

Using playwright to analyse the component
npm init playwright@latest -- --ct





Playwright has entry point files to setup page before putting components into it
- index.html and index.js 
 


- Component tests will render part of the page with the CSS



npm run test-ct
    Runs the component tests.

  npm run test-ct -- --project=chromium
    Runs the tests only on Desktop Chrome.

  npm run test-ct App.test.ts
    Runs the tests in the specific file.

  npm run test-ct -- --debug
    Runs the tests in debug mode.


NOTE: Hit this issue which I had to diagnose
"[vite]: Rollup failed to resolve import "react" from "D:/PROJECTS_GIT/PlaywrightComponentTesting/playwright/index.ts".
This is most likely unintended because it can break your application at runtime.
If you do want to externalize this module explicitly add it to
`build.rollupOptions.external`"

The workaround was to add  "react": "^18.2.0", and "react-dom": "^18.2.0" as dev dependencies in my package.json