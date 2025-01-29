import { Browser, Page, test as base } from '@playwright/test';
import { LOGIN_VALUES, BASE_URL } from '../helpers/consts';
import { Context } from 'vm';
import path from 'path';

const createStorageStateContext = async (browser: Browser, PermString: string) => {
	return await browser.newContext({ storageState: path.join(__dirname, '../playwright/.auth/user.json') });
}; // create a function that will be used to create the context for the test from the storage states

export const enterWeboneh = async (page: Page) => {
	await page.goto(BASE_URL);

	await page.addLocatorHandler(page.locator('[data-test-id*="u"]').first(), async () => {
		await page.locator('[data-test-id*="u"]').first().click();
	});
}; // add a function that will be used to enter the page

const fixureLayout = async (context: Context, use) => {
	const page = await context.newPage();
	await enterWeboneh(page);

	await use(page);
}; // create a function that will be used to create the layout for the test

export type AuthFixures = Record<(typeof LOGIN_VALUES)[number], Page>  // create types dynamically based on information from consts.ts

export const PermissionFixures: {} = {};

LOGIN_VALUES.forEach((perms) => {
	// loop through generated permissions and add them
	PermissionFixures[perms] = async ({ browser }, use) => {
		const context = await createStorageStateContext(browser, perms);

		await fixureLayout(context, use);
	};
});

export const test = base.extend<AuthFixures>(PermissionFixures);
