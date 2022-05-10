import { createContext, useState } from "react";
import jsonData from "../../data/data.json";

export const BookmarkContext = createContext();

export function BookmarkContextProvider(props) {

   
    const [data, setData] = useState(jsonData);


    function addBookmarkHandler(title) {
        let updatedData = [];
        data.map((item) => {
            if(item.title == title) {
                item.isBookmarked = true;
            }
            updatedData.push(item);
        })
        setData(updatedData);
    }

    function removeBookmarkHandler(title) {
        let updatedData = [];
        data.map((item) => {
            if(item.title == title) {
                item.isBookmarked = false;
            }
            updatedData.push(item);
        })
        setData(updatedData);
    }
    

    const context = {
        data: data,
        addBookmark: addBookmarkHandler,
        removeBookmark: removeBookmarkHandler
    }

    return (
        <BookmarkContext.Provider value={context}>
            {props.children}
        </BookmarkContext.Provider>
    )
}