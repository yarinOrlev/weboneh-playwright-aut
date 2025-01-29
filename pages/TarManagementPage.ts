import { expect, Locator, Page } from '@playwright/test';

export class TarManagementPage {
	page: Page;
	private selectMegama: Locator;
	private tichnutMegamaSelect: Locator;
	private psyMegamaSelect: Locator;
	private qaMegamaSelect: Locator;
	private tichnutStudMegamaSelect: Locator;
	private megamaMenuButton: Locator;
	private addSubjectButton: Locator;
	private manageCommentInMegama: Locator;
	private editNameButton: Locator;
	private addSubjectNameField: Locator;
	private addSubjectTypeOfCommentsButton: Locator;
	private listOfAddSubjectTypeOfComments: Locator;
	private addSubjectToMegmaCommentTypeItzuv: Locator;
	private addSubjectToMegmaCommentTypeKriut: Locator;
	private addSubjectToMegmaCommentTypeStandartim: Locator;
	private addSubjectToMegmaCommentTypeSikum: Locator;
	private addSubjectToMegmaCommentTypeNekudaChiyuvit: Locator;
	private addSubjectToMegmaCommentTypeMimush: Locator;
	private addSubjectToMegmaCommentTypeBP: Locator;
	private addSubjectToMegmaCommentTypeKriutTichnut: Locator;
	private addSubjectToMegmaCommentTypeTachzuka: Locator;
	private addSubjectToMegmaCommentTypeHearaKlalit: Locator;
	private toggleTreeViewButtons : Locator;
	private addSubjectInMegama : Locator;
	private manageMegamaComments: Locator;
	private editMegamaNameButton: Locator;
	private editSubjectNameField: Locator;
	private editSubjectCommentsSelect: Locator;
	private editSubjectCancelButton: Locator;
	private editSubjectSaveBtn: Locator;
	private editMegamaNameField: Locator;


	


	constructor(page: Page) {
		this.page = page;
		this.editMegamaNameField = this.page.locator("[id='input-503']");
		this.editSubjectSaveBtn = this.page.getByTestId('editSubjectSaveBtn');
		this.editSubjectCancelButton = this.page.getByTestId('editSubjectCancelBtn');
		this.editSubjectCommentsSelect = this.page.getByRole('combobox').locator('i');
		this.editSubjectNameField = this.page.getByTestId('editSubjectNameField');
		this.editMegamaNameButton = this.page.getByTestId('editMegamaName');
		this.manageMegamaComments = this.page.getByTestId('manageMegamaComments');
		this.addSubjectInMegama =  this.page.getByTestId('addSubjectInMegama');
		this.tichnutMegamaSelect = this.page.locator("[id='list-item-358-0']");
		this.psyMegamaSelect = this.page.locator("[id='list-item-358-1']");
		this.qaMegamaSelect = this.page.locator("[id='list-item-358-2']");
		this.tichnutStudMegamaSelect = this.page.locator("[id='list-item-358-3']");
		this.megamaMenuButton = this.page.getByTestId("megamaMenuButton");
		this.addSubjectButton = this.page.getByTestId("tree-context-menu-item-0");
		this.manageCommentInMegama = this.page.getByTestId("tree-context-menu-item-1");
		this.editNameButton = this.page.getByTestId("tree-context-menu-item-2");
		this.addSubjectNameField = this.page.locator("[id='input-797']");
		this.addSubjectTypeOfCommentsButton = this.page.locator("[id='input-1000']");
		this.listOfAddSubjectTypeOfComments = this.page.locator("//*[@id = 'list-1000']/div//i");
		this.addSubjectToMegmaCommentTypeStandartim = this.page.locator("[id='list-item-808-2']");
		this.addSubjectToMegmaCommentTypeItzuv = this.page.locator("[id='list-item-808-0']");
		this.addSubjectToMegmaCommentTypeKriut = this.page.locator("[id='list-item-808-1']");
		this.addSubjectToMegmaCommentTypeSikum= this.page.locator("[id='list-item-808-3']");
		this.addSubjectToMegmaCommentTypeNekudaChiyuvit= this.page.locator("[id='list-item-808-4']");
		this.addSubjectToMegmaCommentTypeMimush= this.page.locator("[id='list-item-808-5']");
		this.addSubjectToMegmaCommentTypeBP= this.page.locator("[id='list-item-808-6']");
		this.addSubjectToMegmaCommentTypeKriutTichnut= this.page.locator("[id='list-item-808-7']");
		this.addSubjectToMegmaCommentTypeTachzuka= this.page.locator("[id='list-item-808-8']");
		this.addSubjectToMegmaCommentTypeHearaKlalit= this.page.locator("[id='list-item-808-9']");
		this.toggleTreeViewButtons = this.page.locator(".v-treeview-node__toggle");
		
		
	}

	// Methods - add/edit subject to megama
	clickOnAddSubjectButton = async () => await this.addSubjectInMegama.click();
	enterNewSubjectName = async (newNameOfSubject: string) => await this.editSubjectNameField.fill(newNameOfSubject);
	clickOnEditSubjectCommentsSelect = async () => await this.editSubjectCommentsSelect.click();
	selectCommentTypeForNewSubject = async(commentName: string) => await this.page.getByRole('option', { name: `${commentName}` });
	clickOnCancelEditAddSubject = async() => this.editSubjectCancelButton.click();
	clickOnSaveEditAddSubject = async() => this.editSubjectSaveBtn.click();		









	// Methods
	enterNewMegamaNameField = async (newMegamaName: string) =>{this.editMegamaNameField.fill(newMegamaName);}
	clickOnCommentTypeInAddSubjectByIndex = async (index : number) => await this.listOfAddSubjectTypeOfComments.nth(index);

	clickAddSubjectTypeOfComments= async () => await this.addSubjectTypeOfCommentsButton.click();

	fillAddSubjectNameField = async (nameOfSubject: string) => await this.addSubjectNameField.fill(nameOfSubject);

	 openTreeItemByName = async (name: string) => await this.page.locator(`//*[contains(@data-testid,'tree-item')]/span[contains(text(),'${name}')]`);

	 clickOnManageCommentInMegama = async () => await this.manageCommentInMegama.click();

	 clickOnEditMegamaNameButton = async () => await this.editMegamaNameButton.click();

	 clickOnMegamaMenuButton = async () => await this.megamaMenuButton.click();
	
	 clickOnSelectMegama = async () => await this.selectMegama.click();

	 selectTichnutMegama = async () => await this.tichnutMegamaSelect.click();

	 selectPsyMegama = async () => await this.psyMegamaSelect.click();

	 selectQaMegama = async () => await this.qaMegamaSelect.click();

	 selectTichnutStudMegama = async () => await this.tichnutStudMegamaSelect.click();

	 click = async (locator: Locator) => {
		await locator.click();
	  };

	  clickItzuv = async () => {
		await this.click(this.addSubjectToMegmaCommentTypeItzuv);
	  };
	
	  clickKriut = async () => {
		await this.click(this.addSubjectToMegmaCommentTypeKriut);
	  };
	
	  clickStandartim = async () => {
		await this.click(this.addSubjectToMegmaCommentTypeStandartim);
	  };
	
	  clickSikum = async () => {
		await this.click(this.addSubjectToMegmaCommentTypeSikum);
	  };
	
	  clickNekudaChiyuvit = async () => {
		await this.click(this.addSubjectToMegmaCommentTypeNekudaChiyuvit);
	  };
	
	  clickMimush = async () => {
		await this.click(this.addSubjectToMegmaCommentTypeMimush);
	  };
	
	  clickBP = async () => {
		await this.click(this.addSubjectToMegmaCommentTypeBP);
	  };
	
	  clickKriutTichnut = async () => {
		await this.click(this.addSubjectToMegmaCommentTypeKriutTichnut);
	  };
	
	  clickTachzuka = async () => {
		await this.click(this.addSubjectToMegmaCommentTypeTachzuka);
	  };
	
	  clickHearaKlalit = async () => {
		await this.click(this.addSubjectToMegmaCommentTypeHearaKlalit);
	  };

	  
	
}