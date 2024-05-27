import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import CartItem from "../components/CartItem";


const Cart = () => {

    const {cart} = useSelector((state) => state);
    const [totalAmount, setTotalAmount] = useState(0);

    useEffect( () => {
        setTotalAmount(cart.reduce ( (acc,curr) => acc + curr.price, 0) );

    }, [cart])

    return (
        <div>
            {
                cart.length > 0 ? 
                (
                    <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row justify-center">

                        <div className="w-[100%] md:w-[60%] flex flex-col p-2">
                            {
                                cart.map( (item,index) => {
                                    return <CartItem key={item.id} item={item} itemIndex={index} />
                                })
                            }
                        </div>

                        <div className="w-[100%] md:w-[40%] mt-5  flex flex-col">
                            <div className="flex flex-col p-5 gap-5 my-14  h-[100%] justify-between " >
                                <div className="flex flex-col gap-5">
                                    <h1 className="font-semibold text-2xl">Your Cart</h1>
                                    <p className="font-semibold text-5xl text-green-700 -mt-5 uppercase">Summary</p>
                                    <p className="text-xl">
                                        <span className="text-gray-700 font-semibold text-xl underline">Total Items:</span> {cart.length}
                                    </p>
                                </div>

                                <div className="flex flex-col">
                                    <p className="text-xl font-bold"><span className="text-gray-700 font-semibold underline">Total amount:</span> ${totalAmount}</p>
                                    <button className="bg-green-700 hover:bg-purple-50 rounded-lg text-white transition duration-300 ease-linear mt-5 border-2 border-green-600 font-bold hover:text-green-700 p-3 text-xl">
                                        Checkout Now
                                    </button>
                                </div>

                            </div>
                        </div>

                    </div>
                ) :

                (
                    <div className="min-h-[80vh] flex flex-col items-center justify-center">
                        <h1 className="text-gray-700 font-semibold text-xl mb-2">Cart Empty !!</h1>
                        <NavLink to="/"> 
                            <button className="bg-green-600 uppercase hover:bg-purple-50 rounded-lg text-white transition duration-300 ease-linear mt-5 border-2 border-green-600 font-semibold hover:text-green-700 p-3 px-10 tracking-wider">
                                Shop Now
                            </button>
                        </NavLink>
                    </div>
                )
            }
        </div>
    )
};

export default Cart;