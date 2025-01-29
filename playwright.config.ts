import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
	testDir: './tests',
	fullyParallel: true,
	forbidOnly: !!process.env.CI,
	retries: process.env.CI ? 2 : 0,
	workers: process.env.CI ? 1 : undefined,
	reporter: [["line"], ["allure-playwright"]],
	timeout: 1000 * 60 * 3,
	expect: { timeout: 1000 * 60 * 3 },
	use: {
		trace: 'on',
		headless: true,
		ignoreHTTPSErrors: true,
		viewport: { width: 1920, height: 1080 },
	},

	projects: [
		{ name: 'setup', testMatch: /.*\.setup\.ts/ },

		{
			name: 'Weboneh',
			testDir: './tests', // Ensures this applies to the tests directory
			use: { 
				...devices['Desktop Chrome'], 
				viewport: { width: 1920, height: 1080 } // Fullscreen for all tests in this project
			},
			dependencies: process.env.CI ? undefined : ['setup']
		},
	],
});
