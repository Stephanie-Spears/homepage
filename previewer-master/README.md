# [Previewer](https://github.com/fengyuanchen/previewer)

> A simple jQuery page preview plugin.

- [Demo](http://fengyuanchen.github.io/previewer)



## Main

```
dist/
├── previewer.css     (4 KB)
├── previewer.min.css (3 KB)
├── previewer.js      (6 KB)
└── previewer.min.js  (3 KB)
```



## Getting started

### Quick start

Four quick start options are available:

- [Download the latest release](https://github.com/fengyuanchen/previewer/archive/master.zip).
- Clone the repository: `git clone https://github.com/fengyuanchen/previewer.git`.
- Install with [NPM](http://npmjs.org): `npm install previewer`.
- Install with [Bower](http://bower.io): `bower install previewer`.


### Installation

Include files:

```html
<script src="/path/to/jquery.js"></script><!-- jQuery is required -->
<link  href="/path/to/previewer.css" rel="stylesheet">
<script src="/path/to/previewer.js"></script>
```


### Usage

#### Initialize with `$.fn.previewer` method.

```js
// With option
$('body').previewer({
  show: true
});

// With method
$('body').previewer('show');
```


#### Initialize with url search parameter.

```
http://example.com/?previewer
```



## Options

```js
// Set previewer options
$().previewer(options);

// Change the global default options
$.fn.previewer.setDefaults(options);
```


### show

- Type: `Boolean`
- Default: `false`

Show the preview page directly when initialize.


### type

- Type: `String`
- Default: `'phone'`
- Options: `'phone'`, `'tablet'`, `'laptop'`, `'desktop'`

Preview screen type.


### phone

- Type: `Number`
- Default: `480`

Extra small preview screen width.


### tablet

- Type: `Number`
- Default: `768`

Small preview screen width.


### laptop

- Type: `Number`
- Default: `992`

Middle preview screen width.


### desktop

- Type: `Number`
- Default: `1200`

Large preview screen width.



## Methods


```js
$().previewer('method');
```


### show()

Show the previewer.


### hide()

Hide the previewer.


### destroy()

Destroy the previewer.



## No conflict

If you have to use other plugin with the same namespace, just call the `$.fn.previewer.noConflict` method to revert to it.

```html
<script src="other-plugin.js"></script>
<script src="previewer.js"></script>
<script>
  $.fn.previewer.noConflict();
  // Code that uses other plugin's "$().previewer" can follow here.
</script>
```



## Browser Support

- Chrome (latest 2)
- Firefox (latest 2)
- Internet Explorer 8+
- Opera (latest 2)
- Safari (latest 2)

As a jQuery plugin, you also need to see the [jQuery Browser Support](http://jquery.com/browser-support/).



## [License](LICENSE.md)

Released under the [MIT](http://opensource.org/licenses/mit-license.html) license.
