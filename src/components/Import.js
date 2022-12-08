import React from 'react';
// import { useState } from 'react';

import ActionMenu from './ActionMenu';

import {
  Container,
  Button,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from '@mui/material';
import { deleteMake } from '../redux/actions';

// import MoreVertIcon from '@mui/icons-material/MoreVert';

const Import = (props) => {
  console.log(props);

  return (
    <Container maxWidth='lg' className='car-container'>
      <Button onClick={props.fetchMakes} variant='contained'>
        Import
      </Button>
      <h2>COUNT: {props.makes.length}</h2>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Make</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.makes.map((car, idx) => (
            <TableRow key={car.MakeId}>
              <TableCell>{car.MakeId}</TableCell>
              <TableCell>{car.MakeName}</TableCell>
              <TableCell>
                <ActionMenu deleteMake={props.deleteMake} index={idx} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Container>
  );
};

export default Import;
