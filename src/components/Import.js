import React from 'react';
import { useState } from 'react';

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

import MoreVertIcon from '@mui/icons-material/MoreVert';

const Import = (props) => {
  // fill out this component
  const [showActionMenu, setShowActionMenu] = useState(false);

  const handleClick = (event) => {
    setShowActionMenu((current) => !current);
  };

  return (
    <Container maxWidth='md'>
      <Button onClick={props.fetchMakes} variant='contained'>
        Import
      </Button>
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
                <ActionMenu />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Container>
  );
};

export default Import;
