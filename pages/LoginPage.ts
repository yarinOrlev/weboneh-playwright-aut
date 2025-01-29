import { expect, Locator, Page } from '@playwright/test';

export class LoginPage {
	page: Page;
	readonly mail: Locator;
	readonly next: Locator;
	readonly password: Locator;
	readonly signIn: Locator;

	constructor(page: Page) {
		this.page = page;
		this.mail = this.page.getByPlaceholder('u1234567@bsmch.net');
		this.next = this.page.getByRole('button', { name: 'Next' });
		this.password = this.page.getByPlaceholder('Password');
		this.signIn = this.page.getByRole('button', { name: 'Sign in' });
	}

	// Methods
	fillMail = (mail: string) => this.mail.fill(mail);

	clickNext = () => this.next.click();

	fillPassword = (password: string) => this.password.fill(password);

	clickSignIn = () => this.signIn.click();
}
