import prompt from "prompt";
import promptQRCode from "./prompt.js";
import generateQRCode from "./generate.js";

async function createQRCode() {
    prompt.start();
    prompt.get(promptQRCode, generateQRCode);
}

export default createQRCode;
