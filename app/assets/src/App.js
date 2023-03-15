// Start client and resize app
let client = ZAFClient.init();

client.on("app.registered", (e) => {
  client.invoke("resize", { width: "100%", height: "130px" });
});

topBarClientPromise.then(function(topBarClient) {
  topBarClient.invoke('popover');
});

const div = document.getElementById("DivPriciple")

const textarea = document.createElement("textarea")
textarea.setAttribute('maxlength', 5000);
textarea.setAttribute('cols', 80);
textarea.setAttribute('rows', 40);

const editButton = document.createElement("button");
editButton.name = "Look"
editButton.innerHTML = "Click";
editButton.style.position = "absolute";
editButton.style.display = "none";
editButton.onclick((e) =>{
  getData()
})

function getTicket(){
  try {
   const data= client.request('/api/v2/tickets.json').then(function(tickets){
    console.log(data)
    return data
    })
  } catch (error) {
    console.log(error)
  }

  return data
}

functio getAll(){
 const data =  client.get('ticket.subject').then(created_at =>{
  console.log("TICKETDATA",  "ID=" + ticket.ticket.id, "Subject=" +ticket.ticket.subject);
  this.ticketData= ticket;
  return data
  })
  return data
}


function getData(){

  
}
textarea(data)
editButton()
div.appendChild(textarea)
div.appendChild(editButton)
import Main from "./Main.js";
Main();
