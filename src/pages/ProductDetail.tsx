import React, { useEffect } from 'react';
import MaxWidthWrapper from '../components/MaxWidthWrapper';
import Loading from '../components/Loading';
import { useParams } from 'react-router-dom';
import useProductStore from '../store/useProductStore';
import ReviewStars from '../components/ReviewStars';
import useCartStore from '../store/useCartStore';


interface IProductDetailProps {
}

const ProductDetail: React.FunctionComponent<IProductDetailProps> = () => {
    const { productId } = useParams();

    const { product, loading, error, fetchProduct } = useProductStore();
    const { addToCart } = useCartStore();


    useEffect(() => {
        fetchProduct(productId)
    }, [productId, fetchProduct])


    if (loading) {
        return <Loading />;
    }

    if (error) {
        return (
            <div className=" text-center text-xl pt-20 text-red-500">
                {" "}
                {error}{" "}
            </div>
        );
    }

    return (
        <MaxWidthWrapper>
            {product && (
                <div className=" grid grid-cols-2 my-10 mt-28">
                    <div className=" justify-center items-center flex ">
                        <img src={product.image} alt="" className=" h-96" />
                    </div>
                    <div className=" flex flex-col gap-5 items-start">
                        <h1 className=" text-2xl font-bold"> {product.title} </h1>
                        <h1 className=" text-xl font-bold"> {product.price} </h1>
                        <p className=" w-96 "> {product.description} </p>
                        <ReviewStars rating={product.rating.rate} />
                        <button
                            onClick={() => addToCart(product)}
                            className=" rounded-full bg-primary  hover:bg-primary/90 px-5 py-3 text-center text-white"
                        >
                            Add To Cart
                        </button>
                    </div>
                </div>
            )}
        </MaxWidthWrapper>
    );
}
export default ProductDetail;