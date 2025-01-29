import { Browser, chromium, expect } from '@playwright/test';
import { test } from '../../fixures/authFixures';
import { TarPage } from '../../pages/TarPage';

test('add comment test', async ({ Commander: page }) => {
  let initialNumberOfComments;
  const home = new TarPage(page);
  
    await home.clickOnMegamatTichnut();
    await home.clickOnCourseRZTH();
    await home.clickOnNewTarDevTest();
    await home.clickOnShowAllSourcesBtn();

    const [newWindow] = await Promise.all([
      page.context().waitForEvent('page'),    // Wait for the 'popup' event
      await home.enterFirstSourceBtn(), // Action that opens the new window
    ]);    

    const tar = new TarPage(newWindow);
    
    await newWindow.click('#basic-button');
    await tar.openBPComments();
    await tar.submitComment();

}) 
