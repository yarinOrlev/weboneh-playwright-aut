import { Browser, chromium, expect } from '@playwright/test';
import { test } from '../../fixures/authFixures';
import { TarPage } from '../../pages/TarPage';

test('edit comment test', async ({ Commander: page }) => {
  const home = new TarPage(page);
  const commentText = '- בדיקת הערה';
  
  await home.clickOnMegamatTichnut();
  await home.clickOnCourseRZTH();
  await home.clickOnNewTarDevTest();
  await home.clickOnShowAllSourcesBtn();

  // Corrected Promise.all block without the extra await
  const [newWindow] = await Promise.all([
    page.waitForEvent('popup'),      // Wait for the 'popup' event
    home.enterFirstSourceBtn(),           // Action that opens the new window
  ]);    

  // Switch to the new window and interact with it
  const tar = new TarPage(newWindow);
  await tar.clickOnFirstComment();
  await tar.editCommentText(commentText);
});
