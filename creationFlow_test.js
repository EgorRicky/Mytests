Feature('creationFlow');

Scenario('creation page loaded well', ({ creationFlowPage }) => {
    creationFlowPage.visit();
});

Scenario('I can create with one os', ({ creationFlowPage })=> {
    creationFlowPage.visit();
    creationFlowPage.clickCreate();
    creationFlowPage.fillName("Name");
    creationFlowPage.clickNext();
    creationFlowPage.clickNext();
    creationFlowPage.clickGeneralSettings();
    creationFlowPage.expectation("Name");
});

Scenario('I can create with both os', ({ creationFlowPage })=> {
    creationFlowPage.visit();
    creationFlowPage.clickCreate();
    creationFlowPage.fillName("Name");
    creationFlowPage.clickNext();
    creationFlowPage.checkOnMacOs();
    creationFlowPage.clickNext();
    creationFlowPage.clickGeneralSettings();
    creationFlowPage.expectation("Name");
});

Scenario('I can create with mac', ({ creationFlowPage })=> {
    creationFlowPage.visit();
    creationFlowPage.clickCreate();
    creationFlowPage.fillName("Name");
    creationFlowPage.clickNext();
    creationFlowPage.checkOnMacOs();
    creationFlowPage.checkOnWin();
    creationFlowPage.clickNext();
    creationFlowPage.clickGeneralSettings();
    creationFlowPage.expectation("Name");
});

Scenario('I cant create without name', ({ creationFlowPage })=> {
    creationFlowPage.visit();
    creationFlowPage.clickCreate();
    creationFlowPage.fillName("");
    creationFlowPage.clickNext();
    creationFlowPage.createDisabled();
});