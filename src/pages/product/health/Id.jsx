import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import SingleProduct from "../../../components/singleProduct/SingleProduct";
import { store } from "../../../store/Context";

let validate = false;
const Id = () => {
  const { id } = useParams();
  const context = useContext(store);
  const navigate = useNavigate();
  const [Product, setProduct] = useState([]);
  const [similarProducts, setSimilarProducts] = useState([]);
  useEffect(() => {
    validate = context.Beauty.Products["health"].some(
      (item) => item.id === id
    );
  }, [id]);
  useEffect(() => {
    if (!validate) {
      navigate("/404");
    } else {
      setProduct(
        context.Beauty.Products["health"].find((item) => item.id === id)
      );
      setSimilarProducts(context.Beauty.Products["health"]);
    }
  }, [validate, id]);
  return validate ? (
    <SingleProduct
      product={Product}
      similarProducts={similarProducts}
      params={id}
      subCrumbName="health"
      forBreadcrumbFa="سلامتی"
      subPath="Beauty"
    />
  ) : null;
};

export default Id;
