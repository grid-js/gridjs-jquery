# Grid.js jQuery 

JQuery wrapper for [Grid.js](https://gridjs.io/)

## Install

```bash
npm install --save gridjs-jquery
```

**Note**: `gridjs-jquery` contains Grid.js package as well. You don't need to install it separately.

## Usage

Select your wrapper and call `Grid`:

```js
$("div#wrapper").Grid({
  columns: ['Name', 'Age', 'Email'],
  data: [
    ['John', 25, 'john@k.com'],
    ['Mark', 59, 'mark@e.com'],
    // ...
  ],
});
```

Grid.js can also convert an HTML table. Simply select the table with jQuery
and call `Grid`:

 ```js
$("table#myTable").Grid();
```

You can pass all Grid.js configs to the `Grid` function. 
See [Grid.js Config](https://gridjs.io/docs/config) for more details.

## License

MIT