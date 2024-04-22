import {
    Box, 
    Button, 
} from "@mui/material";
import {useHistory} from "react-router-dom";

import "./Header.css";
import { color, fontSize } from "@mui/system";

const Header = ({handleUploadButton, children})=>{
    const history = useHistory();
    return (
        <Box className="header" name="header">
            <Box className="header-logo"  onClick={()=>{
              history.push(``,{from:"/"});
            }}>
               
               <p className="logotxt">War</p> <p className="logotxt1">game</p>
            </Box>
            {children}
            {
                (children)?
                <Button variant="contained" onClick={handleUploadButton}>
                    Upload
                </Button>
                :
                <div className="video-page-height"></div>
            }
        </Box>
    );
}

export default Header;