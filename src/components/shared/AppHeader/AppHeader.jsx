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
  Snackbar,
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
import NavItems from "./navItems/NavItems";
import Link from "../../utils/Link";
import NavLink from "../../utils/NavLink";
import CollapseItem from "../../aside/CollapseItem";
import { store } from "../../../store/Context";
import NavItemSm from "./navItems/navItemSm/NavItemSm";
import "./appHeader.scss";
const AppHeader = () => {
  const [drawer, setdrawer] = useState(false);
  const [modal, setModal] = React.useState(false);
  const [paidToast, setPaidToast] = React.useState(false);
  const { allCategories, cartStateProvider } = useContext(store);
  useEffect(() => {
    var cartJSON = localStorage.getItem("shoppingCart");
    cartStateProvider.dispatch({
      type: "updateAfterRefresh",
      info: { cartJSON },
    });
    if (cartJSON) {
      cartStateProvider.dispatch({ type: "changeSumTotal" });
    }
  }, []);
  function getCartItems() {
    return cartStateProvider.state.cartItems;
  }
  function deleteItem(id) {
    cartStateProvider.actions.deleteItem({
      productId: id,
    });
    cartStateProvider.dispatch({ type: "changeSumTotal" });
    cartStateProvider.actions.saveCart([
      cartStateProvider.state,
      cartStateProvider.dispatch,
    ]);
  }
  function deleteAll() {
    cartStateProvider.actions.deleteAll();
    cartStateProvider.dispatch({ type: "changeSumTotal" });
    cartStateProvider.actions.saveCart([
      cartStateProvider.state,
      cartStateProvider.dispatch,
    ]);
  }
  function changeCount(e, id) {
    cartStateProvider.dispatch({
      type: "changeCount",
      info: { value: e.target.value, id },
    });
    cartStateProvider.dispatch({
      type: "changeSingleTotal",
      info: id,
    });
    cartStateProvider.dispatch({ type: "changeSumTotal" });
    cartStateProvider.actions.saveCart();
  }
  function checkout() {
    cartStateProvider.actions.deleteAll();
    cartStateProvider.actions.saveCart([
      cartStateProvider.state,
      cartStateProvider.dispatch,
    ]);
    setPaidToast(true);
  }
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
            <Button
              variant="text"
              color="secondary"
              sx={{ px: 1, minWidth: "initial" }}
            >
              <PersonOutlineOutlined fontSize="large" />
            </Button>
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
                  {getCartItems().length > 0 ? (
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
                    {getCartItems().length > 0 ? getCartItems().length : 0}{" "}
                    Products
                  </span>
                  <Box
                    component={"span"}
                    sx={{ color: "info.main" }}
                    onClick={() => setModal(true)}
                  >
                    View cart
                  </Box>
                </Box>
                <Box component={"hr"} sx={{ color: "secondary.main" }} />
                <Box component={"ul"} sx={{ listStyle: "none" }}>
                  {getCartItems().map((item) => (
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
                  {getCartItems().length > 0 ? (
                    <span>{cartStateProvider.state.sumTotal}</span>
                  ) : null}
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
              <Box component={"h2"} className="modal-title">
                Shop Cart
              </Box>
              <IconButton color="danger" onClick={() => setModal(false)}>
                <CloseOutlinedIcon />
              </IconButton>
            </DialogTitle>
            <DialogContent>
              {getCartItems().length > 0 ? (
                <TableContainer component={Paper}>
                  <Table>
                    <TableHead>
                      <TableRow>
                        <TableCell>Product Name & Details</TableCell>
                        <TableCell align="right">Price</TableCell>
                        <TableCell align="right">Quantity</TableCell>
                        <TableCell align="right">Total</TableCell>
                        <TableCell align="right">
                          <DeleteForeverIcon
                            color="danger"
                            onClick={() => deleteAll()}
                          />
                        </TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {getCartItems().map((item) => (
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
                              }}
                              type="number"
                              value={item.count}
                              onChange={(e) => changeCount(e, item.id)}
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
                              onClick={deleteItem(item.id)}
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
                {getCartItems().length > 0 ? (
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
                        <strong> {cartStateProvider.state.sumTotal} </strong>{" "}
                        toman
                      </Box>
                    </Box>
                    <Box sx={{ display: "flex" }}>
                      <Button
                        onClick={() => setModal(false)}
                        variant="contained"
                        color="light"
                        sx={{ boxShadow: "none" }}
                        className="font-12 font-sm-14 font-md-16"
                      >
                        Back
                      </Button>
                      <Button
                        onClick={() => checkout()}
                        variant="contained"
                        color="primary"
                        sx={{ boxShadow: "none", mx: { xs: 1, sm: 2 } }}
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
                      sx={{ boxShadow: "none" }}
                      className="font-12 font-sm-14 font-md-16"
                    >
                      Back
                    </Button>
                  </Box>
                )}
              </Box>
            </DialogActions>
          </Dialog>
          <Snackbar
            anchorOrigin={{ vertical: "top", horizontal: "center" }}
            open={paidToast}
            autoHideDuration={3000}
            onClose={() => setPaidToast(false)}
          >
            <Alert
              onClose={() => setPaidToast(false)}
              severity="success"
              sx={{ width: "100%" }}
            >
              Successfully paid
            </Alert>
          </Snackbar>
        </Toolbar>
        <NavItems></NavItems>
      </AppBar>
    </>
  );
};

export default AppHeader;
