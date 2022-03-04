// CSS
import './style/SearchForm.css';

// UTILLS
import { useState } from 'react';

function SearchForm(props){
    const [keyword,setKeyword] = useState('');

    const inputKeyword = (event)=>{
        setKeyword(event.target.value);
    }

    const searchTrip = (event)=>{
        event.preventDefault();
        const searchKeyword = keyword;
        props.onSearchTrip(searchKeyword);
    }

    return (
        
        <section>
            <form onSubmit={searchTrip}>
                <input type={"text"} placeholder={"Search..."} onChange={inputKeyword} value={keyword}/>
                <button type="submit"><i className={"fa fa-search"}></i></button>
            </form>
        </section>

    );
}

export default SearchForm;