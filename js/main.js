// API key
const key = '$2a$10$1JEnmtEF417yBaFZcr51qukRjaKv8d5toEG5DKP/IUZWIVwfsaF7y';co 

// Characters list
const ul = document.getElementById('characters');


//Url Get Harry Portter characters
const url = new URL('https://www.potterapi.com/v1/characters/'), params = {key: key, house: 'Slytherin'}

Object.keys.then(function(data) {
  // Get the results
  let characters = data;
  // console.log(characters);
  //Map through the results
  return characters.map(function(character) {
    // Create the li's
    let li = createNode('li');
    // Make the HTML of our li the character's name and blood status
    li.innerHTML = `${character.name}, ${character.bloodStatus}`;
    // Append the li's to the ul
    append(ul, li);
  })
})
.catch(function(error) {
  // Error handling
  let p = "There's an error with the API.";
  append(body, p);
});
