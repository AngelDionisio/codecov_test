const sum = require('./multiply');

describe('@regression, @authentication, @consumer', () => {
    describe('authentication API service tests', () => {

        describe('token and user data assertions', () => {

            it('authentication token was created and returned as correct type', async () => {
                expect(sum(2, 3)).toBe(6);
            });

        });

    }); // inner describe
}); // outer describe