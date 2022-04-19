import React, {useContext, useState, useEffect} from "react";
import {useParams} from "react-router-dom";
import {getProductById} from "../api/api";
import {ProductType} from "../shared/shareddtypes";
import {CardActions, Grid} from "@mui/material";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import Box from '@mui/material/Box';
import {CartContext} from "./CartContext";
import "./ProductDetail.css";

const ProductDetails = () => {

    const {id} = useParams();
    const [product, setProduct] = useState<ProductType>();
    const {dispatch} = useContext(CartContext);

    const getProduct = async () => {
        await setProduct(await getProductById(id!));
    };

    useEffect(() => {
        getProduct();
    }, []);

    const handleAddToCart = (productItem: ProductType) => {
        dispatch({
            payload: productItem,
            type: "ADD",
        });
    };

    if (product) {
        return (
            <div className={"productDetail"}>
                <Grid container direction="row" spacing={0} >
                    <Grid item>
                        <Card>
                            <CardMedia className={"imageProductDetails"}
                                component="img"
                                image={product.image}
                                alt={product.name}
                            />
                        </Card>
                    </Grid>
                        <Box className="borderDetailsBox" sx={{display: 'flex', flexDirection: 'column', alignSelf: 'baseline', minWidth:'40%', maxWidth:'65%', maxHeight:'50%', overflow:'auto'}}>
                            <CardContent>
                                <Typography gutterBottom variant="h4" component="div">
                                    {product.name + " - " + product.price + "€"}
                                </Typography>

                                <Typography gutterBottom variant="h6" component="div" sx={{wordWrap:'break-word'}}>
                                    {product.description}
                                </Typography>
                            </CardContent>

                            <CardActions>
                                <button className={"buttonAddCartPDetail"} onClick={() => handleAddToCart(product)}>
                                    Add to cart
                                </button>
                            </CardActions>
                        </Box>
                </Grid>
            </div>
        );
    } else {
        return <h1> No product could be loaded :( </h1>;
    }
};

export default ProductDetails;
