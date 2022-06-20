import React, { ReactElement, useState, useEffect } from "react";
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
            <div className="archive post-type-archive post-type-archive-changelog font-mktg hfeed no-sidebar">
                <Timeline items={TimelineData.items}></Timeline>


            </div>
        </>
    )
}

export default Remembrance;