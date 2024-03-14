const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA

window.addEventListener('beforeinstallprompt', (event) => {
    //Store the triggered event
    window.deferredPrompt = event;

    //Remove the hiden class from the button to make it visible
    butInstall.classList.toggle("hidden", false);
});

butInstall.addEventListener('click', async () => {
    //When the button is clicked, access the stored event
    const promptEvent = window.deferredPrompt;

    //If no event is stored, return
    if(!promptEvent){
        return;
    }

    //Show prompt
    promptEvent.prompt();

    //Reset the deferred prompt varibale, it can only be used once
    window.deferredPrompt = null;

    //Make the button hidden
    butInstall.classList.toggle("hidden", true);
});

window.addEventListener('appinstalled', (event) => {
    //Clear the prompt
    window.deferredPrompt = null;
});