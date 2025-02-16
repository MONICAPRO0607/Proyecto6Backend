# Proyecto6Backend
In this project I have used express and Mongo Atlas using mongoose. I have created 3 models relating 2 collections, and set complete CRUD.

The steps I have followed are:
first configure the database.
Then I made the model, continuing through the controllers and ending with the routes of each collection.

# Corrections
16/02/2025 - Correction in the .gitignore file that contained the seed and was not shown when uploaded to github. 
   - The dependencies that are considered unnecessary are eliminated.
   - Also corrected routes in the routes/books.js to obtain an array of books by author and genre, examples:
   booksRoutes.get(“/author/:author”, getBookByAuthor);
   booksRoutes.get(“/category/:genre”, getBookByCategory); 
   - The related arrays have been corrected.
   - In authors, I have added genres and books as arrays.
   - I have created authors checking that the books are not duplicated and modified genres to check that it is done correctly.
   - Added functionality to find the category regardless of whether it is written in capitalize or lowercase.




