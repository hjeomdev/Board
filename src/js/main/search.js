import React from "react";
import { InputGroup, FormControl } from "react-bootstrap";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function Search({ search, onSearch }){
    return (
        <div>
            <InputGroup className="mb-3 sm">
                <FontAwesomeIcon icon={faSearch}/>
                <FormControl
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
                onChange={onSearch}
                value={search}
                />
            </InputGroup>
        </div>
    )
}
export default Search;