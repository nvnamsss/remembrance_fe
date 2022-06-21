import React, { ReactElement, useState, useEffect } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Timeline from "../components/Timeline";

function Remembrance(): ReactElement {
    const TimelineData = {
        "items": [
            {
                "title": "hi mom",
                "created_at": "Feb",
                "content": "hi mom"
            },
            {
                "title": "hi mom",
                "created_at": "Feb",
                "content": "hi mom"
            }
        ]
    }
    return (
        <>
            <Header></Header>

            <div className="archive post-type-archive post-type-archive-changelog font-mktg hfeed no-sidebar">
                <Timeline items={TimelineData.items}></Timeline>


            </div>
            <Footer></Footer>
        </>
    )
}

export default Remembrance;