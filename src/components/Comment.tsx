import React, { FC, useState } from 'react'
import { FloatingLabel, Form, FormControl, FormGroup } from 'react-bootstrap';

import { useAuthDispatch, useAuthState } from '../contexts/Auth';
import { comment, CommentRequest } from '../services/Event';
import { format } from 'date-fns'

export interface CommentData {
    event_id: number,
    items: CommentItem[]
}

export interface CommentItem {
    user_id: number,
    comment: string,
    commented_by: string,
    created_at: string,
}

export const Comment: FC<CommentData> = ({ event_id, items }) => {
    const auth = useAuthState();
    const [data, setData] = useState(items);
    const [content, setContent] = useState("");
    async function handleSubmit() {
        let req: CommentRequest = {
            event_id: event_id,
            user_id: auth["profile"]["account_id"],
            comment: content,
            commented_by: auth["profile"]["display_name"],
        }
        console.log("submitting", req);

        let res = await comment(req);
        console.log(res);
        if (res.meta.status == 200) {
            let item: CommentItem = {
                user_id: auth["profile"]["account_id"],
                comment: content,
                commented_by: auth["profile"]["display_name"],
                created_at: new Date().toDateString(),
            }
            setData([...data, item]);
        }
        setContent("");
    }

    return <>
        <div>
            <div className='comment-header comment-pl position-relative font-adddington-medium'>
                <div className='comment-react'>
                </div>
                <div className='comment-buttons'>

                </div>
            </div>

            <div className='comment-list font-adddington-medium'>
                <ul>
                    {
                        data.map((item: CommentItem) => {
                            return (
                                <li className='d-block mr-2-l mt-2-l'>
                                    <div className='comment-li'>
                                        <div className='comment-utilities'>
                                            <span>{format(new Date(item.created_at), `EEEE, MMMM dd, yyyy 'at' hh:mm`)}</span>
                                        </div>
                                        <div className='comment-content'>
                                            <span className='comment-by'> <b>{item.commented_by}</b></span>
                                            <div>
                                                <span className='content'>{item.comment}</span>
                                            </div>
                                        </div>

                                    </div>

                                </li>
                            )

                        })
                    }
                </ul>

            </div>
            <div className='comment-box font-adddington-medium'>
                <Form.Control
                    className='comment-box-input'
                    type="textarea"
                    placeholder='Write here...'
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                />
                {/* <input className='comment-box-input' value={content} placeholder='Write here...' onChange={(e) => setContent(e.target.value)}></input> */}
                <button className='comment-box-send-button' onClick={handleSubmit}>
                    <img className='position-relative' src='../../assets/send-message.png' alt='Send' width='30'></img>
                </button>
            </div>
        </div>
    </>
};
