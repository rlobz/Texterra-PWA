(()=>{const e=document.getElementById("buttonInstall");window.addEventListener("beforeinstallprompt",(t=>{window.deferredPrompt=t,e.classList.toggle("hidden",!1)})),e.addEventListener("click",(async()=>{const t=window.deferredPrompt;t&&(t.prompt(),window.deferredPrompt=null,e.classList.toggle("hidden",!0))})),window.addEventListener("appinstalled",(e=>{console.log("Installed succesfully",e)}))})();