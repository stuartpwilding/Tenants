## ManageGo Tenants Site

### Brief description

Everything from `/src` is compiled and injected into `/build`.

* Javascript files are compiled in alphabetical order.
* Mapping of CSS/SASS files can be found in /src/sass/style.scss.
* 3rd party JS & CSS assets are not in /src, these are all located in /build.
* Example PDF files are not in /src, these are all located in /build.

### Development setup
Make sure you have Node installed

Install dependencies
```bash
$ npm install
```
Initial build
```bash
$ gulp build
```
Watch for changes
```bash
$ gulp watch
```

### Libraries

The following libraries are being used:

* jQuery
* jQuery UI custom build (datepicker only)
* [Select2](https://select2.org/) - custom select boxes
* [What Input?](https://github.com/ten1seven/what-input) - tracks the current input method (mouse, keyboard or touch)
* [ViewerJS](https://viewerjs.org/) - PDF viewer

