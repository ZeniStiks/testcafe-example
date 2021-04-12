import examplePage from '../pages/example-page';
import { testData } from '../test-data/example-test-data';

fixture `Example fixture`
    .page `https://the-internet.herokuapp.com/login`;

test('Try to type wrong username', async t => {
    await t.typeText(examplePage.username, testData.invalidUsername);
    examplePage.validateErrorMessage(testData.invalidUsernameError);
});
