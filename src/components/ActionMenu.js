import * as React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import MoreVertIcon from '@mui/icons-material/MoreVert';

export default function MenuPopupState(props) {
  console.log(props);
  const handleClick = () => {
    props.deleteMake(props.index);
  };
  return (
    <PopupState variant='popover' popupId='demo-popup-menu'>
      {(popupState) => (
        <React.Fragment>
          <MoreVertIcon
            variant='contained'
            {...bindTrigger(popupState)}
          ></MoreVertIcon>
          {/* <Button variant='contained' {...bindTrigger(popupState)}>
            Dashboard
          </Button> */}
          <Menu {...bindMenu(popupState)}>
            <MenuItem onClick={handleClick}>
              <ListItemIcon>
                <DeleteIcon />
              </ListItemIcon>
              <ListItemText>Delete</ListItemText>
            </MenuItem>
          </Menu>
        </React.Fragment>
      )}
    </PopupState>
  );
}
