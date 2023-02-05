/* eslint-disable testing-library/prefer-screen-queries */
import {test,expect} from '@playwright/experimental-ct-react';
import {App} from './App';

test("Confirm rendering of React App", async ({mount, page}) => {
    const component =await mount(
    <App />
    );

    await expect.soft(component).toContainText("Learn React");

    const appLog = await page.locator('.App-logo');
    await expect.soft(appLog).toBeVisible();

    await expect(page).toHaveScreenshot();


    //Experimental
    /*
    await page.getByRole('link', { name: 'Learn React' }).click();

    await page.pause();
    await expect(page).toHaveScreenshot();
*/
})