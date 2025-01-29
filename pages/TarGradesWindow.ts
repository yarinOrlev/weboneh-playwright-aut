import { expect, Locator, Page } from '@playwright/test';

export class TarGradesWindow {
	page: Page;
	private checkedSourcesButton: Locator;
	

	
	constructor(page: Page) {
		this.page = page;

		this.checkedSourcesButton = this.page.locator("[id='input-1350']");
	
		
	}

	// Methods
	
	 clickOnCheckedSourcesButton = async () => await this.checkedSourcesButton.click();








	
	
}