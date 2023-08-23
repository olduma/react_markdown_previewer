import React from 'react';
import { useSelector } from 'react-redux';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import {marked} from "marked";

function Preview(props) {
    const text = useSelector((state) => state.editor.text);

    const htmlContent = { __html: marked(text) };
    const renderer = new marked.Renderer();
    marked.setOptions({
        renderer,
        breaks: true, // Enable interpreting single line breaks as <br> elements
    });

    return (
        <Card
            style={{ backgroundColor: '#004670' }}>
            <CardContent>
                <Typography variant="h6" color="white">
                    <FontAwesomeIcon icon={faEye} color="white" style={{ marginRight: '10px' }} />
                    Previewer
                </Typography>
                <div
                    id="preview"
                    style={{ width: '100%', resize: 'vertical', backgroundColor:"white"}}
                    dangerouslySetInnerHTML={htmlContent} // Use 'dangerouslySetInnerHTML'
                />
            </CardContent>
        </Card>
    );
}

export default Preview;
