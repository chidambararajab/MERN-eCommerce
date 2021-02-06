import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  Row,
  Col,
  Image,
  ListGroup,
  Card,
  Button,
  Form,
} from "react-bootstrap";

import { addToCart } from "../actions/cartActions";
import Loader from "../components/Loader";
import Message from "../components/Message";

const CartScreen = () => {
  return <div>Cart</div>;
};

export default CartScreen;
