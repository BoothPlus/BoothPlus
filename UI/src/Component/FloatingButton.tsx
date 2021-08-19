import React, { useState } from 'react';
import { createStyles, Fab, makeStyles, Theme } from '@material-ui/core';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import CloseIcon from '@material-ui/icons/Close';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
      fab: {
        position: 'absolute',
        bottom: theme.spacing(2),
        right: theme.spacing(2),
        borderRadius: '30%',
      },
    }),
);

const IsActive = (props: boolean) => {
  return props ? <CloseIcon/> : <MoreHorizIcon/>;
};

export default function FloatingButton() {
  const [active, setActive] = useState(false);

  const classes = useStyles();
  return (
      <Fab
          className={classes.fab}
          onClick={() => setActive(!active)}
      >
        {IsActive(active)}
      </Fab>
  );
}