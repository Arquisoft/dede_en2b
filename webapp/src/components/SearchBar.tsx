import * as React from "react";
import {Search} from "@mui/icons-material";
import styled from "styled-components";
import {useState} from "react";
import ListProducts from "./ListProducts";
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import {Button} from "@mui/material";

const SearchContainer = styled.div`
    border: 1px solid lightgray;
    display: flex;
    justify-content: center;
    margin-left: 25px;
    padding: 5px;
`;

const Input = styled.input`
    border: none;
`;

const SearchBar = () => {

    const [searchInput, setSearchInput] = useState("");

    const navigate = useNavigate();

    const handleChange = (e: { preventDefault: () => void; target: { value: React.SetStateAction<string>; }; }) => {
        e.preventDefault();
        setSearchInput(e.target.value);

        //if(window.location.href.toString().includes("/products")) {
        //    navigate("/products?filter=" + searchInput);
        //    refreshPage()
        //} else {
        //    navigate("/products?filter=" + searchInput);
        //}
    };

    let input = document.getElementById("searchInput");

    input?.addEventListener("keyup", function(event: any) {
        if (event.keyCode === 13) {
            event.preventDefault();
            formSearch();
        }
    });

    const formSearch = () => {
        //refreshPage();
        //onSearch();
        navigate("/products?filter=" + searchInput);
        navigate(0);
    }

    const onSearch = ()=>{

        navigate("/products?filter=" + searchInput);

    }

    const refreshPage = () => {
        navigate("/products");
    }

    return (
        <SearchContainer>
            <Input id="searchInput" onChange={handleChange} />
                    <Button id="submitBtn"  type="submit" onClick={formSearch}>
                        <Search style={{ color: "gray", fontSize: 20 }}/>
                    </Button>
        </SearchContainer>
    );

}

export default SearchBar;