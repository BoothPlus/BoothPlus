
const element = document.createElement('div');
const script = document.createElement('script');
element.id = 'extension'
script.src = 'chrome-extension://kliibdckegfemgeimfpabobagohdojag/dist/bundle.js'

document.body.append(element);
document.body.append(script);