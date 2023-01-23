import BooksContext from "../context/Books";
import {useContext} from "react";

function useBooksContext() {
    return useContext(BooksContext)
}

export default useBooksContext;