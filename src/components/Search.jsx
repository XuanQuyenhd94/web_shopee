import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faSearch} from '@fortawesome/free-solid-svg-icons'
function Search() {
    return (
        <>
            <div className="shp-form--search">
                <input type="search" name id placeholder="Flash Sale 50%" />
                <button type="submit">
                    <FontAwesomeIcon icon={faSearch}/>
                </button>
            </div>
            {/*sử lý phần tìm kiếm thông qua js*/}
            <div className="shp-result--search">
                <i className="fa-solid fa-store" /> Tìm shop <span>"nội dung tìm kiếm"</span>
                <div className="shp-sup--result">
                    <ul>
                        <li className="shp-result">
                            <a href>airpod</a>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Search