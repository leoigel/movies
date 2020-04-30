import React, { useState } from 'react';
import { Paper as PaperMaterialUI } from '@material-ui/core/';

import styled from 'styled-components';

const CommentReview = ({ newContent, setNewCommnets,info }) => {
    const [userContent, setUserContent] = useState('');

    const deleteItem = (id) => {
        return setNewCommnets(newContent.filter(content => content.id !== id))
    }
    const editAndSaveComment = (id, trueOrFalse) => {

        const openClose = newContent.map(item => {
            if (item.id === id) {
                return {
                    id: item.id,
                    content: item.content += userContent,
                    editing: trueOrFalse
                }
            } else {
                return item;
            }
        })
        setNewCommnets(openClose);
        setUserContent('');

    }
    const writeNewcontent = (e, answer) => {
        answer.content = '';
        setUserContent(e.target.value);
    }
    return (
        <>

            {newContent.length > 0 && (
                newContent.map(answer => {
                    return (
                        <div key={answer.key}>
                            {!answer.editing ? (
                                <Paper elevation={3}>
                                    <>
                                        <div>
                                            <Title>
                                                <H3>{` A review by ${localStorage.getItem('userName')}`}</H3>
                                                <H5>{`Written by ${localStorage.getItem('userName')}`}</H5>
                                            </Title>
                                            <IconPencil className="fas fa-pencil-alt" onClick={() => editAndSaveComment(answer.id, true)} />
                                            <IconTrash className="fas fa-trash-alt" onClick={() => deleteItem(answer.id)} />
                                        </div>
                                        <Paragraph>{answer.content}</Paragraph>

                                    </>
                                </Paper>
                            ) : (
                                    <Paper>
                                        <Textarea onChange={(e) => writeNewcontent(e, answer)} style={{ rows: "4", cols: "50", maxlength: "50" }}>{answer.content}</Textarea>
                                        <IconSave className="far fa-save" onClick={() => editAndSaveComment(answer.id, false)} />
                                    </Paper>
                                )}
                        </div>
                    )
                })

            )}
        </>
    )
}

export default CommentReview;


const Paper = styled(PaperMaterialUI)`
padding:24px;
margin:8px;
max-width:70vw;
`

const IconPencil = styled.i`
font-size:25px;
`;

const IconTrash = styled.i`
font-size:25px;
`;

const IconSave = styled.i`
font-size:35px;
`



const Paragraph = styled.p`
width:70vw;
word-break: break-all;
`

const Textarea = styled.textarea`
font-family: 'Darker Grotesque', sans-serif;
font-size:18px
margin-top: 10px;
border-radius: 5px;
border: 1px solid #787878;
padding: 5px 5px 5px 5px;
width:100%;
height: 70px;
transition: 0.2s;
box-sizing: border-box;
margin:10px auto;
resize: none;
`
const Title = styled.div`
margin:8px;
`

const H3 = styled.h3`
margin:0px;
padding:0px;
`
const H5 = styled.h5`
margin:0px;
padding:0px;
`