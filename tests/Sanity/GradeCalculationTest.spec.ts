import { Browser, chromium, expect } from '@playwright/test';
import { test } from '../../fixures/authFixures';
import { TarPage } from '../../pages/TarPage';
import commentTypes from '../../helpers/commentTypes'
import { studentNumbers } from '../../helpers/studentNumbers';

test('grade calc test', async ({ Commander: page }) => {
  const tarURL = 'https://weboneh.dev.bsmch.net/tar/893';
  const tarTwentyName = 'twentyPer.sql';
  const tarThirtyName = 'thirtyPer.sql';
  const tarFiftyName = 'fiftyPer.sql';
  const twentyBPPoints = '20';
  const thirtyMimushPoints = '30';
  const FiftyKriutcPoints = '50';
  page.goto(tarURL);

  const home = new TarPage(page);
  await home.clickOnShowAllSourcesBtn();

  // Corrected Promise.all block without the extra await
  const [tarTwentyPer] = await Promise.all([
    page.waitForEvent('popup'),      
    home.enterSourceByNumberOnList(1),           
  ]); 

  await tarTwentyPer.waitForLoadState('domcontentloaded');
  
  try {
    await tarTwentyPer.waitForFunction(
      (expectedTitle) => document.title === expectedTitle,
      `${studentNumbers.studentNumber101} - ${tarTwentyName}`
    );
  } catch (error) {
    console.error('Error while waiting for the title:', error.message);
    throw error; // Re-throw or handle the error
  }
  
  
  // Switch to the new window and interact with it
  const tarTwenty = new TarPage(tarTwentyPer);
  await tarTwenty.turnOnOffCRmode(); // On
  await tarTwenty.addGeneralComment();
  await tarTwenty.clickOngeneralCommentOptionsButton();
  await tarTwenty.clickOngeneralCommentOptionsButton();
  await tarTwenty.selectGeneralCommentType(commentTypes.TYPE_BP);
  await tarTwenty.enterGeneralCommentPoints(twentyBPPoints);
  await tarTwenty.editCommentText(twentyBPPoints);

  await tarTwentyPer.close();

  const [tarThirtyPer] = await Promise.all([
    page.waitForEvent('popup'),      
    home.enterSourceByNumberOnList(2),           
  ]); 

  await tarThirtyPer.waitForLoadState('domcontentloaded');

  try {
    await tarThirtyPer.waitForFunction(
      (expectedTitle) => document.title === expectedTitle,
      `${studentNumbers.studentNumber101} - ${tarThirtyName}`
    );
  } catch (error) {
    console.error('Error while waiting for the title:', error.message);
    throw error; // Re-throw or handle the error
  }
  

  const tarThirty = new TarPage(tarThirtyPer);
  await tarThirty.turnOnOffCRmode(); // On
  await tarThirty.addGeneralComment();
  await tarThirty.clickOngeneralCommentOptionsButton();
  await tarThirty.clickOngeneralCommentOptionsButton();
  await tarThirty.selectGeneralCommentType(commentTypes.TYPE_MIMUSH);
  await tarThirty.enterGeneralCommentPoints(thirtyMimushPoints);
  await tarThirty.editCommentText(thirtyMimushPoints);

  await tarThirtyPer.close();

  const [tarFiftyPer] = await Promise.all([
    page.waitForEvent('popup'),      
    home.enterSourceByNumberOnList(3),           
  ]); 

  await tarFiftyPer.waitForLoadState('domcontentloaded');

  try {
    await tarFiftyPer.waitForFunction(
      (expectedTitle) => document.title === expectedTitle,
      `${studentNumbers.studentNumber101} - ${tarFiftyName}`
    );
  } catch (error) {
    console.error('Error while waiting for the title:', error.message);
    throw error; // Re-throw or handle the error
  }

  const tarFifty = new TarPage(tarFiftyPer);
  await tarFifty.turnOnOffCRmode(); // On
  await tarFifty.addGeneralComment();
  await tarFifty.clickOngeneralCommentOptionsButton();
  await tarFifty.clickOngeneralCommentOptionsButton();
  await tarFifty.selectGeneralCommentType(commentTypes.TYPE_KRIUT);
  await tarFifty.enterGeneralCommentPoints(FiftyKriutcPoints);
  await tarFifty.editCommentText(FiftyKriutcPoints);

  await tarFiftyPer.close();

  await page.reload();
  
  await home.clickOnOpenGradesButton();

  const remainingMimushPoints = await home.calculateRemainingPoints(thirtyMimushPoints);
  await home.validateBPGradePerSource(remainingMimushPoints);
  const remainingBPPoints = await home.calculateRemainingPoints(twentyBPPoints);
  await home.validateBPGradePerSource(remainingBPPoints);
  const remainingKriutPoints = await home.calculateRemainingPoints(FiftyKriutcPoints);
  await home.validateBPGradePerSource(remainingKriutPoints);

  
}) 
