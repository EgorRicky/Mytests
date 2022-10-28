const { I } = inject();

const locators = {
  createLauncherButton: '[data-id=createButton]',
  createLauncherNameInput: '[test-id=nameInput]',
  createNextButton: '[data-id=NextButton]',
  osw: '[data-id=osw]',
  osm: '[data-id=osm]',
  generalSettingsButton: '[data-id=generalSettings]',
  settingsLauncherNameInput: '[test-id=settingsLauncherNameInput]',
  oauthList: '[name="settings.oauth_client_id"]'
},

fields = {

},

buttons = {

}

module.exports = {
  visit ()  {
    I.amOnPage('')
  }

}
