const assert = require('chai').assert;
const app = require('../application');
describe('Tdd application', function(){
    it('Should return Hello', function(){
        assert.equal(app.home, app.home);
    });
    it('Should retun one user', function(){
        assert.equal(app.home1, app.home1);
    });
    it('Should return created user', function(){
        assert.equal(app.home2, app.home2);
    });
    it('Should return updated user', function(){
        assert.equal(app.home3, app.home3);
    });
    it('Should return deleted user', function(){
        assert.equal(app.home4, app.home4);
    });
    it('Should return all users', function(){
        assert.equal(app.homeAll, app.homeAll);
    });
});


