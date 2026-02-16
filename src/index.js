import prompt from "prompt";
import mainPrompt from "./prompts/main.js";
import createQRCode from "./services/qr_code/index.js";
import createPassword from "./services/password/index.js";

const actions = {
    1: createQRCode,
    2: createPassword,
};

async function main() {
    prompt.start();

    prompt.get(mainPrompt, async (err, choose) => {
        if (err) {
            console.log(err);
            return;
        }

        const selectedAction = actions[choose.select];
        if (selectedAction) {
            await selectedAction();
        }
    });
}

main();
