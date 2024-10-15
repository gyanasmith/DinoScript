/*

    This is a comment

document: Current document
getElementById: gets element by its id
innerHTML: changes/gets the html code within a given element
function: piece of code you can call by name
value: whatever is showing inside a textbox
textContent: allows you to get or change the text within an element

    set the base price
    add the additional people * 4
    print out the answer
*/

//document.getElementById("calc").addEventListener('submit', function(event){
//event.preventDefault();

function CalculateParty(){
    let partyType = document.getElementById("partyType").value;
    let additional = document.getElementById("Additional").value;
    let totalCost = parseInt(partyType) + additional * 4;
    
    document.getElementById("answer").textContent = `Cost: $${totalCost}`;
}
