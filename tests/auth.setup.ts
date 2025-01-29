import { test as setup, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import path from 'path';
import { LOGIN_VALUES, BASE_URL } from '../helpers/consts';
import * as allure from "allure-js-commons";

const authFile = path.join(__dirname, '../playwright/.auth/user.json');

setup('authenticate', async ({ page }) => {
    await allure.feature('Authentication');
    await allure.story('User Login and Authentication');
    await allure.description('This test ensures the user can log in and stores the authentication state for subsequent tests.');
    await allure.severity('critical');
    await allure.label('component', 'Login');

    await allure.step('Navigate to the base URL', async () => {
        await page.goto(BASE_URL);
    });

    const loginPage = new LoginPage(page);

    await allure.step('Fill in the email', async () => {
        await loginPage.fillMail('u6543212@bsmch.net');
    });

    await allure.step('Click next after filling in email', async () => {
        await loginPage.clickNext();
    });

    await allure.step('Fill in the password', async () => {
        await loginPage.fillPassword('TheLessIKnowTheBetter00');
    });

    await allure.step('Click sign in after filling in password', async () => {
        await loginPage.clickSignIn();
    });

    await allure.step('Wait for final authentication response', async () => {
        await page.waitForResponse('https://login.microsoftonline.com/common/federation/OAuth2ClaimsProvider');
    });

    await allure.step('Save authentication state', async () => {
        await page.context().storageState({ path: authFile });
    });

    await allure.step('Close the page', async () => {
        await page.close();
    });
});
