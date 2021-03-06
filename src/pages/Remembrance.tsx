import { TextField } from "@mui/material";
import React, { ReactElement, useState, useEffect, useRef } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import JsonView from "../components/JsonView";
import Timeline from "../components/Timeline";
import { getEvent, listEvent } from "../services/Event";

function Remembrance(): ReactElement {
    const [data, setData] = useState([])
    const [page, setPage] = useState(0);
    const [keyword, setKeyword] = useState("");
    const [total, setTotal] = useState(0);
    const timeoutRef = useRef<any>(null);

    let page_size = 20;
    async function call() {
        let res = await listEvent({
            page: page,
            page_size: page_size,
            keyword: keyword,
        });
        
        let result = [];
        console.log(res);
        
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
        
        setTotal(res.meta.total);
        return result;
    }

    async function loadmore() {
        if (total != -1 && page_size * page >= total) {
            return;
        }
        let result = await call();
        setData([...data, ...result]);
    }

    async function reset() {
        console.log("reset");
        setPage(0);
        let result = await call();
        setData(result);
    }

    async function init() {
        let result = await call();
        setData(result);
    }
    useEffect(() => {
        console.log("init")
        init();
    }, []);

    useEffect(() => {
        console.log("load more")
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
                label="Keyword"
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
                margin="normal"
            />
            <JsonView data={data}></JsonView>
            {/* <div className="archive post-type-archive post-type-archive-changelog font-mktg hfeed no-sidebar hero-image">
                <h1 className="gutter-spacious font-modern-computer">- ??? ????y ch??a c?? giao di???n</h1>
                <h1 className="gutter-spacious font-modern-computer">- ????y l?? th??? s??? h??? tr??? th??? nh??? gi??p ??an thanh l???c tung k?? ???c m???i khi th??? nh??? temporarily unavailable</h1>
                <h1 className="gutter-spacious font-modern-computer">- S??? ???????c thi???t k??? ????? ??an thanh c?? th??? d??? d??ng t??m ki???m ch??? v???i v??i t??? kh??a ??t ???i</h1>
                <h1 className="gutter-spacious font-modern-computer">- ??ang thi c??ng...</h1>
            </div>
            <div className="archive post-type-archive post-type-archive-changelog font-mktg hfeed no-sidebar">
                <Timeline items={TimelineData.items}></Timeline>
            </div> */}
            <div className="col-12 col-md-7 offset-md-5">
                <button className='bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded' onClick={() => { setPage(page + 1) }} >Load more</button>
            </div>
            <Footer></Footer>
        </>
    )
}

export default Remembrance;