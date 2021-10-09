import React from "react";
import { InputGroup, FormControl } from "react-bootstrap";
function Search({ search, onSearch }){
    return (
        <div>
            <InputGroup className="mb-3 sm">
                <FormControl
                    placeholder="검색"
                    onChange={onSearch}
                    value={search}
                />
            </InputGroup>
        </div>
    )
}
export default Search;