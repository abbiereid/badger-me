#!/usr/bin/env node

import * as readline from "readline";
import os from "os";

const homeDir = os.homedir();
console.log(`Your home directory is: ${homeDir}`);

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("What is your name?", (name) => {
    console.log(`Hello, ${name}!`);
    rl.close();
});
