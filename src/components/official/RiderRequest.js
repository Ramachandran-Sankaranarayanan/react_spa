import React, { useState } from 'react';
import clsx from 'clsx';
import moment from 'moment';
import PerfectScrollbar from 'react-perfect-scrollbar';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import 'react-perfect-scrollbar/dist/css/styles.css';
import {
  Card,
  CardActions,
  CardHeader,
  CardContent,
  Button,
  Divider,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Tooltip,
  TableSortLabel
} from '@material-ui/core';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';

import StatusBullet from './StatusBullet';

const useStyles = makeStyles(theme => ({
  root: {},
  content: {
    padding: 0
  },
  inner: {
    minWidth: 800
  },
  statusContainer: {
    display: 'flex',
    alignItems: 'center'
  },
  status: {
    marginRight: theme.spacing(1)
  },
  actions: {
    justifyContent: 'flex-end'
  }
}));

const statusColors = {
  delivered: 'success',
  pending: 'info',
  refunded: 'danger'
};

const LatestOrders = props => {
  const { className, ...rest } = props;

  const classes = useStyles();
console.log(props.onClickView);
  let rides=[0,1,2];//props.rides;

  return (
    <Card
      {...rest}
      className={clsx(classes.root, className)}
    >
      <CardHeader
       
        title="RIDE REQUESTS"
      />
      <Divider />
      <CardContent className={classes.content}>
        <PerfectScrollbar>
          <div className={classes.inner}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Source State/ District</TableCell>
                  <TableCell>Destination State/ District</TableCell>
                  <TableCell sortDirection="desc">
                  Requested Date                      
                  </TableCell>
                  <TableCell>Status</TableCell>
                  <TableCell>Purpose</TableCell>
                  <TableCell>Approx. KMS</TableCell>
                  <TableCell>Vechicle Number</TableCell>
                  <TableCell>Mobile Number</TableCell>
                  <TableCell></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rides.map(ride => (
                  <TableRow
                    hover
                    key={ride}
                  >
                    <TableCell>KARNATAKA/BANGLORE</TableCell>
                    <TableCell>KERALA/KANNAUR</TableCell>
                    <TableCell>
                      {moment(new Date()).format('DD/MM/YYYY')}
                    </TableCell>
                    
                    <TableCell>
                      <div className={classes.statusContainer}>
                        <StatusBullet
                          className={classes.status}
                          color={statusColors["pending"]}
                          size="sm"
                        />
                        pending
                      </div>
                    </TableCell>
                    <TableCell>Job</TableCell>
                    <TableCell>300</TableCell>
                    <TableCell>KA 08 B 8899</TableCell>
                    <TableCell>9876543210</TableCell>
                    
                    <TableCell>
                    <Button
                       color="primary"
                        size="small"
                        variant="outlined"
                        onClick={props.onClickView.bind(this)}
                        >
                      View
                   </Button>
                   
                    </TableCell>
                  </TableRow>
                  
                ))}
                
              </TableBody>
            </Table>
          </div>
        </PerfectScrollbar>
      </CardContent>
      <Divider />
      <CardActions className={classes.actions}>
        <Button
          color="primary"
          size="small"
          variant="text"
        >
          View all <ArrowRightIcon />
        </Button>
      </CardActions>
    </Card>
  );
};

LatestOrders.propTypes = {
  className: PropTypes.string
};

export default LatestOrders;
