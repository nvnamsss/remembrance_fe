import { TextField } from "@mui/material";
import React, { ReactElement, useState, useEffect, useRef } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Timeline from "../components/Timeline";
import { getEvent, searchEvent, createEvent, CreateEventRequest } from "../services/Event";
import Modal from 'react-modal';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import { Button, Form, Stack } from "react-bootstrap";
import {DateTimePicker} from '@mui/x-date-pickers';
import { v4 as uuidv4 } from 'uuid';

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

    // creating event
    const [eventName, setEventName] = useState("");
    const [eventContent, setEventContent] = useState("");
    const [eventTime, setEventTime] = useState(new Date());

    const timeoutRef = useRef<any>(null);

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
        console.log("hi mom");

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
        let req : CreateEventRequest = {
            code: uuidv4(),
            name: eventName,
            description: "This event is posted by ddanthanhh",
            content: eventContent,
            type: 'Browser',
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

    return (
        <>
            <Header></Header>
            <div>
                <Stack direction="horizontal" gap={3}>
                    <TextField
                        className="auth-form-body remembrance-search"
                        size="small"
                        label="Keyword"
                        value={keyword}
                        onChange={(e) => setKeyword(e.target.value)}
                    />

                    <select className="form-select remembrance-selected" value={type} onChange={(e) => setType(e.target.value)}>
                        <option value="" selected>All</option>
                        <option value="new">New</option>
                        <option value="edited">Recently edited</option>
                    </select>

                    <Button onClick={openModal} variant="primary">Create</Button>{' '}

                    <Modal
                        isOpen={modalIsOpen}
                        onAfterOpen={afterOpenModal}
                        onRequestClose={onClickCloseModal}
                        style={modalStyles}
                        contentLabel="Example Modal"
                    >
                        <div className="modal-header">
                            <h5 className="modal-title fs-5" font-weight="bold">Create event</h5>
                        </div>

                        <div className="modal-body">
                            {/* <FloatingLabel
                                controlId="floatingCode"
                                label="Code"
                                className="mb-3"
                            >
                                <Form.Control type="text" placeholder="Code" />
                            </FloatingLabel> */}

                            <FloatingLabel className="mb-3" controlId="floatingName" label="Name" >
                                <Form.Control type="text" placeholder="Name" value={eventName} onChange={(newValue) => { setEventName(newValue.target.value); }}/>
                            </FloatingLabel>

                            <FloatingLabel className="mb-4" controlId="floatingContent" label="Content">
                                <Form.Control as="textarea" placeholder="Content" value={eventContent} onChange={(newValue) => { setEventContent(newValue.target.value); }}/>
                            </FloatingLabel>

                            <DateTimePicker
                                label="Time"
                                renderInput={(props) => <TextField {...props} />}
                                value={eventTime}
                                onChange={(newValue) => {
                                    setEventTime(newValue);
                                }}
                            />
                         
                        </div>
                        <div className="modal-footer">
                            <Button className="remembrance-modal-close-button" variant="secondary" onClick={onClickCloseModal}>Close</Button>
                            <Button onClick={onClickCreate}>Create</Button>
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