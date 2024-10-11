// // Get the button element by its ID
// const btn = document.getElementById("btn");

// // Define the function to be called when the button is clicked
// function addTodo() {
//   // Get the values from the input fields
//   const title = document.getElementById("title").value;
//   const discription = document.getElementById("discription").value;
//   document.getElementById("container").innerHTML = `
//     <div>
//             <div>${title}</div>
//             <div>${discription}</div>
//             <button>mark as on done</button>

//         </div>
// `;
// }

// // Add the event listener to the button, specifying the function to call on a click event
// btn.addEventListener("click", addTodo);

// Select the paragraph element by its ID
// let paragraph = document.getElementById("myParagraph");

// Get the text content of the paragraph
let paragraphText = paragraph.innerHTML;

// Split the paragraph text into an array of words
let words = paragraphText.split(" ");

// Loop through each word and update the background color directly if the word length is 8
// let highlightedWords = words.map((item) => {
//   if (item.length === 8) {
//     return `<span style="background-color: yellow;">${item}</span>`;
//   } else {
//     return item;
//   }
// });


for (let i = 0; i < words.length; i++) {

   
    if (words[i].length == 8) {
        words[i] = `<span style="background-color: yellow;">${words[i]}</span>`;
    } 
}

// Join the words back into a single string with spaces and update the paragraph's HTML
paragraph.innerHTML = words.join(" ");



 // let question = words[i].split("?")
    // console.log(question)












