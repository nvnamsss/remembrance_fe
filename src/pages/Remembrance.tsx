import { TextField } from "@mui/material";
import React, { ReactElement, useState, useEffect, useRef } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Timeline from "../components/Timeline";
import { getEvent, searchEvent, createEvent, CreateEventRequest } from "../services/Event";
import Modal from 'react-modal';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import { Button, Form, Stack } from "react-bootstrap";
import { DateTimePicker } from '@mui/x-date-pickers';
import { v4 as uuidv4 } from 'uuid';
import Select from 'react-select';
import { TriangleDownIcon, TriangleUpIcon } from '@primer/octicons-react'
import { WithContext as ReactTags } from 'react-tag-input';

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


function Remembrance(): ReactElement {
    const [data, setData] = useState([])
    const [lastPage, setLastPage] = useState(false);
    const [modalIsOpen, setIsOpen] = React.useState(false);
    // searching
    const [page, setPage] = useState(1);
    const [keyword, setKeyword] = useState("");
    const [type, setType] = useState("");
    const [tags, setTags] = React.useState([]);

    // creating event
    const [eventName, setEventName] = useState("");
    const [eventContent, setEventContent] = useState("");
    const [eventTime, setEventTime] = useState(new Date());

    const timeoutRef = useRef<any>(null);
    const [showCategory, setShowCategory] = React.useState(false)
    const type2Name = {
        '': 'All',
        'new': 'New',
    }

    const KeyCodes = {
        comma: 188,
        enter: 13
    };

    const delimiters = [KeyCodes.comma, KeyCodes.enter];

    let page_size = 5;

    async function call() {
        let res = await searchEvent({
            page: page,
            page_size: page_size,
            keyword: keyword,
            type: type,
        });
        console.log("list event", res.data);

        let result = [];
        if (res.data != null) {
            res.data.forEach(element => {
                result.push({
                    "id": element.id,
                    "title": element.name,
                    "occurred_at": element.occurred_at,
                    "content": element.content,
                    "tags": element.tags,
                    "comments": element.comments,
                })
            });
        }


        setLastPage(page * page_size > res.meta.total);
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
    }, [keyword, type]);

    function openModal() {
        setIsOpen(true);
    }

    function afterOpenModal() {
        // references are now sync'd and can be accessed.
        subtitle.style.color = '#f00';
    }

    function onClickCloseModal() {
        setIsOpen(false);
    }

    async function onClickCreate() {
        let ts: string[] = [];
        for (let i = 0; i < tags.length; i++) {
            ts.push(tags[i]["id"]);
        }
        let req: CreateEventRequest = {
            code: uuidv4(),
            name: eventName,
            description: "This event is posted by ddanthanhh",
            content: eventContent,
            type: 'Browser',
            tags: ts,
            occurred_at: eventTime.toISOString()
        }

        let res = await createEvent(req);
        if (res.meta.status == 200) {
            setEventName("");
            setEventContent("");
        }

        console.log(res);
        setIsOpen(false);
    }

    const handleDelete = i => {
        setTags(tags.filter((tag, index) => index !== i));
    };

    const handleAddition = tag => {
        setTags([...tags, tag]);
        console.log(tags);
    };

    return (
        <>
            <Header></Header>

            <div className="divider-p24">
                <Stack direction="horizontal" gap={3}>
                    <Form.Control
                        className='auth-form-body remembrance-search font-adddington-medium'
                        type="textarea"
                        placeholder='Keyword'
                        value={keyword}
                        onChange={(e) => setKeyword(e.target.value)}
                    />

                    <div className="">
                        <button className="remembrance-category-toggle" onClick={(e) => { setShowCategory(!showCategory) }}>
                            {type2Name[type] + ' '}
                            {
                                showCategory ?
                                    <TriangleUpIcon className="remembrance-category-toggle-icon"></TriangleUpIcon>
                                    : <TriangleDownIcon className="remembrance-category-toggle-icon"></TriangleDownIcon>
                            }
                            {/* <svg className="octicon octicon-triangle-down" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width={16} height={16}></svg> */}
                        </button>

                        {
                            showCategory ?
                                <nav className='remembrance-category-dropdown position-absolute mt-12x z-100'>
                                    <div className="remembrance-category-dropdown-content">
                                        <a className='d-block' onClick={(e) => { setType('') }}>{type2Name['']}</a>
                                        <a className='d-block' onClick={(e) => { setType('new') }}>{type2Name['new']}</a>
                                    </div>
                                </nav>
                                : null
                        }
                    </div>

                    <Button className='remembrance-create-button font-adddington-medium' onClick={openModal} variant="primary">Create</Button>{' '}

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
                            <Button className="remembrance-create-button font-adddington-medium" onClick={onClickCreate}>Create</Button>
                        </div>
                    </Modal>
                </Stack>

            </div>


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