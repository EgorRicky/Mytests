import { test } from '@playwright/test';

import { deleteLauncher } from '../afterEach/afterEach';
import { getLauncherId } from '../helpers/getLauncherId';
import { getLauncherName } from '../helpers/getLauncherName';
import { CreationFlowPage } from '../pageObject/creationFlow';

test.describe('creation flow', () => {
  let launcherId = '';

  test.afterEach(async () => {
    await deleteLauncher(launcherId);
    launcherId = '';
  });

  test('Creation page loaded well', async ({ page }) => {
    const creationFlow = new CreationFlowPage(page);
    await creationFlow.goto();
  });

  test('I can create launcher with one os', async ({ page }) => {
    const launcherName = getLauncherName();
    const creationFlow = new CreationFlowPage(page);
    await creationFlow.goto();
    await creationFlow.clickCreate();
    await creationFlow.fillName(launcherName);
    await creationFlow.clickNext();
    await creationFlow.clickNext();
    await creationFlow.oauthVisible();
    await creationFlow.clickNext();
    await creationFlow.clickGeneralSettings();
    const path = page.url();
    launcherId = getLauncherId(path);
    await creationFlow.expectation(launcherName);
  });

  test('I can create launcher with two os', async ({ page }) => {
    const launcherName = getLauncherName();
    const creationFlow = new CreationFlowPage(page);
    await creationFlow.goto();
    await creationFlow.clickCreate();
    await creationFlow.fillName(launcherName);
    await creationFlow.clickNext();
    await creationFlow.checkOnMacos();
    await creationFlow.checkOnWinos();
    await creationFlow.clickNext();
    await creationFlow.clickNext();
    await creationFlow.clickGeneralSettings();
    const path = page.url();
    launcherId = getLauncherId(path);
    await creationFlow.expectation(launcherName);
  });

  test('I can create launcher with both os', async ({ page }) => {
    const launcherName = getLauncherName();
    const creationFlow = new CreationFlowPage(page);
    await creationFlow.goto();
    await creationFlow.clickCreate();
    await creationFlow.fillName(launcherName);
    await creationFlow.clickNext();
    await creationFlow.checkOnMacos();
    await creationFlow.clickNext();
    await creationFlow.clickNext();
    await creationFlow.clickGeneralSettings();
    const path = page.url();
    launcherId = getLauncherId(path);
    await creationFlow.expectation(launcherName);
  });

  test('I cant create with bad symbols', async ({ page }) => {
    const launcherName = "|~";
    const creationFlow = new CreationFlowPage(page);
    await creationFlow.goto();
    await creationFlow.clickCreate();
    await creationFlow.fillName(launcherName);
    await creationFlow.clickNext();
    await creationFlow.createDisabled();
  });
});
