const fs = require('fs');
const path = require('path');

const logFilePath = path.join(__dirname, '..', 'util', 'request_logs.txt');

const logger = (req, res, next) => {
    console.log(req);
    const logEntry = `${new Date().toISOString()} - ${req.method} ${req.path} ${JSON.stringify(req.body)}\n`;
    fs.appendFile(logFilePath, logEntry, (err) => {
        if (err) {
            console.error('Error writing to log file:', err);
        }
    });
    next();
};

module.exports = logger;