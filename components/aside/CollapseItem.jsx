import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Typography,
} from "@mui/material";
import React from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import NavLink from "../utils/NavLink";
import { useRouter } from "next/router";

function CollapseItem(props) {
  const router = useRouter();
  return (
    <Box component={"li"} sx={{ mb: 1 }}>
      <Accordion sx={{ boxShadow: "none" }} defaultExpanded>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          sx={{ "& .MuiAccordionSummary-content": { my: 0 } }}
        >
          {props.link ? (
            <NavLink
              href={props.linkRoute}
              activeClassName="active-category"
              className={`btn-toggle rounded`}
            >
              <Typography
                component={"span"}
                color={
                  router.pathname === props.linkRoute ? "primary" : "initial"
                }
                sx={{ px: 1, textTransform: "capitalize", fontSize: "1rem" }}
              >
                {props.name}
              </Typography>
            </NavLink>
          ) : (
            <Box
              className="btn-toggle"
              sx={{ textTransform: "capitalize", fontSize: "1rem" }}
            >
              {props.name}
            </Box>
          )}
        </AccordionSummary>
        <AccordionDetails>
          <Box
            component={"ul"}
            className="btn-toggle-nav font-14"
            sx={{ listStyle: "none", pb: 1, pl: 0 }}
          >
            {Object.keys(props.items).map((key) => (
              <Box
                component={"li"}
                key={key}
                sx={{ "& a:hover span": { color: "primary.main" } }}
              >
                <NavLink href={props.items[key].route} className={`rounded`}>
                  <Typography
                    component={"span"}
                    color={
                      router.pathname === props.items[key].route
                        ? "primary"
                        : "initial"
                    }
                    sx={{ px: 1 }}
                    className="font-14"
                  >
                    {key}
                  </Typography>
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
