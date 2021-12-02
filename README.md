# OPTIMUS (BETA)

Optimus is a library for analyzing your code for potential bottlenecks and offers options for optimizing your application.

## @optimus/core

The main plugin, which works with the configuration file, starts the processing of files by the plugins, and provides the cli commands.

### Installation and Usage:
---
:warning: **Installation from npm is temporarily unavailable**
```
$ npm install -D @optimus/core
```

cli command:

```
optimus --config path.to.file
```

`--config` - flag for path to configuration file. Default 'optimus.config.js'

### Configuration file:
---

Create `optimus.config.js` file for configurate `@optimus/core`

```TypeScript
module.exports = {
  plugins: Array<Function>, // Array of file handlers
  includes: Array<String> // Array of file paths
}
```

### Plugins
---

[@optimus/html-analyzer](https://github.com/HolyCoffee/optimus-html-analyzer-plugin) - plugin for analyze your html files


### TODO:
---

- [ ] Integration tests
- [ ] CI/CD, npm publish
