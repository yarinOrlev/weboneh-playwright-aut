import { Browser, chromium, expect } from '@playwright/test';
import { test } from '../../fixures/authFixures';
import { TarPage } from '../../pages/TarPage';

test('delete comment test', async ({ Commander: page }) => {
  let initialNumberOfComments;
  const home = new TarPage(page);
  
    await home.clickOnMegamatTichnut();
    await home.clickOnCourseRZTH();
    await home.clickOnNewTarDevTest();
    await home.clickOnShowAllSourcesBtn();

    const [newWindow] = await Promise.all([
      page.waitForEvent('popup'),    // Wait for the 'popup' event
       home.enterFirstSourceBtn(), // Action that opens the new window
    ]);    
    
    await newWindow.click('#basic-button')

    const tar = new TarPage(newWindow);

    await tar.deleteLastComment();

}) 
