import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Navbar from './NavbarComponent';
import ProductCard from './ProductCard';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Container } from 'reactstrap';
import { connect } from 'react-redux';
import { getProducts } from '../actions/products';
import { addProduct } from '../actions/selected';
import { Spinner } from 'reactstrap';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

function Products({ getProducts, products, loading, addProduct }) {
  useEffect(() => {
    getProducts();
  }, [getProducts]);

  const [open, setOpen] = React.useState(false);

  // const [selected, setSelected] = useState([]);

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  const onClick = (product) => {
    addProduct(product.name, product.img, product.price);
    setOpen(true);
  };

  const classes = useStyles();
  return (
    <div>
      <Navbar type={'products'} />

      {loading ? (
        <Spinner
          style={{
            display: 'block',
            position: 'fixed',
            zIndex: '1031',
            top: '50%',
            right: '50%',
          }}
          color='dark'
        />
      ) : (
        <Container>
          <Grid container spacing={1} style={{ marginTop: '20px' }}>
            {products.map((product) => {
              return (
                <Grid item xs={12} sm={4} md={3} key={product.id}>
                  <ProductCard product={product} onClick={onClick} />
                </Grid>
              );
            })}
          </Grid>
        </Container>
      )}
      <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        message='Product Added'
        action={
          <React.Fragment>
            <IconButton
              size='small'
              aria-label='close'
              color='inherit'
              onClick={handleClose}
            >
              <CloseIcon fontSize='small' />
            </IconButton>
          </React.Fragment>
        }
      />
    </div>
  );
}

Products.propTypes = {
  getProducts: PropTypes.func.isRequired,
  addProduct: PropTypes.func.isRequired,
};
const mapStateToProps = (state) => ({
  products: state.product.products,
  loading: state.product.loading,
});

export default connect(mapStateToProps, {
  getProducts,
  addProduct,
})(Products);
