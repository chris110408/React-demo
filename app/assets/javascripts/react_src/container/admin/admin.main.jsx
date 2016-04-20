import React from 'react';
import AppBar from 'material-ui/lib/app-bar';
import IconButton from 'material-ui/lib/icon-button';
import MenuIcon from 'material-ui/lib/svg-icons/navigation/menu';
import IconMenu from 'material-ui/lib/menus/icon-menu';
import MoreVertIcon from 'material-ui/lib/svg-icons/navigation/more-vert';
import MenuItem from 'material-ui/lib/menus/menu-item';
import LeftNav from 'material-ui/lib/left-nav';







class Admin extends  React.Component
{
    constructor(props) {
        super(props);
        this.state = {open: false};
    }


    handleToggle = () => {

        this.setState({open: !this.state.open})};

    handleClose = () => this.setState({open: false});


    render()
    {
        console.log(this.state.open)

        return (
            <div>
                <AppBar
                    title="Title"
                    iconElementLeft={<IconButton onClick = {this.handleToggle} onTouchTap={this.handleToggle.bind(this)}><MenuIcon /></IconButton>}
                    iconElementRight={

                      <IconMenu
                        iconButtonElement={
                          <IconButton> <MoreVertIcon/>
                          </IconButton>
                        }
                        targetOrigin={{horizontal: 'left', vertical: 'bottom'}}
                        anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
                      >
                        <MenuItem primaryText="Refresh" />
                        <MenuItem primaryText="Help" />
                        <MenuItem primaryText="Sign out" />
                      </IconMenu>
                    }
                />
                <LeftNav
                    docked={false}
                    width={100}
                    open={this.state.open}
                    onRequestChange={open => this.setState({open})}
                >
                    <MenuItem onTouchTap={this.handleClose}>Menu Item</MenuItem>
                    <MenuItem onTouchTap={this.handleClose}>Menu Item 2</MenuItem>
                </LeftNav>

            </div>

        )

    }

}

export default Admin