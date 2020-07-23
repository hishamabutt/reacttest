import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width: 200,
    height: 150,
  },
}));

function SelectedCard(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography gutterBottom variant='h5' component='h2'>
            product name
          </Typography>
          <Typography variant='body2' color='textSecondary' component='p'>
            Product Description
          </Typography>
          <Typography variant='body2' color='textSecondary' component='p'>
            product price
          </Typography>
        </CardContent>
      </div>
      <CardMedia
        className={classes.cover}
        image={process.env.PUBLIC_URL + '/image/1.jpg'}
        title='Live from space album cover'
      />
      <CardActions>
        <Button
          variant='contained'
          size='small'
          color='danger'
          onClick={() => props.onClick(props.product)}
        >
          Buy
        </Button>
      </CardActions>
    </Card>
  );
}

SelectedCard.propTypes = {};

export default SelectedCard;
