function generateRandomUsername() {
    const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let result = '';
    let length = 8;
    for (let i = 0; i < length; i++) {
        result += chars.charAt((Math.random() * chars.length));//chars.charAt() return 0.1*62() and return character at  6th position 
    }
    return  result;
}

function generateRandomPassword(length = 10) {
    const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*';
    let result = '';
    for (let i = 0; i < length; i++) {
        result += chars.charAt((Math.random() * chars.length));
    }
    return result;
}

module.exports = {
    generateRandomUsername,
    generateRandomPassword
};