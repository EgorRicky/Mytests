import { Locator, Page, expect } from '@playwright/test';

import config from '../config';

export class CreationFlowPage {
  page: Page;

  createLauncherButton: Locator;

  createLauncherNameInput: Locator;

  createNextButton: Locator;

  osw: Locator;

  osm: Locator;

  generalSettingsButton: Locator;

  settingsLauncherNameInput: Locator;

  oauthList: Locator;

  constructor(page: Page) {
    this.page = page;
    this.createLauncherButton = page.locator('[data-id=createButton]');
    this.createLauncherNameInput = page.locator('[test-id=nameInput]');
    this.createNextButton = page.locator('[data-id=NextButton]');
    this.osw = page.locator('[data-id=osw]');
    this.osm = page.locator('[data-id=osm]');
    this.generalSettingsButton = page.locator('[data-id=generalSettings]');
    this.settingsLauncherNameInput = page.locator('[test-id=settingsLauncherNameInput]');
    this.oauthList = page.locator('[name="settings.oauth_client_id"]');
  }

  async goto() {
    await this.page.goto(
      `${config.baseURL}/${config.merchantId}/projects/${config.publisherProjectId}?token=${config.token}`,
    );
    await expect(this.createLauncherButton).toBeVisible();
  }

  async fillName(launcherName: string) {
    await this.createLauncherNameInput.waitFor({ state: 'visible' });
    await this.createLauncherNameInput.fill('');
    await this.createLauncherNameInput.fill(launcherName);
  }

  async clickCreate() {
    await this.createLauncherButton.click();
  }

  async createDisabled() {
    await this.createLauncherButton.isDisabled();
  }

  async checkOnMacos() {
    await this.osm.check();
  }

  async checkOnWinos() {
    await this.osw.check();
  }

  async clickNext() {
    await this.createNextButton.click();
  }

  async oauthVisible() {
    await this.oauthList.waitFor({ state: 'visible', timeout: 120000 });
  }

  async clickGeneralSettings() {
    await this.generalSettingsButton.waitFor({ state: 'visible', timeout: 200000 });
    await this.generalSettingsButton.click();
  }

  async expectation(launcherName: string) {
    await expect(this.settingsLauncherNameInput).toHaveValue(launcherName);
  }
}
