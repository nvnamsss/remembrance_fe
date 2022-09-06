import { TextField } from "@mui/material";
import React, { ReactElement, useState, useEffect, useRef } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import JsonView from "../components/JsonView";
import Timeline from "../components/Timeline";
import { getEvent, listEvent } from "../services/Event";

function Remembrance(): ReactElement {
    const [data, setData] = useState([])
    const [page, setPage] = useState(1);
    const [keyword, setKeyword] = useState("");
    const [lastPage, setLastPage] = useState(false);
    const timeoutRef = useRef<any>(null);
    
    let page_size = 5;
    async function call() {
        let res = await listEvent({
            page: page,
            page_size: page_size,
            keyword: keyword,
        });
        
        let result = [];
        if (res.data != null) {
            res.data.forEach(element => {
                result.push({
                    "title": element.name,
                    "occurred_at": element.occurred_at,
                    "content": element.content,
                    "tags": element.tags
                })
            });
        }
        
        console.log(res.data);
        
        setLastPage(page* page_size > res.meta.total);
        return result;
    }

    async function loadmore() {
        let result = await call();
        setData([...data, ...result]);
    }

    async function reset() {
        setPage(1);
        let result = await call();
        setData(result);
    }

    async function init() {
        setPage(1);
        let result = await call();
        setData(result);
    }
    
    useEffect(() => {
        init();
    }, []);

    useEffect(() => {
        console.log(page);
        
        loadmore();
    }, [page]);

    useEffect(() => {
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
        timeoutRef.current = setTimeout(reset, 500);
    }, [keyword]);


    return (
        <>
            <Header></Header>
            <TextField
                className="auth-form-body"
                size="small"
                label="Keyword"
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
            />

            <Timeline items={data}></Timeline>
            <div className="text-center">
                {
                    lastPage ? null : <button className='bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded' onClick={() => { setPage(page + 1) }} >Load more</button>
                }
                
            </div>
            <Footer></Footer>
        </>
    )
}

export default Remembrance;