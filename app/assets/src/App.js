// Start client and resize app
let client = ZAFClient.init();

client.on("app.registered", (e) => {
  client.invoke("resize", { width: "100%", height: "130px" });
});

topBarClientPromise.then(function(topBarClient) {
  topBarClient.invoke('popover');
});

const textarea = document.createElement("textarea")
textarea.setAttribute('maxlength', 5000);
textarea.setAttribute('cols', 80);
textarea.setAttribute('rows', 40);
import Main from "./Main.js";
Main();
