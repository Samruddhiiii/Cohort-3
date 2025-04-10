
// Overview of CLI tools, Node.js fundamentals, Bun intro, npm, internal/external packages, and assignments

// - What is Node.js?
// Node.js is a JavaScript runtime built on Chrome's V8 engine
// It allows running JS code outside the browser
// Useful for backend development, scripting, automation, etc.

// - What is Bun?
// Bun is an all-in-one JavaScript runtime like Node.js
// It includes a bundler, transpiler, package manager (bun install), and test runner
// It's faster in some use cases compared to Node.js

// - Starting a Node.js project
// Command: npm init -y
// This creates a package.json file with default values
// To update any value, open package.json and edit manually

// 🔁 How to refresh `package.json`:
// If you delete `package.json`, you can recreate it with:
// → npm init (interactive) or npm init -y (quick default)

// 🧹If you delete `node_modules` folder:
// You can restore all installed packages by running:
// → npm install
// This reads the dependencies listed in `package.json` and reinstalls them
// It will also recreate the package-lock.json file if it was missing

// - npm
// npm = Node Package Manager
// Used to install, manage, and version packages (modules)
// Example: npm install chalk

// - Internal packages
// Built-in Node.js modules like fs, path, http
// No installation needed

// - External packages
// Installed using npm (like commander, chalk, axios)
// Need to be added to package.json and installed with `npm install`

// - package-lock.json
// Auto-generated file to lock dependency versions
// Ensures consistent installs across environments

// 📁 About `script.mjs` file:
// `.mjs` = ES Module file (ECMAScript module syntax)
// Used when you want to use `import` / `export` instead of `require` / `module.exports`
// You can run it using:
// → node script.mjs
// OR set `"type": "module"` in package.json to use `import` in `.js` files too
// Example:
// import fs from 'fs';
// export function hello() { console.log("Hello!"); }

// - Use `.mjs` when working with modern JavaScript module systems or when using packages that are only compatible with ES Modules

// Create a CLI (Assignment 1)
// CLI: Command Line Interface tool using commander
// Below is the CLI assignment:

const fs = require('fs');
const { Command } = require('commander');
const program = new Command();

program
  .name('counter')
  .description('CLI to do file based tasks')
  .version('0.8.0');

program.command('count')
  .description('Count the number of lines in a file')
  .argument('<file>', 'file to count')
  .action((file) => {
    fs.readFile(file, 'utf8', (err, data) => {
      if (err) {
        console.log(err);
      } else {
        const lines = data.split('\n').length;
        console.log(`There are ${lines} lines in ${file}`);
      }
    });
  });

program.parse();

