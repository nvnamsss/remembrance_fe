import React, { useState, useEffect } from 'react'
import { CommentItem, Comment } from './Comment';
import { format } from 'date-fns'

export interface TimelineData {
    items: TimelineItem[]
}

export interface TimelineItem {
    id: number,
    title: string,
    occurred_at: string,
    content: string,
    tags: string[],
    comments: CommentItem[],
}

class Timeline extends React.Component<any, any, TimelineData>  {
    constructor(props: any) {
        super(props);
        console.log(props.items);

    }
    render() {
        return (
            <>
                <div className='mt-md-7 mb-9 mb-md-12'>
                    <div className='mx-auto p-responsive-blog'>
                        {this.props.items.map((item: TimelineItem) => {
                            return (
                                <article className="gutter-spacious flex-wrap position-relative timeline changelog type-changelog status-publish hentry changelog-label-dependency-graph changelog-label-security-and-compliance changelog-label-supply-chain">
                                    <div className="pb-4 pt-5 pt-md-7 position-relative">
                                        <div className="changelog-single-details top-7">
                                            <svg className='octicon octicon-commit position-absolute left-0 color-bg-default color-fg-muted' xmlns='xmlns="http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={28} height={28}>
                                                <path fillRule='evenodd' d='M15.5 11.75a3.5 3.5 0 11-7 0 3.5 3.5 0 017 0zm1.444-.75a5.001 5.001 0 00-9.888 0H2.75a.75.75 0 100 1.5h4.306a5.001 5.001 0 009.888 0h4.306a.75.75 0 100-1.5h-4.306z' fill='currentColor'></path>
                                            </svg>
                                            <h2 className="h5-mktg font-adddington-medium">
                                                <a className='Link--primary'>{item.title}</a>
                                            </h2>
                                            <time className='d-block f5-mktg text-medium color-fg-muted mt-14px'>{format(new Date(item.occurred_at), `EEEE, MMMM dd, yyyy 'at' hh:mm`)}</time>
                                            {item.tags?.length > 0 &&
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
                                            }

                                        </div>
                                    </div>


                                    <div className=''>
                                        <div className='pb-5 pt-0 py-md-5 changelog-single-content-wrap border-bottom'>
                                            <div className='post__content changelog-single-content js-show-all-target'>
                                                <p className='font-adddington-medium'>{item.content}</p>
                                            </div>

                                        </div>

                                    </div>

                                    <Comment items={item.comments} event_id={item.id}></Comment>
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