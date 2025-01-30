import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../styles/AddBook.css";

const initialData = {
    name: "",
    category: "",
    price: "",
    author: "",
    publishingYear: "",
    coverImage: "",
    description: ""
}
export const AddBook = () => {
    const [bookData, setBookData] = useState(initialData);
    const navigate = useNavigate()
    const handleBookChange = (e) => {
        const { name, value } = e.target;
        setBookData({...bookData, [name] : value});
    } 

    const handleAdd = (e) => {
        e.preventDefault();
        console.log(bookData);
        axios.post(`https://fresh-astonishing-zircon.glitch.me/books`,
            bookData
        )
        navigate("/books")
    }
    return (
        <>
        <h1>Add Book</h1>
        <form onSubmit={handleAdd}>
            <input type="text" name="name" value={bookData.name} placeholder="Name" onChange={handleBookChange} />
            <input type="text" name="category" value={bookData.category} placeholder="Category" onChange={handleBookChange} />
            <input type="text" name="price" value={bookData.price} placeholder="Price" onChange={handleBookChange} />
            <input type="text" name="author" value={bookData.author} placeholder="Author" onChange={handleBookChange} />
            <input type="text" name="publishingYear" value={bookData.publishingYear} placeholder="Publishing Year" onChange={handleBookChange} />
            <input type="text" name="coverImage" value={bookData.coverImage} placeholder="Image url" onChange={handleBookChange} />
            <input type="text" name="description" value={bookData.description} placeholder="Description" onChange={handleBookChange} />
            <input type="submit" value="Add" />
        </form>
        </>
    )
}
