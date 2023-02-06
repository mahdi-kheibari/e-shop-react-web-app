import React from "react";
import { Link as MuiLink } from "@mui/material";
const LinkUtils = (LinkComponent) => {
    function Link({children,...other}){
        return (
            <MuiLink component={LinkComponent} underline="none" {...other}>
                {children}
            </MuiLink>
        )
    }
    return Link;
};

export default LinkUtils;
