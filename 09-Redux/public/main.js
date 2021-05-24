// Make sure that service worker available.
if('serviceWorker' in navigator){
    window.addEventListener('load', () => {
        navigator.serviceWorker.register("./service_worker.js")
        .then(reg => console.log("Servie Worker is registered..."))
        .catch(err => console.log("Service worker error : ".err));
    });
}