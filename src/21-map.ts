export {};

function tidyUpString(str: string): string {
  return str.trim().toLowerCase().replace("/", "");
}

// You are allowed to edit this function
function capitalise(str: string): string {
  return str[0].toUpperCase() + str.slice(1);
}

const mentors = ["/Daniel ", "irina ", " Gordon", "ashleigh "];
let mentorsTidy = mentors.map((mentor) => capitalise(tidyUpString(mentor))); // You are allowed to edit this line

console.log(mentorsTidy); // Expected output: ["Daniel", "Irina", "Gordon", "Ashleigh"]

/*function tidyUpString(str: string[]): string[] {
  for (let i: number = 0; i < str.length; i++) {
    str[i] = str[i].trim().toLowerCase().replace("/", "");
  }
  return str;
  //return str.trim().toLowerCase().replace("/", "");
}

// You are allowed to edit this function
function capitalise(str: string[]): string[] {
  for (let i: number = 0; i < str.length; i++) {
    str[i] = str[i][0].toUpperCase() + str[i].slice(1);
  }
  return str;
}

const mentors = ["/Daniel ", "irina ", " Gordon", "ashleigh "];
let mentorsTidy: string[] = capitalise(tidyUpString(mentors)); // You are allowed to edit this line

console.log(mentorsTidy); // Expected output: ["Daniel", "Irina", "Gordon", "Ashleigh"]*/
