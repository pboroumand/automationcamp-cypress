module.exports = {
    LOGINPAGE: {
        USERNAME_INPUT: 'input[name=username]',
        PASSWORD_INPUT: 'input[type=password]',
        LOGIN_BUTTON: 'button[type=submit]',
    },
    ADMINPAGE: {
        USER_NAME_ADMIN: 'input.oxd-input--active:nth-child(1)',
        USER_ROLE_INPUT_ADMIN: '.oxd-select-text.oxd-select-text--active',
        USER_ROLE_DROPDOWN_ADMIN: '.oxd-select-dropdown > :nth-child(2) > span',
        SEARCH_BUTTON_ADMIN: 'button[type=submit]',
        URL_ADMIN: 'https://opensource-demo.orangehrmlive.com/web/index.php/admin/viewSystemUsers',
    }
}