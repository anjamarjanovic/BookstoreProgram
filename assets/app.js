const books =[ 
    {
        id:1,
        name:'Misery',
        writter:'Steven King',
        
    },
    {
        id:2,
        name:'Special Mission',
        writter:'Otto Skorzeny',
    },
    {
        id:3,
        name:'Head Hunters',
        writter:'Ju Nesbe',
    },
    {
        id:4,
        name:'Harry Potter',
        writter:'J.K.Rowling',
    },
    {
        id:5,
        name:'Shopenhauer Cure',
        writter:'Irvin Jalom',
    },
    {
        id:6,
        name:"Man's searh for meaning",
        writter:'Victor Frankl',
    },
    {
        id:7,
        name:'The Alchemist',
        writter:'Paulo Koelho',
    },
    {
        id:8,
        name:'Animal Farm',
        writter:'George Orwel',
    },
   
]

const findBook = (userInput)=> {
 const searchTerm = userInput
               .trim()
               .toLowerCase()
               .split(' ')
               .join('');
const foundBook = books.find(book=>book.name.trim().toLowerCase().split(' ').join('') ===searchTerm);
if(searchBookInput.value ===''){
    alert(`please fill the search input`)
    return
}
showBook.innerHTML = `<p> There is book ${foundBook.name} written by ${foundBook.writter} with id ${foundBook.id} in stock </p>  `
}

searchBookButton.addEventListener('click',()=>{
    const term = searchBookInput.value;
    findBook(term);
    clearInput();
});

//add book

const addBoook = (name, writter,attributeName='', attributeValue ='' )=>{
const addedBook = {
    id: Math.floor(Math.random()*100),
    name,
    writter
}
if(attributeName !== '' && attributeValue !== ''){
    addedBook[attributeName] =attributeValue;
}
if(bookNameInput.value === '' && bookWritterInput.value ==''){
    alert(`Please fill all the input fiels`)
    return
}
books.push(addedBook);
alert(`You added new book ${addedBook.name} by ${addedBook.writter}`)
}

addBookButton.addEventListener('click', ()=>{
addBoook(bookNameInput.value, bookWritterInput.value, additionalAttributeName.value, additionalAttributeValue.value)
clearInput();
})

//delete book

const deleteBook = (userInput)=>{
const searchTerm = userInput
    .trim()
    .toLowerCase()
    .split(' ')
    .join('');
const foundBook = books.find(book=>book.name.trim().toLowerCase().split(' ').join('') ===searchTerm);
if(deleteBookInput.value ===''){
    alert('Please fill the input field')
    return
}
books.splice(books.indexOf(foundBook))
alert(`You have deleted ${foundBook.name} by ${foundBook.writter}`)
}
deleteBookButton.addEventListener('click',()=>{
    deleteBook(deleteBookInput.value)
    clearInput();
})

const clearInput = ()=>{
    searchBookInput.value =''
    bookNameInput.value ='';
    bookWritterInput.value = '';
    additionalAttributeName.value = '';
    additionalAttributeValue.value = '';
    deleteBookInput.value = '';
}
