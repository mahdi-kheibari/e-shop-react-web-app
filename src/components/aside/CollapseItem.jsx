import { Accordion, AccordionDetails, AccordionSummary, Box, Typography } from "@mui/material";
import React from "react";
import NavLink from "../utils/NavLink";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

function CollapseItem(props) {
  return (
    <Box component={"li"} sx={{ mb: 1 }}>
      <Accordion sx={{boxShadow:"none"}}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} sx={{"& .MuiAccordionSummary-content":{my:0}}}>
          {props.link ? (
            <NavLink
              to={props.linkRoute}
              className={`${({ isActive }) => {
                return isActive ? "active-category" : undefined;
              }} btn-toggle rounded`}
              sx={{ alignItems: "center" }}
            >
              {({ isActive }) => (
                <Typography
                  component={"span"}
                  color={isActive ? "primary" : "initial"}
                  sx={{ px: 1,textTransform:"capitalize",fontSize:"1rem" }}
                >
                  {props.name}
                </Typography>
              )}
            </NavLink>
          ) : (
            <Box
              className="btn-toggle"
              sx={{textTransform:"capitalize",fontSize:"1rem"}}
            >
              {props.name}
            </Box>
          )}
        </AccordionSummary>
        <AccordionDetails>
          <Box
            component={"ul"}
            className="btn-toggle-nav font-14"
            sx={{ listStyle: "none", pb: 1,pl:0 }}
          >
            {Object.keys(props.items).map((key) => (
              <Box component={"li"} key={key} sx={{"& a:hover span":{color:"primary.main"}}}>
                <NavLink
                  to={props.items[key].route}
                  className={`${({ isActive }) => {
                    return isActive ? "active-category" : undefined;
                  }} rounded`}
                  sx={{ alignItems: "center" }}
                >
                  {({ isActive }) => (
                    <Typography
                      component={"span"}
                      color={isActive ? "primary" : "initial"}
                      sx={{ px: 1 }}
                      className="font-14"
                    >
                      {key}
                    </Typography>
                  )}
                </NavLink>
              </Box>
            ))}
          </Box>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
}

export default CollapseItem;
