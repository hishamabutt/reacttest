import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
// import img from '../img/1.jpg';

const useStyles = makeStyles({
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  media: {
    width: 'auto',
    height: 140,
    backgroundSize: 'cover',
  },
});

function ProductCard(props) {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;
  return (
    <Card variant='outlined' style={{ width: 'auto' }}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={process.env.PUBLIC_URL + props.product.img}
        />
        <CardContent>
          <Typography gutterBottom variant='h5' component='h2'>
            {props.product.name}
          </Typography>
          <Typography variant='body2' color='textSecondary' component='p'>
            Product Description
          </Typography>
          <Typography variant='body2' color='textSecondary' component='p'>
            {props.product.price}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button
          variant='contained'
          size='small'
          color='primary'
          onClick={() => props.onClick(props.product)}
        >
          Buy
        </Button>
      </CardActions>
    </Card>
  );
}

ProductCard.propTypes = {};

export default ProductCard;
