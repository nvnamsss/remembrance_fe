import React, { useState, useEffect, FC } from 'react'
import { CommentItem, Comment } from './Comment';
import { format } from 'date-fns'
import { PencilIcon } from '@primer/octicons-react'
import { Button, FloatingLabel, Form } from 'react-bootstrap';
import { DateTimePicker } from '@mui/x-date-pickers';
import { TextField } from '@mui/material';
import { updateEvent, UpdateEventRequest } from '../services/Event';
import Modal from 'react-modal';
import { WithContext as ReactTags } from 'react-tag-input';

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

const modalStyles = {
    content: {
        top: '50%',
        left: '50%',
        // right: 'auto',
        bottom: 'auto',
        // marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};


const Timeline: FC<TimelineData> = ({ items }) => {
    const [modalIsOpen, setIsOpen] = React.useState(false);
    const [eventID, setEventID] = useState(0);
    const [eventName, setEventName] = useState("");
    const [eventContent, setEventContent] = useState("");
    const [eventTime, setEventTime] = useState(new Date());
    const [tags, setTags] = React.useState([]);

    const KeyCodes = {
        comma: 188,
        enter: 13
    };

    const delimiters = [KeyCodes.comma, KeyCodes.enter];

    function afterOpenModal() {
        // references are now sync'd and can be accessed.
        subtitle.style.color = '#f00';
    }

    function onClickCloseModal() {
        setIsOpen(false);
    }

    async function onClickUpdate() {
        let ts: string[] = [];
        for (let i = 0; i < tags.length; i++) {
            ts.push(tags[i]["id"]);
        }
        let req: UpdateEventRequest = {
            id: eventID,
            name: eventName,
            description: "This event is posted by ddanthanhh",
            content: eventContent,
            tags: ts,
            occurred_at: eventTime.toISOString()
        }

        let res = await updateEvent(req);
        if (res.meta.status == 200) {
            console.log('ok');
        }

        setIsOpen(false);
    }

    async function onClickEdit(item: TimelineItem) {
        setEventID(item.id);
        setEventName(item.title);
        setEventContent(item.content);
        setEventTime(new Date(item.occurred_at));
        setTags(item.tags.map((value) => {
            return {
                "id": value,
                "text": value,
            };
        }));
        setIsOpen(true);
    }

    const handleDelete = i => {
        setTags(tags.filter((tag, index) => index !== i));
    };

    const handleAddition = tag => {
        setTags([...tags, tag]);
        console.log(tags);
    };

    return <>
        <Modal
            className='remembrance-modal'
            isOpen={modalIsOpen}
            onAfterOpen={afterOpenModal}
            onRequestClose={onClickCloseModal}
            style={modalStyles}
            contentLabel="Example Modal"
        >
            <div className="modal-header font-adddington-medium">
                <h5 className="modal-title fs-5" font-weight="bold">Create event</h5>
            </div>

            <div className="modal-body font-adddington-medium">
                {/* <FloatingLabel
                                controlId="floatingCode"
                                label="Code"
                                className="mb-3"
                            >
                                <Form.Control type="text" placeholder="Code" />
                            </FloatingLabel> */}

                <FloatingLabel className="mb-3" controlId="floatingName" label="Name" >
                    <Form.Control type="text" placeholder="Name" value={eventName} onChange={(newValue) => { setEventName(newValue.target.value); }} />
                </FloatingLabel>

                <FloatingLabel className="mb-4" controlId="floatingContent" label="Content">
                    <Form.Control as="textarea" placeholder="Content" value={eventContent} onChange={(newValue) => { setEventContent(newValue.target.value); }} />
                </FloatingLabel>

                <DateTimePicker
                    className="mb-3"
                    label="Time"
                    renderInput={(props) => <TextField {...props} />}
                    value={eventTime}
                    onChange={(newValue) => {
                        setEventTime(newValue);
                    }}
                />
                <ReactTags
                    tags={tags}
                    delimiters={delimiters}
                    handleDelete={handleDelete}
                    handleAddition={handleAddition}
                    inputFieldPosition="top"
                    autocomplete
                />
            </div>
            <div className="modal-footer">
                <Button className="remembrance-modal-close-button font-adddington-medium" variant="secondary" onClick={onClickCloseModal}>Close</Button>
                <Button className="remembrance-create-button font-adddington-medium" onClick={onClickUpdate}>Update</Button>
            </div>
        </Modal>
        <div className='mt-md-7 mb-9 mb-md-12'>
            <div className='mx-auto p-responsive-blog'>
                {items.map((item: TimelineItem) => {
                    return (
                        <article className="gutter-spacious flex-wrap position-relative timeline changelog type-changelog status-publish hentry changelog-label-dependency-graph changelog-label-security-and-compliance changelog-label-supply-chain">
                            <div className="pb-4 pt-5 pt-md-7 position-relative">
                                <div className="changelog-single-details top-7">
                                    <svg className='octicon octicon-commit position-absolute left-0 color-bg-default color-fg-muted' xmlns='xmlns="http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={28} height={28}>
                                        <path fillRule='evenodd' d='M15.5 11.75a3.5 3.5 0 11-7 0 3.5 3.5 0 017 0zm1.444-.75a5.001 5.001 0 00-9.888 0H2.75a.75.75 0 100 1.5h4.306a5.001 5.001 0 009.888 0h4.306a.75.75 0 100-1.5h-4.306z' fill='currentColor'></path>
                                    </svg>
                                    <h2 className="h5-mktg font-adddington-medium">
                                        <a className='Link--primary'>{item.title}</a>
                                        <button className='edit-button' onClick={() => {
                                            onClickEdit(item);
                                        }}>
                                            <PencilIcon className=''></PencilIcon>
                                        </button>

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

                                <div>
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

};

export default Timeline;