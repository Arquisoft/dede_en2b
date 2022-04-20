import React, {useContext, useState, useEffect} from "react";
import {useParams} from "react-router-dom";
import {getProductById, getRatingsForProduct} from "../api/api";
import {ProductType, RatingType} from "../shared/shareddtypes";
import {CardActions, Grid} from "@mui/material";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import Box from '@mui/material/Box';
import {CartContext} from "./CartContext";
import "./ProductDetail.css";

import {Rating} from "@mui/material";

const ProductDetails = () => {

    const {id} = useParams();
    const [product, setProduct] = useState<ProductType>();
    const {dispatch} = useContext(CartContext);
    const [ratings, setRatings] = useState<RatingType[]>();
    const [commentList, setCommentList] = useState<JSX.Element[]>([]);

    let ratingValue = 2.5;

    function setValue(newRating : number | null) {
        if(newRating != null){
            ratingValue = newRating;
        }
    }

    const getProduct = async () => {
        await setProduct(await getProductById(id!));
    };

    const getRatings = async () => {
        await setRatings(await getRatingsForProduct(id!));
    };

    function updateComments() {
        ratings?.forEach(r => {setCommentList([<h1> {r.comment} </h1>])});
    };

    useEffect(() => {
        getProduct();
        getRatings().then(updateComments).then();
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

                                <Rating name="half-rating" defaultValue={2.5} precision={0.5} size="large"
                                        onChange={(event, newValue) => {
                                            setValue(newValue);}}/>
                            </CardContent>

                            <CardActions>
                                <button className={"buttonAddCartPDetail"} onClick={() => handleAddToCart(product)}>
                                    Add to cart
                                </button>
                            </CardActions>
                        </Box>
                </Grid>

                <div className="reviewBlock">
                    <div> Add a review </div>
                    <div className={"addReview"}>
                        <div className={"reviewText"}> <input className={"reviewInput"} type={"text"}></input> </div>
                        <button className={"reviewButton"} title={"setMessage"} type = "button">Send</button>
                    </div>
                    <div className="reviews">
                        {commentList}
                    </div>
                </div>

            </div>
        );
    } else {
        return <h1> No product could be loaded :( </h1>;
    }
};

export default ProductDetails;
