const myLibrary = [];

class Book {
  #id = crypto.randomUUID();

  constructor(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
  }

  readStatusToggle() {
    this.read = !this.read;
  }

  static createFromData(data) {
    const { title, author, pages, read } = data;
    return new Book(title, author, pages, read);
  }

  get id() {
    return this.#id;
  }

  get pages() {
    return this._pages;
  }

  set pages(value) {
    if (isNaN(value) || value <= 0) {
      throw new Error("Pages must be a positive number");
    }
    this._pages = value;
  }
}

function addBookToLibrary(title, author, pages, read) {
  try {
    const newBook = Book.createFromData({ title, author, pages, read });
    myLibrary.push(newBook);
    render();
    return true;
  } catch (error) {
    return false;
  }
}

function render() {
  const container = document.querySelector("#library-container");
  container.innerHTML = "";

  myLibrary.forEach((book) => {
    const bookCard = document.createElement("div");
    bookCard.classList.add("book-card");

    bookCard.setAttribute("data-id", book.id);

    bookCard.innerHTML = `
        <div class="book-info">
            <h3>${book.title}</h3>
            <hr />
            <p>By: ${book.author}</p>
            <p>${book.pages} Pages</p>
            <p class="status-text">Status: <strong>${book.read ? "Read" : "Not Read Yet"}</strong></p>
        </div>

        <div class="card-actions">
            <button class="toggle-read-btn">${book.read ? "Mark Unread" : "Mark Read"}</button>
            <button class="remove-book-btn">Remove</button>
        </div>
    `;

    container.appendChild(bookCard);
  });
}

const dialog = document.querySelector("#add-book-dialog");
const openDialogBtn = document.querySelector("#add-new-btn");
const cancelBtn = document.querySelector("#cancel-btn");
const bookForm = document.querySelector("#book-form");
const errorMessageDiv = document.querySelector("#form-error");
const formInputs = document.querySelectorAll(
  "#book-form input, #book-form select",
);

openDialogBtn.addEventListener("click", () => {
  dialog.showModal();
});

cancelBtn.addEventListener("click", () => {
  dialog.close();
  bookForm.reset();
});

dialog.addEventListener("click", (e) => {
  if (e.target !== dialog) return;
  dialog.close();
});

bookForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const title = document.querySelector("#book-title").value;
  const author = document.querySelector("#book-author").value;
  const pages = document.querySelector("#book-pages").value;
  const read = document.querySelector("#book-read-status").checked;

  const success = addBookToLibrary(title, author, pages, read);

  if (success === true) {
    bookForm.reset();
    dialog.close();
  } else {
    errorMessageDiv.textContent =
      "Gagal menambahkan buku! Pages harus angka positif.";
    errorMessageDiv.style.display = "block";
  }
});

document.querySelector("#library-container").addEventListener("click", (e) => {
  const card = e.target.closest(".book-card");
  if (!card) return;

  const bookId = card.getAttribute("data-id");
  const bookIndex = myLibrary.findIndex((book) => book.id === bookId);

  if (e.target.classList.contains("remove-book-btn")) {
    myLibrary.splice(bookIndex, 1);
    render();
  }

  if (e.target.classList.contains("toggle-read-btn")) {
    myLibrary[bookIndex].readStatusToggle();
    render();
  }
});

formInputs.forEach((input) => {
  input.addEventListener("input", () => {
    errorMessageDiv.style.display = "none";
    errorMessageDiv.textContent = "";
  });
});

openDialogBtn.addEventListener("click", () => {
  errorMessageDiv.style.display = "none";
  errorMessageDiv.textContent = "";
  dialog.showModal();
});

addBookToLibrary("The Dip", "Seth Godin", 96, true);
addBookToLibrary("You Do You", "Fellexandro Ruby", 250, true);
addBookToLibrary("Atomic Habits", "James Clear", 351, true);
addBookToLibrary("The Psychology of Money", "Morgan Housel", 256, false);
