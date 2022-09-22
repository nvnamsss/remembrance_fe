import React, { FC, useState } from 'react'

import { useAuthDispatch, useAuthState } from '../contexts/Auth';
import { comment, CommentRequest } from '../services/Event';

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
        console.log("submitting", "ddanthanhh");

        let req: CommentRequest = {
            event_id: event_id,
            user_id: 1,
            comment: content,
            commented_by: auth["user"],
        }
        console.log("submitting", req);

        let res = await comment(req);
        console.log(res);
        if (res.meta.status == 200) {
            let item: CommentItem = {
                user_id: 1,
                comment: content,
                commented_by: auth["user"],
                created_at: new Date().toDateString(),
            }
            setData([...data, item]);
        }
        setContent("");
    }

    return <>
        <div>
            <div className='comment-header comment-pl position-relative'>
                <h1 className=''>
                    Comments
                </h1>
                <div className='comment-react'>
                </div>
                <div className='comment-buttons'>

                </div>
            </div>

            <div className='comment-list'>
                <ul>
                    {
                        data.map((item: CommentItem) => {
                            return (
                                <li className='d-block mr-2-l mt-2-l'>
                                    <div className='comment-li'>
                                        <div className='comment-content'>
                                            <span className='comment-by' > <b>{item.commented_by}</b></span>
                                            <div>
                                                <span className='content'>{item.comment}</span>
                                            </div>
                                        </div>
                                        <div className='comment-utilities'>
                                            <span>{item.created_at}</span>
                                        </div>
                                    </div>

                                </li>
                            )

                        })
                    }
                </ul>
 
            </div>
            <div className='comment-box'>
                    <input className='comment-box-input' value={content} placeholder='Write here...' onChange={(e) => setContent(e.target.value)}></input>
                    <button className='comment-box-send-button bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded bi bi-send' onClick={handleSubmit}>
                </button>
            </div>
        </div>
    </>
};
// export class CommentClass extends React.Component<any, any, CommentData> {
//     // auth = useAuthState();
//     constructor(props: any) {
//         super(props);
//         this.state = {
//             content: "",
//         }
//     }

//     handleSubmit(e: any) {
//         console.log("submitting", "ddanthanhh");

//         let req: CommentRequest = {
//             event_id: this.props.event_id,
//             user_id: 1,
//             comment: this.state.content,
//             commented_by: "ddanthanhh",
//         }
//         console.log("submitting", req);

//         let rs = comment(req);
//         rs.then((res) => {
//             console.log(res);
//         });
//     }

//     render() {
//         return (
//             <>
//                 <div>
//                     <div className='comment-header comment-pl position-relative'>
//                         <h1 className=''>
//                             Comments
//                         </h1>
//                         <div className='comment-react'>
//                         </div>
//                         <div className='comment-buttons'>

//                         </div>
//                     </div>
//                     <div className='comment-box'>
//                         <input className='comment-box-input' placeholder='Write here...' onChange={(e) => this.setState({content: e.target.value})}></input>
//                         <button className='comment-box-send-button bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded' onClick={this.handleSubmit}>Send</button>
//                     </div>
//                     <div className='comment-list'>
//                         <ul>
//                             {
//                                 this.props.items.map((item: CommentItem) => {
//                                     return (
//                                         <li className='d-block mr-2-l mt-2-l'>
//                                             <div className='comment-li'>
//                                                 <div className='comment-content'>
//                                                     <span className='comment-by' > <b>{item.commented_by}</b></span>
//                                                     <div>
//                                                         <span className='content'>{item.comment}</span>
//                                                     </div>
//                                                 </div>
//                                                 <div className='comment-utilities'>
//                                                     <span>{item.created_at}</span>
//                                                 </div>
//                                             </div>

//                                         </li>
//                                     )

//                                 })
//                             }
//                         </ul>
//                     </div>
//                 </div>
//             </>
//         );
//     }
// }
