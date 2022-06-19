import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'

export interface TimelineData {
    items: TimelineItem[]
}

export interface TimelineItem {
    title: string,
    created_at: string,
    content: string,
}
class Timeline extends React.Component<any, any, TimelineData>  {
    // constructor(props: TimelineData) {
    //     super(props);
    // }
    render() {
        return (
<>
                {this.props.items.map((item: TimelineItem) => {
                    console.log("hi mom");
                    return (
                        <article className="d-flex gutter-spacious flex-wrap position-relative changelog-line js-ajax-fetchable post-65764 changelog type-changelog status-publish hentry changelog-label-dependency-graph changelog-label-security-and-compliance changelog-label-supply-chain">
                            <div className="changelog-single-details position-sticky top-7">
                                <h2 className="h5-mktg">
                                    <a className='Link--primary'>{item.title}</a>
                                </h2>
                                <time className='d-block f5-mktg text-medium color-fg-muted mt-14px'>{item.created_at}</time>
                                {/* <li className="mb-10 ml-4">
                                    <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                                    <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">{item.created_at}</time>
                                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{item.title}</h3>
                                    <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">{item.content}</p>
                                    <a href="#" className="inline-flex items-center py-2 px-4 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700">Learn more <svg className="ml-2 w-3 h-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></a>
                                </li> */}
                            </div>
                            <div className='col-12 col-md-7'>
                                <div className='pb-5 pt-0 py-md-7 changelog-single-content-wrap border-bottom'>
                                    <div className='post__content changelog-single-content js-show-all-target'>
                                        <p>{item.content}</p>
                                    </div>

                                </div>

                            </div>
                        </article>

                    )

                })
                }
            {/* //     <ol className="relative border-l border-gray-200 dark:border-gray-700">

            // </ol> */}
            </>

        );
    }
}

export default Timeline;