console.log("Starting Google Analytics");

window.dataLayer = window.dataLayer || [];

function gtag() {
    dataLayer.push(arguments);
}
gtag('js', new Date());

gtag('config', 'UA-120281725-1');

console.log("Google Analytics started");