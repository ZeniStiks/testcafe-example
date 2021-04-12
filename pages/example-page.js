import { Selector, t } from 'testcafe';

class ExamplePage {
    constructor() {
        this.username = Selector('#username');
        this.password = Selector('#password');
        this.username = Selector('button').withAttribute('type', 'submit');
        this.error = Selector('#flash-messages');
    }

    async validateErrorMessage(message) {
        await t.expect(this.error.withText(message).exists).ok();
    }
}

export default new ExamplePage();
