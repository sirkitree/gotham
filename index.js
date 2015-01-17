'use strict';

var data = require('./data.json');

// Storehouse.data.story.title
var title = data.title;

// Storehouse.data.story.subtitle
var subtitle = data.subtitle;

// Storehouse.data.story.elements 
//   foreach .content.type (text/image) 
//     .content.text.plain_text 
//     .content.image.url
var elements = [];
for (var i = data.elements.length - 1; i >= 0; i--) {
  if (data.elements[i].content.type == 'text') {
    elements.push(data.elements[i].content.text.plain_text);
  }
  if (data.elements[i].content.type == 'image') {
    elements.push(data.elements[i].content.image.url); 
  }
};

console.log(elements);