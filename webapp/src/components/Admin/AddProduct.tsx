import * as React from "react";
import { Button, TextField, Typography } from '@mui/material';
import {Link} from "react-router-dom";
import Autocomplete from '@mui/material/Autocomplete';
import {ProductType} from "../../shared/shareddtypes";
import {addProduct} from "../../api/api";
import {useSession} from "@inrupt/solid-ui-react";
import "./AddProduct.css";
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import CategoryIcon from '@mui/icons-material/Category';
import PaidIcon from '@mui/icons-material/Paid';
import ImageIcon from '@mui/icons-material/Image';
import DescriptionIcon from '@mui/icons-material/Description';

const AddProduct = () => {

    const { session } = useSession();

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
        let priceProduct = parseFloat((document.getElementById("productPrice") as HTMLInputElement).value);
        let imageProduct = (document.getElementById("productImage") as HTMLInputElement).value;
        let descriptionProduct = (document.getElementById("productDescription") as HTMLInputElement).value;

        let product: ProductType = {
            category: categoryProduct, description: descriptionProduct, id: 0, image: imageProduct, name: nameProduct, price: priceProduct

        }

        addProduct(product).then();
    }

    if(session.info.webId === "https://dd2badm.inrupt.net/profile/card#me") {
        return (
            <div className={"addProd"}>
                <Typography variant='h3'>Add a product</Typography>
                <form id="productForm" className={"productForm"}>
                    <div className={"productFormComponent"}>
                        <TextField sx={{width: '75%'}} label="Name" id="productName" className={"productName"} required={true}/>
                        <DriveFileRenameOutlineIcon fontSize={"large"} />
                    </div>

                    <div className={"productFormComponent"}>
                        <Autocomplete
                            disablePortal
                            id="productCategory"
                            options={categories}
                            sx={{width: '75%'}}
                            renderInput={(params) => <TextField {...params} label="Category"/>}
                        />
                        <CategoryIcon fontSize={"large"} />
                    </div>

                    <div className={"productFormComponent"}>
                        <TextField inputProps={{inputMode: 'numeric'}} sx={{width: '75%'}} label="Price"
                               id="productPrice" className={"productPrice"} required={true}/>
                        <PaidIcon fontSize={"large"} />
                    </div>

                    <div className={"productFormComponent"}>
                        <TextField sx={{width: '75%'}} label="Image" id="productImage" className={"productImage"} required={true}/>
                        <ImageIcon fontSize={"large"} />
                    </div>

                    <div className={"productFormComponent"}>
                        <TextField sx={{width: '75%'}} label="Description" id="productDescription"
                                   className={"productDescription"} required={true}/>
                        <DescriptionIcon fontSize={"large"} />
                    </div>

                    <Link to="/products">

                        <Button type="button" onClick={addProductFunc} id="updateAddress" className={"updateAddress"}
                                variant="outlined">Add product</Button>
                    </Link>

                </form>
            </div>
        )
    } else {
        return <Typography variant='h3' sx={{padding:"10%", textAlign:"center"}}>In order to access this page you have to be an admin</Typography>;
    }
}

export default AddProduct;