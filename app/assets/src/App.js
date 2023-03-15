// Start client and resize app
let client = ZAFClient.init();

client.on("app.registered", (e) => {
  client.invoke("resize", { width: "100%", height: "130px" });
});

topBarClientPromise.then(function(topBarClient) {
  topBarClient.invoke('popover');
});

import Main from "./Main.js";
Main();
