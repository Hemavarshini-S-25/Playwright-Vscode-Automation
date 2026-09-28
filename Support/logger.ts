import fs from 'fs';
import path from 'path';

const logDirectory = path.join(process.cwd(), 'logs');
const logFile = path.join(logDirectory, 'automation.log');

if (!fs.existsSync(logDirectory)) {
    fs.mkdirSync(logDirectory, { recursive: true });
}

export function log(message: string) {
    const time = new Date().toLocaleString();

    const logMessage = `${time} - ${message}\n`;

    fs.appendFileSync(logFile, logMessage);

    console.log(logMessage.trim());
}