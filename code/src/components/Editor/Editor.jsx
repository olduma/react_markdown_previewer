// components/Editor/TextEditor.jsx
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setText } from '../../features/editor/editorSlice';
import {TextareaAutosize} from "@mui/material";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPenToSquare} from "@fortawesome/free-solid-svg-icons";

function TextEditor() {
    const text = useSelector((state) => state.editor.text);
    const dispatch = useDispatch();

    const handleTextareaChange = (event) => {
        dispatch(setText(event.target.value));
    };

    return (
        <Card style={{backgroundColor:"#004670", marginBottom:"30px"}}>
            <CardContent>
                <Typography variant="h6" color="white">
                    <FontAwesomeIcon icon={faPenToSquare} color="white" style={{marginRight:"10px"}}/>
                    Editor</Typography>
                <TextareaAutosize
                    id="editor"
                    value={text}
                    onChange={handleTextareaChange}
                    placeholder="Type your text here..."
                    minRows={10} // Specify the minimum number of rows
                    maxRows={20} // Specify the maximum number of rows
                    style={{ width: '100%', resize: 'vertical'}} // Customize the style
                />
            </CardContent>
        </Card>
    );
}

export default TextEditor;
