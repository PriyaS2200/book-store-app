import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom"
import axios from "axios";

export const BookDetail = () => {
    const { id } = useParams();
    const [book, setBook] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`https://fresh-astonishing-zircon.glitch.me/books/${id}`)
        .then((response) => setBook(response.data))
    },[id])
    console.log(book)
    return (
        <div className="book-container">
        <h1>Books Detail</h1>
        <img src={book.coverImage} alt={book.name}/>
        <h4>Name: {book.name}</h4>
        <h4>Author: {book.author}</h4>
        <h4>Category: {book.category}</h4>
        <h4>Description: {book.description}</h4>
        <h4>Published: {book.publishingYear}</h4>
        <h4>Price: ${book.price}</h4>
        <button onClick={() => navigate("/books")}>Go back</button>
        </div>
    )
}