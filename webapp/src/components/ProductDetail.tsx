import React, {useContext, useState, useEffect} from "react";
import {useParams} from "react-router-dom";
import {getProductById} from "../api/api";
import {ProductType} from "../shared/shareddtypes";
import {Button, CardActionArea, CardActions, Grid} from "@mui/material";
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

    const handleAddToCart = (product: ProductType) => {
        dispatch({
            payload: product,
            type: "ADD",
        });
    };

    if (product) {
        return (
            <div className={"productDetail"}>
                <Grid container direction="row">
                    <Grid item>
                        <Card>
                            <CardMedia
                                component="img"
                                height="200"
                                image={product.image}
                                alt={product.name}
                            />
                        </Card>
                    </Grid>
                    <Grid item>
                        <Box sx={{display: 'flex', flexDirection: 'column'}}>
                            <CardActionArea>

                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        {product.name + " - " + product.price + "€"}
                                    </Typography>

                                    <Typography gutterBottom variant="h6" component="div">
                                        {"Aquí iría la descripción"}
                                    </Typography>
                                </CardContent>

                            </CardActionArea>
                            <CardActions sx={{display: 'flex', flexDirection: 'column', marginTop: 'auto'}}>
                                <button className={"buttonAddCartPDetail"} onClick={() => handleAddToCart(product)}>
                                    Add to cart
                                </button>
                            </CardActions>
                        </Box>
                    </Grid>
                </Grid>
            </div>
        );
    } else {
        return <h1> No product could be loaded :( </h1>;
    }
};

export default ProductDetails;
