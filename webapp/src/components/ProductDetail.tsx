import React, {useContext, useState, useEffect} from "react";
import {useParams} from "react-router-dom";
import {getProductById, getRatingsForProduct, addRatingForProduct} from "../api/api";
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
import {useSession} from "@inrupt/solid-ui-react";

const ProductDetails = () => {

    const {id} = useParams();
    const [product, setProduct] = useState<ProductType>();
    const {dispatch} = useContext(CartContext);
    const [ratings, setRatings] = useState<RatingType[]>();
    let [ratingList, setRatingList] = useState<JSX.Element[]>([]);
    const {session} = useSession();

    let ratingValue = 2.5;

    function setValue(newRating : number | null) {
        if(newRating != null){
            ratingValue = newRating;
        }
    }

    // LOAD RATINGS
    const getProduct = async () => {setProduct(await getProductById(id!));};
    const getRatings = async () => {setRatings(await getRatingsForProduct(id!));}; // 4 elementos, profilepic, name, comment, rating
    let updateComments = () => {ratings?.forEach(r => {ratingList.push(
        <CardContent className={"ratingBox"}>
            <Rating value={r.rating} precision={0.5} readOnly size={"medium"}/>
            <Typography variant="h5" component="div">
                {r.user}
            </Typography>

            <Typography variant="h6" component="div">
                {r.comment}
            </Typography>
        </CardContent>
    )})};

    useEffect(() => {
        getProduct();
        getRatings();
    }, []);

    updateComments();
    // LOAD RATINGS

    // ADD RATING
    let userName = "Guest";

    if(session.info.isLoggedIn) {
        userName = document.getElementById("userData")!.textContent!;
    }

    function addRating(message: string, rating: number){

        const newRating : RatingType = {

            user: userName,
            comment: message,
            rating: rating,
            profileImage: "",
            product: product!
        };

        const addRating = addRatingForProduct(newRating);

        document.getElementById("reviews")!.innerHTML = "";

        setRatingList(ratingList.concat([<CardContent id={"ratingBox"} className={"ratingBox"}>
            <Rating value={newRating.rating} precision={0.5} readOnly size={"medium"}/>
            <Typography variant="h5" component="div">
                {newRating.user}
            </Typography>

            <Typography variant="h6" component="div">
                {newRating.comment}
            </Typography>
        </CardContent>]));
    }
    // ADD RATING

    const handleAddToCart = (productItem: ProductType) => {
        dispatch({
            payload: productItem,
            type: "ADD",
        });
    };

    if (product) {
        return (
            <div className={"productDetail"}>
                <Grid className={"upperDetail"} container direction="row" spacing={0} >
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
                                <Typography fontFamily={"Trebuchet MS"} className={"detailsName"} gutterBottom variant="h4" component="div">
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
                    <Typography fontFamily={"Trebuchet MS"} gutterBottom variant="h4" component="div">
                        Add a review
                    </Typography>
                    <div className={"addReview"}>
                        <div className={"reviewText"}>
                            <input className={"reviewInput"} id={"reviewInput"} type={"text"}></input>
                        </div>

                        <button className={"reviewButton"} title={"setMessage"} type = "button" onClick={() => addRating(
                            (document.getElementById("reviewInput") as HTMLInputElement).value,
                            ratingValue)}>Send</button>
                    </div>
                    <div id="reviews" className="reviews">
                        {
                            ratingList
                        }
                    </div>
                </div>

            </div>
        );
    } else {
        return <h1> No product could be loaded :( </h1>;
    }
};

export default ProductDetails;
