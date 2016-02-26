#The Iceland API Challenge

###Instructions

Clone the repo.

You must examine the [Iceland API](http://docs.apis.is/) documentation and use the skills you've learned up to this point  with promises and with string/number/array/object manipulation to answer the questions from the `index.html` file and write to the DOM.

To start the project, you will have to set up the `<script>` tags to load both jQuery and the `main.js` file.  jQuery is recommended for making requests to the iceland-api with `$.getJSON`

Each question will require you to read the API docs and make a properly formatted request to various endpoints of the iceland API.

In order to query the Iceland API for data within your `main.js` file, you will need to use a promise (like `$.getJSON()` , and you will need to manipulate the returned data and append to the DOM with a callback-function inside that promise's then-statement ( `.then( function(){...} ) `)

Make sure that you append to the DOM in the relevant html-elements with the appropriate `id` attribute.
