import * as React from "react";
import { Button, FormHelperText, TextField, Typography } from '@mui/material';
import {Link} from "react-router-dom";
import Autocomplete from '@mui/material/Autocomplete';
import {ProductType} from "../../shared/shareddtypes";
import {addProduct} from "../../api/api";

const AddProduct = () => {

    const categories = [
        { label: 'Fruit'},
        { label: 'Meat'},
        { label: 'Fish'},
        { label: 'Vegetables'},
        { label: 'Other'},
    ];

    const addProductFunc = () => {

        let nameProduct = (document.getElementById("productName") as HTMLInputElement).value;
        let categoryProduct = (document.getElementById("productCategory") as HTMLInputElement).value;
        let priceProduct = parseInt((document.getElementById("productPrice") as HTMLInputElement).value);
        let imageProduct = (document.getElementById("productImage") as HTMLInputElement).value;
        let descriptionProduct = (document.getElementById("productDescription") as HTMLInputElement).value;

        let product: ProductType = {
            category: categoryProduct, description: descriptionProduct, id: 0, image: imageProduct, name: nameProduct, price: priceProduct

        }

        addProduct(product).then();
    }

    return (
        <div>
            <Typography id="addressTitle" variant='h3'>Add a product to the catalog</Typography>

            <form id="productForm" className={"productForm"}>

                <TextField sx={{width: '75%'}} label="Name" id="productName" className={"productName"}
                           aria-describedby="productNameExample" required={true}/>
                <FormHelperText sx={{paddingBottom: '2%'}} id="productNameExample">For example: Salmon</FormHelperText>

                <Autocomplete
                    disablePortal
                    id="productCategory"
                    options={categories}
                    sx={{ width: 300 }}
                    renderInput={(params) => <TextField {...params} label="Category" />}
                />

                <TextField inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }} sx={{width: '75%'}} label="Price" id="productPrice" className={"productPrice"}
                           aria-describedby="productPriceExample" required={true}/>
                <FormHelperText sx={{paddingBottom: '2%'}} id="productPriceExample">For example: 9.50</FormHelperText>

                <TextField sx={{width: '75%'}} label="Image" id="productImage" className={"productImage"}
                           aria-describedby="productImageExample" required={true}/>
                <FormHelperText sx={{paddingBottom: '2%'}} id="productImageExample">For example: https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80</FormHelperText>

                <TextField sx={{width: '75%'}} label="Description" id="productDescription" className={"productDescription"}
                           aria-describedby="productDescriptionExample" required={true}/>
                <FormHelperText sx={{paddingBottom: '2%'}} id="productDescriptionExample">For example: Good for your health</FormHelperText>

                <Link to="/cart">

                    <Button type="button" onClick={addProductFunc} id="updateAddress" className={"updateAddress"}
                            variant="outlined">Add product</Button>
                </Link>

            </form>
        </div>
    )
}

export default AddProduct;