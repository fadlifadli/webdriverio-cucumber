class LoginPage{
    // definisikan locator dari element
    get emailInput(){
        return $('#email'); // locator field email
    }
    get passwordInput(){
        return $('#password'); // locator field password
    }
    get loginButton(){
        return $('/html[1]/body[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/button[1]'); // locator loginButton
    }

    get errorMsg(){
        return $('//*[@role="alert"]'); // locator ErrorMessage
    }

    get buttonProfile(){
        return $('#menu-button-14'); // locator buttonProfile
    }
    get profileLogout(){
        return $('#menu-list-14-menuitem-12'); // locator buttonProfileLogout
    }
    // definisikan action/interaksi yang dilakukan pada element tersebut
    async login(email,password) {
        await this.emailInput.setValue(email);
        await this.passwordInput.setValue(password);
        await this.loginButton.click();
    }
    
    async logout(){
        await this.buttonProfile.click();
        await this.profileLogout.click();
    }
    async assertErrorMessage(expectedErrorMessage){
        await expect(this.errorMsg).toHaveTextContaining(expectedErrorMessage);
    }
    async getErrorMessage(){
        return this.errorMsg.getText();
    }
}

module.exports = new LoginPage()