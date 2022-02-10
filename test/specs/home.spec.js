
const homePage = require('../pageobjects/home.page');
describe('My home page',  () => {
    it('it should verify list items',  async () => {
        await homePage.open();

        await expect(homePage.listExamples).toBeElementsArrayOfSize(45);
    });
});