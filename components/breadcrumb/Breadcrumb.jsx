import { Box } from "@mui/material";
import React from "react";
import Link from "../utils/Link";
import style from "./Breadcrumb.module.scss";

const Breadcrumb = ({
  activeText,
  subCrumb,
  subCrumbSingle,
  subPath,
  subCrumbName,
  subCrumbPath,
}) => {
  return (
    <Box
      sx={{ display: "flex", mb: 1, bgcolor: "light.main" }}
      className={`${style["breadcrumb"]}`}
    >
      <Link href={"/"}>Home</Link>
      <span className={`${style["breadcrumb-divider"]}`}>/</span>
      <Link href={"/Products"}>Products</Link>
      <span className={`${style["breadcrumb-divider"]}`}>/</span>
      {subCrumb ? (
        <Link href={`/Products/category/${subCrumbPath}`}>{subCrumbName}</Link>
      ) : null}
      {subCrumbSingle ? (
        <Link href={`/Products/${subPath}/${subCrumbPath}`}>{subCrumbName}</Link>
      ) : null}
      {subCrumb || subCrumbSingle ? (
        <span className={`${style["breadcrumb-divider"]}`}>/</span>
      ) : null}
      <Box component={"span"} sx={{ color: "muted.main" }}>
        {activeText}
      </Box>
    </Box>
  );
};

export default Breadcrumb;
