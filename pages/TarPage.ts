import { expect, Locator, Page } from '@playwright/test';
import { symlink } from 'fs';

export class TarPage {
  // Fields
  page: Page;

  // Locators - Buttons and Links
  private showAllSourcesSortBtn: Locator;
  private enterReactSourceBtn: Locator;
  private megamatTichnut: Locator;
  private courseRTZH: Locator;
  private newTarDevTestTARATZ: Locator;
  private checkTaratzForTesting: Locator;
  private threeDotsBtn: Locator;
  private tarManagementButton: Locator;
  private specialGradesButton: Locator;
  private mySourcesButton: Locator;
  private addNewTarButton: Locator;
  private openGradesButton: Locator;
  private generalCommentOptionsButton: Locator;
  private basicButton: Locator;
  private deleteCommentButton: Locator;
  private addCommentOnCommentButton: Locator;
  private saveCommentOnCommentButton: Locator;
  private switchCommentOnCommentButton: Locator;
  private replaceCommentButton;
  private closeCommentOnCommentButton;
  

  // Locators - Comments
  private commentCardList: Locator;
  private commentTextField: Locator;
  private generalCommentOptions: Locator;
  private generalCommentPoints: Locator;
  private newCommentTextField: Locator;
  private commentOnCommentTextField: Locator;


  // Locators - Grades and Management
  private gradesTableRows: Locator;
  private gradesTableTableData: Locator;
  private tarManagementMegamaList: Locator;

  // Constructor
  constructor(page: Page) {
    this.page = page;

    // Initialize Locators
    this.closeCommentOnCommentButton = this.page.getByTestId('closeCommentToComment');
    this.replaceCommentButton = this.page.getByTestId('replace-comment');
    this.switchCommentOnCommentButton = this.page.getByTestId('suggestCommentButton');
    this.checkTaratzForTesting = this.page.getByText('תרץ בדיקת חילוק אחוזי ציונים');
    this.saveCommentOnCommentButton = this.page.getByTestId('sendCommentToComment');
    this.commentOnCommentTextField = this.page.locator("[placeholder = 'הגב על ההערה']");
    this.addCommentOnCommentButton = this.page.getByTestId('commentOnCommentButton');
    this.showAllSourcesSortBtn = this.page.getByTestId('allSources');
    this.enterReactSourceBtn = this.page.getByTestId('openSourceButton');
    this.commentCardList = this.page.getByTestId('comment-card');
    this.megamatTichnut = this.page.getByText('תכנות', { exact: true });
    this.courseRTZH = this.page.getByText('רצ"ח', { exact: true });
    this.newTarDevTestTARATZ = this.page.getByText('newTarDevTest');
    this.threeDotsBtn = this.page.locator('#basic-button');
    this.deleteCommentButton = this.page.getByTestId('delete-comment-button');
    this.commentTextField = this.page.getByTestId('commentTextInput');
    this.tarManagementButton = this.page.getByTestId('tarManagementButton');
    this.tarManagementMegamaList = this.page.locator("[role='option']");
    this.generalCommentOptions = this.page.locator("[id='menu-הערה כללית']  li");
    this.generalCommentPoints = this.page.locator("input[type='number']");
    this.basicButton = this.page.locator("[id='basic-button']");
    this.generalCommentOptionsButton = this.page.getByTestId("comment-type-selector");
    this.openGradesButton = this.page.locator("[id='open-grades-button']");
    this.gradesTableRows = this.page.locator(".my-sources-table tr");
    this.gradesTableTableData = this.page.locator(".my-sources-table td");
    this.specialGradesButton = this.page.locator("[id='special-comment-button']");
    this.mySourcesButton = this.page.getByTestId("mySources");
    this.addNewTarButton = this.page.locator("[id='add-new-tar']");
  }

  // Methods - Actions
  public async clickOnCancelCommentOnCommentButton(){
    await this.closeCommentOnCommentButton.click();
  }
  public async clickOnReplaceCommentButton(){
    await this.replaceCommentButton.click();
  }
  public async clickOnSwitchCommentOnCommentButton(){
    await this.switchCommentOnCommentButton.click();
  }
  public async clickOnTaratzForTesting(){
    await this.checkTaratzForTesting.click();
  }
  public async sendCommentOnComment(){
    await this.saveCommentOnCommentButton.click();
  }

  public async clickOnFirstAddCommentOnCommentButton(){
    await this.addCommentOnCommentButton.first().click();
  }

  public async clickOnAddNewTarButton() {
    await this.addNewTarButton.click();
  }

  public async clickOnMySourcesButton() {
    await this.mySourcesButton.click();
  }

  public async clickOnSpecailGradesButton() {
    await this.specialGradesButton.click();
  }

  public async clickOnOpenGradesButton() {
    await this.openGradesButton.click();
  }

  public async clickOngeneralCommentOptionsButton() {
    await this.generalCommentOptionsButton.click();
  }

  public async clickOnBasicButton() {
    await this.basicButton.click();
  }

  public async clickOnTarManagementButton() {
    await this.tarManagementButton.click();
  }

  public async clickOnShowAllSourcesBtn() {
    await this.showAllSourcesSortBtn.click();
  }

  public async clickOnNewTarDevTest() {
    await this.newTarDevTestTARATZ.click();
  }

  public async clickOnCourseRZTH() {
    await this.courseRTZH.click();
  }

  public async clickOnMegamatTichnut() {
    await this.megamatTichnut.click();
  }

  public async enterFirstSourceBtn() {
    await this.enterReactSourceBtn.first().click();
  }

  public async enterSourceByNumberOnList(placement: number) {
    await this.enterReactSourceBtn.nth(placement - 1).click();
  }

  // Methods - Comments
  public async enterCommentOnComment(commentOnComment: string){
    await this.commentOnCommentTextField.fill(commentOnComment);
  }
  
  public async enterGeneralCommentPoints(points : string){
    await this.generalCommentPoints.fill(points);
  }
  
  public async selectGeneralCommentType(type: string){
    await this.page.getByRole('option', { name: `${type}`}).click();
  }

  public async numberOfCommentsInSource(): Promise<number> {
    await this.page.waitForSelector('[data-testid="comment-card"]');
    return this.page.locator('[data-testid="comment-card"]').count();
  }

  public async addGeneralComment() {
    await this.page.waitForLoadState('domcontentloaded');
    await this.page.keyboard.down('Control');
    await this.page.keyboard.down('Alt');
    await this.page.keyboard.press('p');
    await this.page.keyboard.up('Alt');
    await this.page.keyboard.up('Control');
  }

  public async editCommentText(commentText: string) {
    await this.commentTextField.click();
    await this.commentTextField.first().type(commentText);
    await this.page.keyboard.press('Enter');
  }

  public async clickOnFirstComment() {
    await this.commentCardList.first().click();
  }

  public async deleteFirstComment() {
    await this.deleteCommentButton.first().click();
  }

  public async deleteLastComment() {
    await this.deleteCommentButton.last().click();
  }

  // Methods - Grades
  public async calculateRemainingPoints(PointsInString: string): Promise<string> {
    const commentValue = parseInt(PointsInString, 10);
    const remainingPoints = 100 - commentValue;
    return remainingPoints.toString();
  }

  public async validateGradeCalc(BPPointsInTar: string, MimushPointsInTar: string, KriutPointsInTar: string) {
    await this.validateBPGradePerSource(await this.calculateRemainingPoints(BPPointsInTar));
    await this.validateMimushGradePerSource(await this.calculateRemainingPoints(MimushPointsInTar));
    await this.validateKriutGradePerSource(await this.calculateRemainingPoints(KriutPointsInTar));
  }

  public async validateKriutGradePerSource(KriutPointsInTar: string) {
    const actualKriutPoints = await this.gradesTableRows.nth(1).locator("td").nth(4).innerText();
    expect(actualKriutPoints).toBe(KriutPointsInTar);
  }

  public async validateMimushGradePerSource(MimushPointsInTar: string) {
    const actualMimushPoints = await this.gradesTableRows.nth(1).locator("td").nth(2).innerText();
    expect(actualMimushPoints).toBe(MimushPointsInTar);
  }

  public async validateBPGradePerSource(BPPointsInTar: string) {
    const actualBPPoints = await this.gradesTableRows.nth(1).locator("td").nth(3).innerText();
    expect(actualBPPoints).toBe(BPPointsInTar);
  }

  public async getStudentKriutGradeFromGradesTable() {
    return this.gradesTableRows.nth(1).locator("td").nth(4).innerText();
  }

  public async getStudentBPGradeFromGradesTable() {
    return this.gradesTableRows.nth(1).locator("td").nth(3).innerText();
  }

  public async getStudentMimushGradeFromGradesTable() {
    return this.gradesTableRows.nth(1).locator("td").nth(2).innerText();
  }

  public async getStudentNameFromGradesTable() {
    return this.gradesTableRows.nth(1).locator("td").nth(1).innerText();
  }

  public async getStudentNumberFromGradesTable() {
    return this.gradesTableRows.nth(1).locator("td").nth(0).innerText();
  }

  // Methods - Keyboard Shortcuts
  public async turnOnOffCRmode() {
    await this.page.keyboard.down('Control');
    await this.page.keyboard.down('Alt');
    await this.page.keyboard.press('r');
    await this.page.keyboard.up('Alt');
    await this.page.keyboard.up('Control');
  }

  public async openBPComments() {
    await this.page.waitForLoadState('domcontentloaded');
    await this.page.keyboard.down('Control');
    await this.page.keyboard.down('Alt');
    await this.page.keyboard.press('x');
    await this.page.keyboard.up('Alt');
    await this.page.keyboard.up('Control');
  }

  public async openImplementationComments() {
    await this.page.waitForLoadState('domcontentloaded');
    await this.page.keyboard.down('Control');
    await this.page.keyboard.down('Alt');
    await this.page.keyboard.press('z');
    await this.page.keyboard.up('Alt');
    await this.page.keyboard.up('Control');
  }

  public async openReadabilityComments() {
    await this.page.waitForLoadState('domcontentloaded');
    await this.page.keyboard.down('Control');
    await this.page.keyboard.down('Alt');
    await this.page.keyboard.press('c');
    await this.page.keyboard.up('Alt');
    await this.page.keyboard.up('Control');
  }

  public async submitComment() {
    await this.page.keyboard.press('Enter');
    await this.page.keyboard.press('Enter');
  }

  public async Enter(){
    await this.page.keyboard.press('Enter');
  }
}