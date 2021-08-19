import {
  Avatar,
  Card,
  CardContent,
  createStyles,
  Grid,
  makeStyles, styled, Theme, Typography,
} from '@material-ui/core';
import { red } from '@material-ui/core/colors';
import React, { useEffect, useRef } from 'react';
import { type } from 'os';
import { Image } from '@material-ui/icons';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
      card: {
        right: theme.spacing(2),
        position: 'absolute',
        zindex: '1000',
      },
      test: {
        position: 'absolute',
        right: theme.spacing(2),
        bottom: theme.spacing(4),
      },
      avatar: {
        backgroundColor: red[500],
      },
      comment: {},
    }),
);

const Popup = styled('div')(({ theme }) => ({
  position: 'absolute',
  right: theme.spacing(2),
  bottom: theme.spacing(12),
}));

export default function Panel() {
  const classes = useStyles();
  let boothPreviewImage;
  let boothUrl;

  // useRef(() => {
  //   const urlElement = document.querySelector(
  //       'meta[property="og:url"]') as Element;
  //   const imageElement = document.querySelector(
  //       'meta[property="og:image"]') as Element;
  //   boothUrl = urlElement.getAttribute('content');
  //   boothPreviewImage = imageElement.getAttribute('content');
  // });

  return (
      <Popup>
        <Card>
          <CardContent>
            <Card>
            </Card>

            <Card>
              <CardContent className={classes.comment}>
                <Grid container wrap="nowrap" spacing={2}>
                  <Grid item>
                    <Avatar className={classes.avatar}>R</Avatar>
                  </Grid>
                  <Grid item>
                    <Typography variant="h6">익명의 사용자 1</Typography>
                    <Grid item>
                      <Typography variant="body2">
                        테스트
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </CardContent>
        </Card>
      </Popup>
  );
}