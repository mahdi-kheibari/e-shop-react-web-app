import React, { useContext, useEffect, useState } from "react";
import {
  Box,
  AppBar,
  Toolbar,
  Typography,
  ButtonGroup,
  Button,
  OutlinedInput,
  IconButton,
  Drawer,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
  Alert,
  Tooltip,
} from "@mui/material";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PercentOutlinedIcon from "@mui/icons-material/PercentOutlined";
import SportsEsportsOutlinedIcon from "@mui/icons-material/SportsEsportsOutlined";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import {
  PersonOutlineOutlined,
  Search,
  ShoppingCartOutlined,
} from "@mui/icons-material";
import PersonOffOutlinedIcon from "@mui/icons-material/PersonOffOutlined";
import NavItems from "./navItems/NavItems";
import Link from "../../utils/Link";
import NavLink from "../../utils/NavLink";
import CollapseItem from "../../aside/CollapseItem";
import { store } from "../../../store/Context";
import NavItemSm from "./navItems/navItemSm/NavItemSm";
import "./appHeader.scss";
import Toast from "../../toast/Toast";
import { useDispatch, useSelector } from "react-redux";
import {
  changeCount,
  changeSingleTotal,
  changeSumTotal,
  updateAfterRefresh,
} from "../../../store/cart/slice";
import actions from "../../../store/cart/actions";
import { useAuth0 } from "@auth0/auth0-react";

const AppHeader = () => {
  const [drawer, setdrawer] = useState(false);
  const [modal, setModal] = useState(false);
  const [paidToast, setPaidToast] = useState(false);
  const [failPaidToast, setFailPaidToast] = useState(false);
  const { allCategories } = useContext(store);
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);
  const sumTotal = useSelector((state) => state.cart.sumTotal);
  const { isAuthenticated, logout, loginWithRedirect } = useAuth0();
  useEffect(() => {
    var cartJSON = localStorage.getItem("shoppingCart");
    dispatch(updateAfterRefresh({ info: { cartJSON } }));
    if (cartJSON) {
      dispatch(changeSumTotal());
    }
  }, [dispatch]);
  function deleteItem(id) {
    dispatch(
      actions.deleteItem({
        productId: id,
      })
    );
    dispatch(changeSumTotal());
    dispatch(actions.saveCart(cartItems));
  }
  function deleteAll() {
    dispatch(actions.deleteAll());
    dispatch(changeSumTotal());
    dispatch(actions.saveCart(cartItems));
  }
  function changeCounter(newVal, id) {
    dispatch(changeCount({ info: { value: newVal, id } }));
    dispatch(changeSingleTotal({ info: id }));
    dispatch(changeSumTotal());
    dispatch(actions.saveCart(cartItems));
  }
  function checkout() {
    if (isAuthenticated) {
      dispatch(actions.deleteAll());
      dispatch(actions.saveCart(cartItems));
      setModal(false);
      setPaidToast(true);
    } else {
      setFailPaidToast(true);
    }
  }
  useEffect(() => {
    dispatch(actions.saveCart(cartItems));
  }, [cartItems]);
  return (
    <>
      <AppBar position="sticky" color="white" className="header" sx={{ mb: 6 }}>
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
            alignItems: "center",
            px: { sm: 1 },
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <IconButton
              color="secondary"
              sx={{ display: { xs: "flex", sm: "none" }, pb: 0 }}
              onClick={() => setdrawer(true)}
            >
              <MenuOutlinedIcon sx={{ textAlign: "center" }} />
            </IconButton>
            <Box
              sx={{
                display: "flex",
                order: 1,
                ml: { xs: 0, sm: 2 },
                mt: { xs: 2.5, sm: "initial" },
                width: { xs: "50%", sm: "auto" },
              }}
              className="header-brand"
            >
              <Link to={"/"} sx={{ display: "flex" }}>
                <img src="/logo192.png" height="30px" alt="logo" />
                &nbsp;
                <Typography
                  variant="body1"
                  color="primary"
                  sx={{ display: "flex", fontWeight: "bold" }}
                  className="font-20"
                >
                  <Box component={"span"} sx={{ color: "secondary.main" }}>
                    E-
                  </Box>
                  Shop
                </Typography>
              </Link>
            </Box>
          </Box>
          <Box
            className="header-search"
            sx={{
              px: 1,
              width: { xs: "100%", sm: "50%" },
              order: { xs: 3, sm: 2 },
              py: { xs: 2, sm: 0 },
            }}
          >
            <ButtonGroup
              variant="contained"
              sx={{
                boxShadow: "none",
                width: "100%",
                height: "calc(1.5em + 0.75rem + 2px)",
              }}
            >
              <OutlinedInput
                placeholder="Search"
                sx={{
                  width: "100%",
                  mt: 1,
                  py: 0,
                  backgroundColor: "light.main",
                  color: "secondary.main",
                }}
              />
              <Button
                size="small"
                sx={{ height: "calc(1.5em + 0.75rem + 2px)", alignSelf: "end" }}
              >
                <Search />
              </Button>
            </ButtonGroup>
          </Box>
          <Box
            className="header-other"
            sx={{
              display: "flex",
              order: { xs: 2, sm: 3 },
              width: { sm: "auto" },
            }}
          >
            <Tooltip title={isAuthenticated ? "Logout" : "Login"}>
              <Button
                variant="text"
                color="secondary"
                sx={{ px: 1, minWidth: "initial" }}
                onClick={() =>
                  isAuthenticated
                    ? logout({
                        logoutParams: { returnTo: window.location.origin },
                      })
                    : loginWithRedirect()
                }
              >
                {isAuthenticated ? (
                  <PersonOffOutlinedIcon fontSize="large" />
                ) : (
                  <PersonOutlineOutlined fontSize="large" />
                )}
              </Button>
            </Tooltip>
            <Box className="shop-cart">
              <Button
                onClick={() => setModal(true)}
                variant="text"
                color="secondary"
                sx={{
                  px: 1,
                  minWidth: "initial",
                  display: "flex",
                  lineHeight: 0,
                }}
                className="shop-cart-btn cart-icon"
              >
                <Box sx={{ position: "relative" }}>
                  <ShoppingCartOutlined fontSize="large" />
                  {cartItems.length > 0 ? (
                    <Box
                      component={"span"}
                      sx={{
                        position: "absolute",
                        color: "white.main",
                        fontWeight: "bold",
                        p: 0.5,
                        bgcolor: "danger.main",
                        top: 0,
                        left: 0,
                        width: "10px",
                        height: "10px",
                        borderRadius: "50%",
                      }}
                      className="cart-badge"
                    ></Box>
                  ) : null}
                </Box>
              </Button>
              <Box
                className="shop-cart-info"
                sx={{ bgcolor: "white.main", p: 3 }}
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    pb: 1,
                  }}
                >
                  <span>
                    {cartItems.length > 0 ? cartItems.length : 0} Products
                  </span>
                  <Box
                    component={"span"}
                    sx={{ color: "info.main", cursor: "pointer" }}
                    onClick={() => setModal(true)}
                  >
                    View cart
                  </Box>
                </Box>
                <Box component={"hr"} sx={{ color: "secondary.main" }} />
                <Box component={"ul"} sx={{ listStyle: "none", pl: 0 }}>
                  {cartItems.map((item) => (
                    <Box component={"li"} key={item.id}>
                      <Link
                        to={`/Product/${item.category}/${item.id}`}
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "flex-start",
                          my: 1,
                        }}
                      >
                        <Box
                          className="shop-cart-info-img"
                          sx={{ alignSelf: "center" }}
                        >
                          <img src={item.images[0].address} alt={item.name} />
                        </Box>
                        <Box className="shop-cart-info-title">
                          <Box component={"span"} sx={{ mb: 1 }}>
                            {item.name}
                          </Box>
                        </Box>
                      </Link>
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                      >
                        <Box
                          component={"span"}
                          sx={{ color: "secondary.main" }}
                        >
                          count : {item.count}
                        </Box>
                        <DeleteForeverIcon
                          color="danger"
                          sx={{ cursor: "pointer" }}
                          onClick={() => deleteItem(item.id)}
                        />
                      </Box>
                      <Box component={"hr"} sx={{ color: "secondary.main" }} />
                    </Box>
                  ))}
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    my: 2,
                  }}
                >
                  <span>Total </span>
                  {cartItems.length > 0 ? <span>{sumTotal}</span> : null}
                </Box>
              </Box>
            </Box>
          </Box>
          <Drawer anchor="left" open={drawer} onClose={() => setdrawer(false)}>
            <Box
              sx={{ height: "100%", display: "flex", flexDirection: "column" }}
            >
              <Box
                sx={{
                  width: "100%",
                  display: "flex",
                  flexDirection: "column",
                  flexShrink: 0,
                  flexGrow: 1,
                  p: 2,
                  bgcolor: "light.main",
                }}
              >
                <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                  <Link
                    to={"/"}
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      fontWeight: "bold",
                    }}
                    className={"font-20"}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "baseline",
                        alignSelf: "center",
                      }}
                    >
                      <img src="/logo192.png" height="30px" alt="logo" />
                      &nbsp;
                      <Typography
                        variant="body1"
                        color="primary"
                        sx={{ display: "flex", fontWeight: "bold" }}
                        className="font-20"
                      >
                        <Box
                          component={"span"}
                          sx={{ color: "secondary.main" }}
                        >
                          E-
                        </Box>
                        Shop
                      </Typography>
                    </Box>
                  </Link>
                  <IconButton color="danger" onClick={() => setdrawer(false)}>
                    <CloseOutlinedIcon />
                  </IconButton>
                </Box>
                <hr />
                <Box
                  component={"ul"}
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    mb: "auto",
                    alignItems: "flex-start",
                    p: 0,
                  }}
                  className={"nav"}
                >
                  <Box component={"li"} className={"nav-item"}>
                    <Button variant="text" color="secondary" sx={{ pl: 2 }}>
                      <NavLink
                        to={"/"}
                        className={`${({ isActive }) =>
                          isActive ? "active" : null} nav-link`}
                        sx={{ display: "flex", alignItems: "center" }}
                      >
                        <HomeOutlinedIcon />
                        <span>Home</span>
                      </NavLink>
                    </Button>
                  </Box>
                  <li>
                    <Box component={"ul"} sx={{ listStyle: "none", pl: 0 }}>
                      <CollapseItem
                        name={"Products"}
                        items={allCategories}
                        link={true}
                        linkRoute="/Products"
                      />
                    </Box>
                  </li>
                  <li>
                    <NavItemSm
                      title={"Discounts"}
                      route="/Products/category/Discounts"
                      icon={<PercentOutlinedIcon />}
                      activeClass={true}
                      className="navbar-item-secondary"
                    />
                  </li>
                  <li>
                    <NavItemSm
                      title={"Games"}
                      route="/Products/category/forGamer"
                      icon={<SportsEsportsOutlinedIcon />}
                      activeClass={true}
                      className="navbar-item-secondary"
                    />
                  </li>
                  <li>
                    <Button variant="text" color="secondary" sx={{ pl: 2 }}>
                      <Link
                        to="/"
                        sx={{
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        <InfoOutlinedIcon />
                        <span>About us</span>
                      </Link>
                    </Button>
                  </li>
                </Box>
              </Box>
            </Box>
          </Drawer>
          <Dialog
            open={modal}
            onClose={() => setModal(false)}
            fullWidth={true}
            maxWidth={"lg"}
          >
            <DialogTitle
              sx={{
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Box className="modal-title" sx={{ my: 0 }}>
                Shop Cart
              </Box>
              <IconButton color="secondary" onClick={() => setModal(false)}>
                <CloseOutlinedIcon />
              </IconButton>
            </DialogTitle>
            <DialogContent>
              {cartItems.length > 0 ? (
                <TableContainer component={Paper}>
                  <Table sx={{ minWidth: 760 }}>
                    <TableHead>
                      <TableRow>
                        <TableCell>Product Name & Details</TableCell>
                        <TableCell align="right">Price</TableCell>
                        <TableCell align="right">Quantity</TableCell>
                        <TableCell align="right">Total</TableCell>
                        <TableCell align="right">
                          <DeleteForeverIcon
                            sx={{ cursor: "pointer" }}
                            color="danger"
                            onClick={() => deleteAll()}
                          />
                        </TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {cartItems.map((item) => (
                        <TableRow
                          key={item.id}
                          sx={{
                            "&:last-child td, &:last-child th": { border: 0 },
                          }}
                        >
                          <TableCell sx={{ p: 4 }} align="right">
                            <Link
                              to={`/Product/${item.category}/${item.id}`}
                              sx={{ display: "flex", alignItems: "center" }}
                            >
                              <Box
                                component={"img"}
                                src={item.images[0].address}
                                className="ui-w-40 ui-bordered"
                                sx={{ display: "block", mr: 4 }}
                              />
                              <Box component={"span"} sx={{ mx: "auto" }}>
                                {item.name}
                              </Box>
                            </Link>
                          </TableCell>
                          <TableCell
                            sx={{
                              textAlign: "right",
                              fontWeight: "semibold",
                              verticalAlign: "middle",
                              p: 4,
                            }}
                            align="right"
                          >
                            {item.price}
                          </TableCell>
                          <TableCell
                            sx={{ verticalAlign: "middle", p: 4 }}
                            align="right"
                          >
                            <OutlinedInput
                              sx={{
                                backgroundColor: "white.main",
                                color: "secondary.main",
                                width: "40%",
                                "& .MuiInputBase-input": { p: 1 },
                              }}
                              type="number"
                              min={1}
                              value={item.count}
                              onChange={(e) =>
                                changeCounter(e.target.value, item.id)
                              }
                            />
                          </TableCell>
                          <TableCell
                            align="right"
                            sx={{
                              textAlign: "right",
                              fontWeight: "semibold",
                              verticalAlign: "middle",
                              p: 4,
                            }}
                          >
                            {item.total}
                          </TableCell>
                          <TableCell
                            align="right"
                            sx={{
                              textAlign: "center",
                              px: 0,
                              verticalAlign: "middle",
                            }}
                          >
                            <IconButton
                              className="close"
                              color="danger"
                              onClick={() => deleteItem(item.id)}
                            >
                              <CloseOutlinedIcon />
                            </IconButton>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              ) : (
                <Alert severity="warning">Your cart is empty!</Alert>
              )}
            </DialogContent>
            <DialogActions>
              <Box sx={{ width: "100%" }}>
                {cartItems.length > 0 ? (
                  <Box
                    sx={{
                      width: "100%",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <Box sx={{ display: "flex", flexShrink: 0 }}>
                      <Box
                        component={"label"}
                        sx={{ color: "muted.main", fontWeight: "bold", m: 0 }}
                        className="font-16 font-sm-18 font-lg-20"
                      >
                        Total :
                      </Box>
                      <Box className="font-16 font-sm-18  font-lg-20">
                        <strong> {sumTotal} </strong> toman
                      </Box>
                    </Box>
                    <Box sx={{ display: "flex" }}>
                      <Button
                        onClick={() => setModal(false)}
                        variant="contained"
                        color="light"
                        sx={{ boxShadow: "none", textTransform: "capitalize" }}
                        className="font-12 font-sm-14 font-md-16"
                      >
                        Back
                      </Button>
                      <Button
                        onClick={() => checkout()}
                        variant="contained"
                        color="primary"
                        sx={{
                          boxShadow: "none",
                          mx: { xs: 1, sm: 2 },
                          textTransform: "capitalize",
                        }}
                        className="checkout font-12 font-sm-14 font-md-16"
                      >
                        Checkout
                      </Button>
                    </Box>
                  </Box>
                ) : (
                  <Box
                    sx={{
                      width: "100%",
                      display: "flex",
                      justifyContent: "flex-end",
                    }}
                  >
                    <Button
                      onClick={() => setModal(false)}
                      variant="contained"
                      color="secondary"
                      sx={{ boxShadow: "none", textTransform: "capitalize" }}
                      className="font-12 font-sm-14 font-md-16"
                    >
                      Back
                    </Button>
                  </Box>
                )}
              </Box>
              <Toast
                type={"warning"}
                massege={"Please Login first"}
                state={failPaidToast}
                setState={(val) => setFailPaidToast(val)}
              />
            </DialogActions>
          </Dialog>
          <Toast
            type={"success"}
            massege={"Successfully paid"}
            state={paidToast}
            setState={(val) => setPaidToast(val)}
          />
        </Toolbar>
        <NavItems></NavItems>
      </AppBar>
    </>
  );
};

export default AppHeader;
