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
    validate = context.House.Products["video-audio"].some(
      (item) => item.id === id
    );
  }, [id]);
  useEffect(() => {
    if (!validate) {
      navigate("/404");
    } else {
      setProduct(
        context.House.Products["video-audio"].find((item) => item.id === id)
      );
      setSimilarProducts(context.House.Products["video-audio"]);
    }
  }, [validate, id]);
  return validate ? (
    <SingleProduct
      product={Product}
      similarProducts={similarProducts}
      params={id}
      subCrumbName="video-audio"
      forBreadcrumbFa="صوتی و تصویری"
      subPath="House"
    />
  ) : null;
};

export default Id;
