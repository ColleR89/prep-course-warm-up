export {};

const library = [
  {
    title: "Bill Gates",
    author: "The Road Ahead",
    isRead: true,
  },
  {
    title: "Steve Jobs",
    author: "Walter Isaacson",
    isRead: true,
  },
  {
    title: "Mockingjay: The Final Book of The Hunger Games",
    author: "Suzanne Collins",
    isRead: false,
  },
];

const showStatus = (books: any) => {
  let i: number;
  let titles: string[] = Array();
  for (i = 0; i < books.length; i++) {
    if (books[i].isRead) {
      console.log(`Already read '${books[i].title}' by ${books[i].author}.`);
    } else {
      console.log(
        `You still need to read '${books[i].title}' by ${books[i].author}.`
      );
    }
    titles[i] = books[i].title;
  }
};

showStatus(library);

/*
  Expected output:

  Already read 'Bill Gates' by The Road Ahead.
  Already read 'Steve Jobs' by Walter Isaacson.
  You still need to read 'Mockingjay: The Final Book of The Hunger Games' by Suzanne Collins.

*/
