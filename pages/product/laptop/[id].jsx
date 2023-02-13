import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import SingleProduct from "@/components/singleProduct/SingleProduct";
import { store } from "@/store/Context";

const Id = () => {
  const { id } = useParams();
  const context = useContext(store);
  const navigate = useNavigate();
  const [validate, setValidate] = useState("");
  const [Product, setProduct] = useState([]);
  const [similarProducts, setSimilarProducts] = useState([]);
  useEffect(() => {
    const validation = context.Digital.Products["laptop"].some(
      (item) => item.id === id
    );
    if (validation) {
      setValidate("validate");
    } else {
      setValidate("notValidate");
    }
  }, [id]);
  useEffect(() => {
    if (validate==="notValidate") {
      navigate("/404");
    } else {
      setProduct(
        context.Digital.Products["laptop"].find((item) => item.id === id)
      );
      setSimilarProducts(context.Digital.Products["laptop"]);
    }
  }, [validate,id]);
  return validate==="validate" ? (
    <SingleProduct
      product={Product}
      similarProducts={similarProducts}
      params={id}
      subCrumbName="laptop"
      forBreadcrumbFa="لپ تاپ"
      subPath="Digital"
    />
  ) : null;
};

export default Id;
