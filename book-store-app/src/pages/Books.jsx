import { useEffect, useState } from "react"
import axios from "axios";
import "../styles/Books.css"
import { useNavigate } from "react-router-dom";
export const Books = () => {
    const [ books,setBooks ] = useState([]);
    const [ isLoading, setIsLoading ] = useState(false);
    const [ error, setError ] = useState(null);
    const [sort, setSort ] = useState(null);
    const [filter,setFilter ] = useState(null);
    const [page,setPage ] = useState(1);
    const [limit] = useState(5);
    const navigate = useNavigate()

    useEffect(() => {
        setIsLoading(true);
        setError(null)
        axios.get(`https://fresh-astonishing-zircon.glitch.me/books`)
        .then((response) => setBooks(response.data.books))
        .catch((error) => setError(error))
        .finally(setIsLoading(false));
    },[])
    
    useEffect(() => {
        setIsLoading(true);
        setError(null)
        axios.get(`https://fresh-astonishing-zircon.glitch.me/books?sort=${sort}`)
        .then((response) => setBooks(response.data.books))
        .catch((error) => setError(error))
        .finally(setIsLoading(false));
    },[sort])

    useEffect(() => {
        axios.get(`https://fresh-astonishing-zircon.glitch.me/books?category=${filter}`)
        .then((response) => setBooks(response.data.books) )
    },[filter])

    useEffect(() => {
        axios.get(`https://fresh-astonishing-zircon.glitch.me/books?page=${page}&limit=${limit}`)
        .then((response) => setBooks(response.data.books) )
    },[page])

    const handleDelete = (id) => {
        axios.delete(`https://fresh-astonishing-zircon.glitch.me/books/${id}`)
        .then(() => {
            setBooks(books.filter((books) => books.id !== id))
            console.log(books)
        })

    }

    return (
        <>
        <h1>Books</h1>
        <button onClick={() => navigate("/add")}>Add Book</button>
        <select onChange={(e) => setSort(e.target.value)}>
            <option value="">Sort</option>
            <option value="name_asc">Sort Alphabetically</option>
            <option value="price_asc">Price Low to High</option>
            <option value="price_desc">Price High to Low</option>
        </select>
        <select onChange={(e) => setFilter(e.target.value)}>
            <option value="">Filter by Category</option>
            <option value="Fiction">Fiction</option>
            <option value="Self-Help">Self-Help</option>
            <option value="Productivity">Productivity</option>
            <option value="Technology">Technology</option>
            <option value="History">History</option>
            <option value="Finance">Finance</option>
            <option value="Business">Business</option>
            <option value="Psychology">Psychology</option>
        </select>
        {isLoading && <p>Loading...</p>}
        {error && <p>{error}</p>}
        <div className="books-container">
        {
            books.map((book) => {
                return (
                    <div key={book.id} className="book-container">
                     <img src={book.coverImage} alt={book.name} />
                     <h3>{book.name}</h3>
                     <h3>{book.author}</h3>
                     <h3>{book.category}</h3>
                     <h3>Price: ${book.price}</h3>
                    <div className="btn-container">
                    <button onClick={()=> navigate(`/books/${book.id}`)}>View Details</button>
                     <button onClick={() => handleDelete(book.id)}>Delete</button>
                     <button onClick={()=> navigate(`/edit/${book.id}`)}>Edit</button>
                    </div>
                    </div>
                )
            })
        }
        </div>
        <button onClick={(prev) => setPage(prev-1)} disabled={page === 1}>Previous</button>
        <button onClick={(next) => setPage(next+1)}>Next</button>
        </>
    )
}