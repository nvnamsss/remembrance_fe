import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'

export interface TimelineData {
    items: TimelineItem[]
}

export interface TimelineItem {
    title: string,
    created_at: string,
    content: string,
    tags: string[],
}
class Timeline extends React.Component<any, any, TimelineData>  {
    constructor(props: any) {
        super(props);
        console.log(props.items);

    }
    render() {
        return (
            <>
                <div className='js-ajax-root mt-md-7 mb-9 mb-md-12'>
                    <div className='container-xl mx-auto p-responsive-blog js-ajax-landing'>
                        {this.props.items.map((item: TimelineItem) => {
                            console.log("hi mom");
                            return (
                                <article className="d-flex gutter-spacious flex-wrap position-relative timeline js-ajax-fetchable post-65764 changelog type-changelog status-publish hentry changelog-label-dependency-graph changelog-label-security-and-compliance changelog-label-supply-chain">
                                    <div className="pb-4 pt-5 pt-md-7 col-md-5-limit position-relative">
                                        <div className="changelog-single-details position-sticky top-7">
                                            <svg className='octicon octicon-commit position-absolute left-0 color-bg-default color-fg-muted' xmlns='xmlns="http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={28} height={28}>
                                                <path fillRule='evenodd' d='M15.5 11.75a3.5 3.5 0 11-7 0 3.5 3.5 0 017 0zm1.444-.75a5.001 5.001 0 00-9.888 0H2.75a.75.75 0 100 1.5h4.306a5.001 5.001 0 009.888 0h4.306a.75.75 0 100-1.5h-4.306z' fill='currentColor'></path>
                                            </svg>
                                            <h2 className="h5-mktg">
                                                <a className='Link--primary'>{item.title}</a>
                                            </h2>
                                            <time className='d-block f5-mktg text-medium color-fg-muted mt-14px'>{item.created_at}</time>
                                            <ul className='d-inline-block list-style-none post-hero__categories mt-2-l'>
                                                {
                                                    
                                                    item.tags?.map((tag: string) => {
                                                        return (
                                                            <li className='d-inline-block mr-2-l mt-2-l'>
                                                                <a href="" className='f5-mktg pill-label text-gradient-purple-coral text-bold'>{tag}</a>
                                                            </li>
                                                        )

                                                    })
                                                }

                                            </ul>
                                        </div>
                                    </div>


                                    <div className='col-md-7'>
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
                    </div>

                </div>

            </>

        );
    }
}

export default Timeline;