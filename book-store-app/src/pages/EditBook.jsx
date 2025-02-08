import { useParams,useNavigate } from "react-router-dom"
import "../styles/AddBook.css"
import { useEffect, useState } from "react";
import axios from "axios";
import "../styles/Books.css"

const initialData = {
    name: "",
    category: "",
    price: "",
    author: "",
    publishingYear: "",
    coverImage: "",
    description: ""
}
export const EditBook = () => {
    const { id } = useParams();
    const [ isLoading, setIsLoading ] = useState(false);
    const [ error, setError ] = useState(null);
    const [bookData, setBookData] = useState(initialData);
    const navigate = useNavigate() 

    useEffect(() => {
        setIsLoading(true);
        setError(null)
        axios.get(`https://fresh-astonishing-zircon.glitch.me/books/${id}`)
        .then((response) => setBookData(response.data))
        .catch((error) => setError(error))
        .finally(setIsLoading(false));
    },[id])   
    
    const handleBook = (e) => {
        const { name, value } = e.target;
        setBookData({...bookData, [name] : value});
    } 

    const handleEdit = (e) => {
        e.preventDefault();
        console.log(bookData);
        axios.put(`https://fresh-astonishing-zircon.glitch.me/books/${id}`,
            bookData
        )
        navigate("/books")
    }

    return (
        <>
        <h1>Edit Book</h1>
        {isLoading && <p>Loading...</p>}
        {error && <p>{error}</p>}
        <form onSubmit={handleEdit}>
            <input type="text" name="name" value={bookData.name} placeholder="Name" onChange={handleBook} />
            <input type="text" name="category" value={bookData.category} placeholder="Category" onChange={handleBook} />
            <input type="text" name="price" value={bookData.price} placeholder="Price" onChange={handleBook} />
            <input type="text" name="author" value={bookData.author} placeholder="Author" onChange={handleBook} />
            <input type="text" name="publishingYear" value={bookData.publishingYear} placeholder="Publishing Year" onChange={handleBook} />
            <input type="text" name="coverImage" value={bookData.coverImage} placeholder="Image url" onChange={handleBook} />
            <input type="text" name="description" value={bookData.description} placeholder="Description" onChange={handleBook} />
            <input type="submit" value="Edit" />
        </form>
        </>
    )
}