const butInstall = document.getElementById('buttonInstall');
// window.addEventListener('appinstalled', (event) => {  console.log('👍', 'appinstalled', event);});
// code adapted from https://javascript.plainenglish.io/creating-a-browser-agnostic-pwa-install-button-41039f312fbe
let prompt;
window.addEventListener('beforeinstallprompt', function(e){
  // Prevent the mini-infobar from appearing on mobile
  e.preventDefault();
  // Stash the event so it can be triggered later.
  prompt = e;
});

butInstall.addEventListener('click', function(){
   prompt.prompt();
});

let installed = false;
butInstall.addEventListener('click', async function(){
  prompt.prompt();
  let result = await that.prompt.userChoice;
  if (result&&result.outcome === 'accepted') {
     installed = true;
  }
});