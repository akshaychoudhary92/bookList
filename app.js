// Book Constructor
function Book (title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
}

// UI constructor
function UI() {

}

UI.prototype.addBookToList = function(book){
    const list = document.getElementById('book-list');

    //create tr element
    const row = document.createElement('tr');

    // insert columns
    row.innerHTML = `<td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.isbn}</td>
    <td><a href = "#" class = "delete">X<a></td>`;

    list.appendChild(row);
}

//clear fields
UI.prototype.clearfields = function() {
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('isbn').value = '';
}

UI.prototype.showAlert = function(message, className) {
    // create a div
    const div = document.createElement('div');
    //add classes
    div.className = `alert ${className}`;
    // add text
    div.appendChild(document.createTextNode(message));
    // get a parent
    const container = document.querySelector('.container');
    //get form
    const form = document.querySelector('#book-form');
    //insert alert
    container.insertBefore(div, form);
    // set timer for alert
    setTimeout(function(){
        document.querySelector('.alert').remove();
    }, 3000);
}

// event listners
document.getElementById('book-form').addEventListener('submit', function(e){

    //get form values
    const title = document.getElementById('title').value,
          author = document.getElementById('author').value,
          isbn = document.getElementById('isbn').value

          //instantitate book

    const book = new Book(title, author, isbn);

    // instatntiate UI

    const ui = new UI();

    //validate

    if(title === '' || author === '' || isbn === '' ) {
        // Error alert
        ui.showAlert('Please fill in all fields', 'error');
    }else{
          // add book to list

    ui.addBookToList(book);

    //ui.showalert success
    ui.showAlert('book Added' , 'success')

    //clear fields

    ui.clearfields();

    }






    e.preventDefault();
})
