import React,{ useState } from 'react';
import './SearchBar.css'


function SearchBar() {
    //term, location, and sortBy for react state
    const [term,setTerm] = useState('')
    const [location,setLocation] = useState('')
    const [sortBy,setSortBy] = useState('best_match')

    const sortByOptions = {
        'Best Match': 'best_match',
        'Highest Rated': 'rating',
        'Most Reviewed': 'review_count'
    };

    const getSortByClass = (sortByOption) => {
        if({ sortBy } == { sortByOptions }) {
            return 'active'
        } else {
            return ''
        }
    }

    const handleSortByChange = (sortByOption) => {
        setSortBy(sortByOption)
    }


    const renderSortByOptions = () => {
        //check the sortByOptions in the next 2 lines in code breaks
        return Object.keys({ sortByOptions }).map(sortByOption => {
            let sortByOptionValue = { sortByOptions }[sortByOption];
            return <li onClick={handleSortByChange.bind(sortByOptionValue)} className={getSortByClass(sortByOptionValue)} key={sortByOptionValue}> {sortByOption} </li>
        })
    }




    return (
        <>
            <div className="SearchBar">
                <div className="SearchBar-sort-options">
                    <ul >
                        {renderSortByOptions}
                    </ul>
                </div>
                <div className="SearchBar-fields">
                    <input placeholder="Search Businesses" />
                    <input placeholder="Where?" />
                </div>
                <div className="SearchBar-submit">
                    <a>Let's Go</a>
                </div>
            </div>
        </>
    )
}

export default SearchBar