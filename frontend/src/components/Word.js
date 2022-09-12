import React, { useEffect, useState } from "react";

function Word() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);

    useEffect(() =>{
        fetch("https://api.wordnik.com/v4/words.json/randomWord?hasDictionaryDef=true&maxCorpusCount=-1&minDictionaryCount=1&maxDictionaryCount=-1&minLength=5&maxLength=5&api_key=bhplsuwpg5wbaawqggiomkl1ljxh9et6jgr2qj0f5138zz3f5")
            .then(res => res.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    setItems(result);
                },
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )

    }, []) 
    console.log(items);
    if (error){
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Loading...</div>;
    } else {

            return(
                <div key={items.id}>
                    {items.word}
                </div>
            );
        
    }


}



export default Word;