# bet-builder

Easily configurable build system created for BETLAB team with :heart:**love**:heart:

## Usage

```sh
npm i bet-builder --save-dev
```

Add to your **package.json** file next scripts:

```json
"scripts": {
    "bet-builder": "node ./node_modules/bet-builder/index.js",
    "start": "npm run bet-builder"
  }
```

After it you can paste in terminal **npm start** and default task will run.

To run another task - describe it in *bet-builder.conf.js* and write in terminal: **npm run bet-builder %task-name%**


## Example *bet-builder.conf.js*
```javascript
'use strict';

module.exports = {
  // Default task
  'default': [
        {
            task: 'clean',
            src: 'dest'
        },
        // Tasks in inner array will runs asynchronously
        [
            {
                task: 'styles',
                // type of preproccessor
                type: 'stylus',
                src: './src/styles/common.styl',
                dest: './dest/styles',
                autoprefixer: true,
                watch: {
                    // watch all styles file, but build only one
                    src: './src/styles/**/*.styl'
                }
            },
            {
                task: 'js',
                src: [ './source1/*.js', './source2/*.js', '!./source2/not_used_script.js' ],
                dest: './dest',
                concat: 'all2.js',
                sourcemaps: true,
                minify: true,
                watch: true
            }
        ],
        {
            // http://www.browsersync.io/docs/options/
            task: 'browser-sync',
            //watch files
            files: [ './**/*.js', './**/*.css' ],
            server: './dest'
        }
    ]
};
```

## Documentation
- Available tasks listed in **./tasks** folder 
- All workaround with examples listed in **./examples** folder

### For adding new task:

Add file **./tasks/js.js** with  *filename* equals to *task name*

### Base task description

We have base Task which contains such functionality:

- getting stream by *src*
- watch functionality
- pre, post callbacks processing  (see **./examples/pre.post.conf.js**)
- concat
- sourcemaps (before using, see list off supported plugins <https://github.com/floridoo/gulp-sourcemaps/wiki/Plugins-with-gulp-sourcemaps-support>
- putting stream to *dest*
- static method **createChild** for easily creating inherited class


In most off cases you'll just need to overwrite **main** method of base task
See **./tasks/js.js** for example

### Info
In synchronous tasks if you not write *src* config - stream from previous task will be used

### For any questions please contact <oleksii.pronyakin@betlab.com>
