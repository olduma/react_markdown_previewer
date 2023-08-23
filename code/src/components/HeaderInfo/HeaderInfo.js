import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEarth} from "@fortawesome/free-solid-svg-icons/faEarth";
import Typography from "@mui/material/Typography";

function HeaderInfo(props) {
    return (
        <Typography variant="h3" color="white" style={{textAlign: 'center'}}>
            <FontAwesomeIcon icon={faEarth} bounce color="white" style={{marginRight: '10px'}}/>
            React Markdown
        </Typography>
    );
}

export default HeaderInfo;
