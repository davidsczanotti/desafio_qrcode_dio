function appendCharacters(characters, envKey, values) {
    if (process.env[envKey] == "true") {
        characters.push(...values);
    }
}

async function generatePassword() {
    let characters = [];
    let password = "";

    const passwordLength = parseInt(process.env.PASSWORD_LENGTH, 10);

    appendCharacters(characters, "UPPERCASE_LETTERS", "ABCDEFGHIJKLMNOPQRSTUVWXYZ");
    appendCharacters(characters, "LOWERCASE_LETTERS", "abcdefghijklmnopqrstuvwxyz");
    appendCharacters(characters, "NUMBERS", "0123456789");
    appendCharacters(characters, "SPECIAL_CHARACTERS", "!@#$%^&*()_+-=[]{}|;:,.<>?");

    for (let index = 0; index < passwordLength; index++) {
        const element = Math.floor(Math.random() * characters.length);
        password += characters[element];
    }

    return password;
}

export default generatePassword;
