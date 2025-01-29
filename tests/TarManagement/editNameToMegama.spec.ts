import { Browser, chromium, expect } from '@playwright/test';
import { test } from '../../fixures/authFixures';
import { TarPage } from '../../pages/TarPage';
import { TarManagementPage } from '../../pages/TarManagementPage';

test('edit name to megama test', async ({ Commander: page }) => {
    const newMegamaName = 'תכנות - אוטומטי'
    const home = new TarPage(page);
    const tarManage = new TarManagementPage(page);

    home.clickOnTarManagementButton();
    tarManage.selectTichnutMegama();
    tarManage.clickOnMegamaMenuButton();
    tarManage.clickOnEditMegamaNameButton();
    tarManage.enterNewMegamaNameField(newMegamaName);
    // need data-testid to save button to complete the test


    

}) 
