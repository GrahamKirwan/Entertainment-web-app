import { createContext, useState, useEffect } from "react";
import jsonData from "../../data/data.json";

export const BookmarkContext = createContext();

export function BookmarkContextProvider(props) {

    const [data, setData] = useState(jsonData);
    
    let newJsonData = [];

    useEffect(() => {
        let initialBookmarks = localStorage.getItem('bookmarks');
        
        if(initialBookmarks) {
            newJsonData = JSON.parse(initialBookmarks)
            console.log(data)
            setData(newJsonData)
            console.log(data)
        }

    }, [])


    



    function addBookmarkHandler(title) {
        let updatedData = [];
        data.map((item) => {
            if(item.title == title) {
                item.isBookmarked = true;
            }
            updatedData.push(item);
        })
        setData(updatedData);
        localStorage.setItem('bookmarks', JSON.stringify(data));

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
        localStorage.setItem('bookmarks', JSON.stringify(data));
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