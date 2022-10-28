import config from '../config';
const { I } = inject();

locators = {
  createLauncherButton: '[data-id=createButton]',
  createLauncherNameInput: '[test-id=nameInput]',
  createNextButton: '[data-id=NextButton]',
  createNextButtonDis: '[data-id=disButton]',
  osw: '[data-id=osw]',
  osm: '[data-id=osm]',
  generalSettingsButton: '[data-id=generalSettings]',
  settingsLauncherNameInput: '[test-id=settingsLauncherNameInput]',
  oauthList: '[name="settings.oauth_client_id"]'
}

module.exports = {
    visit ()  {
      I.amOnPage(`${config.baseURL}/${config.merchantId}/projects/${config.publisherProjectId}?token=${config.token}`);
      I.waitForVisible(locators.createLauncherButton);
    },

    fillName (launcherName) {
      I.waitForVisible(locators.createLauncherNameInput);
      I.fillField(locators.createLauncherNameInput, launcherName);
    },

    clickNext() {
      I.click(locators.clickNext);
    },

    clickCreate () {
      I.click(locators.createLauncherButton);
    },

    createDisabled () {
      I.seeElement(locators.createNextButtonDis);
    },

    checkOnMacOs () {
      I.checkOption(locators.osm);
    },

    checkOnWin () {
      I.checkOption(locator.osw);
    },

    clickGeneralSettings () {
      I.waitForVisible(locators.generalSettingsButton);
      I.click(locators.generalSettingsButton);
    },

    expectation (launcherName) {
      I.see(launcherName)
    }

}
