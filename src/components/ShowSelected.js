import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Navbar from './NavbarComponent';
import { Spinner } from 'reactstrap';
import { getSelected, removeProducts } from '../actions/selected';
import { Container } from 'reactstrap';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
  table: {},
});

function ShowSelected({ getSelected, removeProducts, products, loading }) {
  const classes = useStyles();

  useEffect(() => {
    getSelected();
  }, [getSelected]);

  const onClick = (id) => {
    removeProducts(id);
    getSelected();
  };
  return (
    <div>
      <Navbar type={'selected'} />
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
        <Container style={{ marginTop: '20px' }}>
          <TableContainer component={Paper}>
            <Table className={classes.table} aria-label='simple table'>
              <TableHead>
                <TableRow>
                  <TableCell>Name</TableCell>
                  <TableCell>Description</TableCell>
                  <TableCell>Price</TableCell>
                  <TableCell align='right'>Action</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {products.map((product) => (
                  <TableRow key={product.id}>
                    <TableCell component='th' scope='row'>
                      {product.name}
                    </TableCell>
                    <TableCell>Product Descripton</TableCell>
                    <TableCell>{product.price}</TableCell>
                    <TableCell align='right'>
                      <Button
                        variant='contained'
                        size='small'
                        color='secondary'
                        onClick={() => onClick(product.id)}
                      >
                        Remove
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Container>
      )}
    </div>
  );
}

ShowSelected.propTypes = {
  getSelected: PropTypes.func.isRequired,
  removeProducts: PropTypes.func.isRequired,
};
const mapStateToProps = (state) => ({
  products: state.selected.selectedProducts,
  loading: state.selected.loading,
});

export default connect(mapStateToProps, { getSelected, removeProducts })(
  ShowSelected
);
