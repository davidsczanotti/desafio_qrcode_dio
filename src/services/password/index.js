import chalk from "chalk";
import generatePassword from "./generate.js";

async function createPassword() {
    console.log(chalk.green("PASSWORD"));
    const password = await generatePassword();
    console.log(password);
}

export default createPassword;
