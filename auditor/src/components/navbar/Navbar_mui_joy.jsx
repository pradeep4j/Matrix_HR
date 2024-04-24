import React, { useState, useEffect, useContext } from 'react';
import { AppBar, Toolbar,  Divider, ListItemText,ListItem, ListItemIcon,Container } from '@mui/material';
import Box from '@mui/joy/Box';
import IconButton from '@mui/joy/IconButton';
import Drawer from '@mui/joy/Drawer';
import Input from '@mui/joy/Input';
import List from '@mui/joy/List';
import ListItemButton from '@mui/joy/ListItemButton';
import Typography from '@mui/joy/Typography';
import ModalClose from '@mui/joy/ModalClose';
import Menu from '@mui/icons-material/Menu';
import { styled, useTheme,createTheme} from '@mui/material/styles';
import { makeStyles } from "@material-ui/core/styles";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import HomeIcon from '@mui/icons-material/Home';
import LoginIcon from '@mui/icons-material/Login';
import ListAltIcon from '@mui/icons-material/ListAlt';
import LogoutIcon from '@mui/icons-material/Logout';
import CreditScoreIcon from '@mui/icons-material/CreditScore';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import BusinessIcon from '@mui/icons-material/Business';
import GradingIcon from '@mui/icons-material/Grading'; //this can also be audit
import CategoryIcon from '@mui/icons-material/Category';
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import CollectionsBookmarkIcon from '@mui/icons-material/CollectionsBookmark';
import AddchartIcon from '@mui/icons-material/Addchart';
import AddBoxIcon from '@mui/icons-material/AddBox';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import HelpIcon from '@mui/icons-material/Help';
import PasswordIcon from '@mui/icons-material/Password';
import { toast } from 'react-toastify';
import { NavLink, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { TreeView, TreeItem,useTreeItem } from '@mui/x-tree-view';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { logout } from '../../routes/api';
import '../../hide.css';
import { useDispatch,useSelector } from 'react-redux';
import {logoutUser} from '../../store/actions/authActions';
axios.defaults.withCredentials = true;
const Navbar = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [isAdmin,setIsAdmin] = useState();
    const [updateId,setUpdateId] = useState();
    const [imageLoggedInUrl,setImageLoggedInUrl] = useState();
    const userLogin = useSelector(state=>state.userLogin);
    const {userInfo} = userLogin;
    const [name, setName] = useState('');
    const [userId, setUserid] = useState('');
    const [username, setUsername] = useState('');
    const drawerWidth = 270;
    const badgeNotification = {
        backgroundColor:'white'
      }
    const useTreeItemStyles = makeStyles(theme => ({
        content: {
            flexDirection: "row-reverse"
        },
        labelRoot: {
            display: "flex",
            alignItems: "center",
            padding: theme.spacing(0.5, 0)
        },
        labelIcon: {
            marginRight: theme.spacing(1)
        },
        labelText: {
            fontWeight: "inherit",
            flexGrow: 1
        },
    }));
    const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
        ({ theme, open }) => ({
            flexGrow: 1,
            padding: theme.spacing(3),
            transition: theme.transitions.create('margin', {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.leavingScreen,
            }),
            marginLeft: `-${drawerWidth}px`,
            ...(open && {
                transition: theme.transitions.create('margin', {
                    easing: theme.transitions.easing.easeOut,
                    duration: theme.transitions.duration.enteringScreen,
                }),
                marginLeft: 0,
            }),
        }),
    );

    const AppBar = styled(MuiAppBar, {
        shouldForwardProp: (prop) => prop !== 'open',
    })(({ theme, open }) => ({
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        ...(open && {
            width: `calc(100% - ${drawerWidth}px)`,
            marginLeft: `${drawerWidth}px`,
            transition: theme.transitions.create(['margin', 'width'], {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen,
            }),
        }),
    }));

    const DrawerHeader = styled('div')(({ theme }) => ({
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
        justifyContent: 'flex-end',
    }));

    ///side bar drawer code start
    const itemsListNotLoggedIn = [
        {
            text: "Dashboard",
            icon: <HomeIcon />,
            onClick: (e) => onDashboard(e)
        },
        {
            text: "Compliances",
            icon: <ListAltIcon />,
            //onClick: (e) => onLogin(e)
        },
        {
            text: "Checklist",
            icon: <CollectionsBookmarkIcon />,
            //onClick: (e) => onLogin(e)
        },
        {
            text: "Audit",
            icon: <ManageAccountsIcon />,
            // onClick: (e) => onRegister(e)
        },
        {
            text: "Companies",
            icon: <BusinessIcon />,
            // onClick: (e) => onRegister(e)
        },
        {
            text: "Users",
            icon: <PeopleAltIcon />,
            //onClick: (e) => onRegister(e)
        },
        {
            text: "Category",
            icon: <CategoryIcon />,
            onClick: (e) => onCategory(e)
        },
        {
            text: "E-Library",
            icon: <LocalLibraryIcon />,
            //onClick: (e) => onRegister(e)
        },
        {
            text: "Notification",
            icon: <NotificationsNoneIcon />,
           // onClick: (e) => onRegister(e)
        }
    ];
    let theme = useTheme();
    theme = createTheme(theme, {
        components: {
          MuiTab: {
            styleOverrides: {
              root:{
                "&.Mui-selected": {
                  backgroundColor: theme.palette.secondary.main,
                  color: theme.palette.secondary.contrastText,
                  borderRadius: "25px"
                }
              }
            }
          }
        }
      })
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };
    const onLogin = (e) => {
        navigate('/login');
        // handleDrawerClose();
    }
    const onCategory = (e) => {
        navigate('/category');
        // handleDrawerClose();
    }
    const onDashboard = (e) => {
        navigate("/dashboard")
        // handleDrawerClose();
    }

    ///side bar drawer code end
    const onLogout = async (e) => {
        dispatch(logoutUser());
    }

    ///tree view start
    const CustomContent = React.forwardRef(function CustomContent(props, ref) {
        const {
            classes,
            className,
            label,
            nodeId,
            icon: iconProp,
            expansionIcon,
            displayIcon,
        } = props;

        const {
            disabled,
            expanded,
            selected,
            focused,
            handleExpansion,
            handleSelection,
            preventSelection
        } = useTreeItem(nodeId);
        //only expand if icon was clicked
      /*  const handleToggle = (event, nodeIds) => {
            event.persist()
            let iconClicked = event.target.closest(".MuiTreeItem-iconContainer")
            if (iconClicked) {
                setExpanded(nodeIds);
            }
        };

        //only select if icon wasn't clicked
        const handleSelect = (event, accountId) => {
            event.persist()
            let iconClicked = event.target.closest(".MuiTreeItem-iconContainer")
            if (!iconClicked) {
                setSelected(accountId);
            }
        };*/
        const icon = iconProp || expansionIcon || displayIcon;

        const handleMouseDown = (event) => {
            preventSelection(event);
        };

        const handleExpansionClick = (event) => {
            handleExpansion(event);
        };

        const handleSelectionClick = (event) => {
            //  alert(event.target.value)
            handleSelection(event);
        };

        return (
            // eslint-disable-next-line jsx-a11y/no-static-element-interactions
            <div
                className={clsx(className, classes.root, {
                    [classes.expanded]: expanded,
                    [classes.selected]: selected,
                    [classes.focused]: focused,
                    [classes.disabled]: disabled,
                })}
                onMouseDown={handleMouseDown}
                ref={ref}
            >
                {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */}
                <div onClick={handleExpansionClick} className={classes.iconContainer}>
                    {icon}
                </div>
                <Typography
                    onClick={handleSelectionClick}
                    component="div"
                    className={classes.label}
                >
                    {label}
                </Typography>
            </div>
        );
    });

    CustomContent.propTypes = {
        /**
         * Override or extend the styles applied to the component.
         */
        classes: PropTypes.object.isRequired,
        /**
         * className applied to the root element.
         */
        className: PropTypes.string,
        /**
         * The icon to display next to the tree node's label. Either a parent or end icon.
         */
        displayIcon: PropTypes.node,
        /**
         * The icon to display next to the tree node's label. Either an expansion or collapse icon.
         */
        expansionIcon: PropTypes.node,
        /**
         * The icon to display next to the tree node's label.
         */
        icon: PropTypes.node,
        /**
         * The tree node label.
         */
        label: PropTypes.node,
        /**
         * The id of the node.
         */
        nodeId: PropTypes.string.isRequired,
    };

    const CustomTreeItem = (props) => {

        const classes = useTreeItemStyles();
        const { labelText, labelIcon: LabelIcon, ...other } = props;
        // alert(labelText)
        return <TreeItem label={
            <div className={classes.labelRoot}>
                {/* <LabelIcon color="action" className={classes.labelIcon} /> */}
                <Typography variant="body2" className={classes.labelText} style={{ fontWeight: 'bold' }}>
                    {labelText}
                </Typography>
            </div>
        }
            classes={{
                content: classes.content
            }}
            {...other} />;
    }
    /*const useStyles = makeStyles(theme => ({
        root: {
          height: 216,
          flexGrow: 1,
          maxWidth: 230
        }
      }));*/
    const useStyles = makeStyles({
        root: {
            '&$selected': {
                backgroundColor: 'red',
                '&:hover': {
                    backgroundColor: 'yellow',
                }
            },
        },
        selected: {},
    });
    const IconExpansionTreeView = (item) => {
        const { text, icon, onClick } = item;
        return (
            <TreeView
                aria-label="icon expansion"
                defaultCollapseIcon={<ExpandMoreIcon />}
                //defaultCollapseIcon={`${text === 'Dashboard' ? <ExpandMoreIcon /> : ""}`}
                // defaultExpandIcon={`${text !== 'Dashboard' ? <>{<ChevronRightIcon />} </>: ""}`}
                defaultExpandIcon={<ChevronRightIcon />}
                sx={{ flexGrow: 1 }}
                style={{ fontSize: '10px' }}
            >
                {text === 'Dashboard' ? <>
                    <CustomTreeItem nodeId="1" label={text} sx={{ "& .MuiTreeItem-label": { fontSize: "1.0rem" } }}   >

                    </CustomTreeItem></> : ''}
                {text === 'Compliances' ? <>
                    <CustomTreeItem nodeId="1" label={text} sx={{ "& .MuiTreeItem-label": { fontSize: "1.0rem" } }}>
                        
                    </CustomTreeItem></> : ''}
                {text === 'Checklist' ? <>
                <CustomTreeItem nodeId="1" label={text} sx={{ "& .MuiTreeItem-label": { fontSize: "1.0rem" } }}>
                    
                </CustomTreeItem></> : ''}    
                {text === 'Audit' ? <>
                    <CustomTreeItem nodeId="1" label={text} sx={{ "& .MuiTreeItem-label": { fontSize: "1.0rem" } }}>
                        
                    </CustomTreeItem></> : ''}
                {text === 'Companies' ? <>
                <CustomTreeItem nodeId="1" label={text} sx={{ "& .MuiTreeItem-label": { fontSize: "1.0rem" } }}>
                    
                </CustomTreeItem></> : ''}         
                {text === 'Users' ? <>
                    <CustomTreeItem nodeId="1" label={text} sx={{ "& .MuiTreeItem-label": { fontSize: "1.0rem" } }}>
                        
                    </CustomTreeItem></> : ''}     
                {text === 'Category' ? <>
                <CustomTreeItem nodeId="1" label={text} sx={{ "& .MuiTreeItem-label": { fontSize: "1.0rem" } }}>
                    
                </CustomTreeItem></> : ''}
                {text === 'E-Library' ? <>
                    <CustomTreeItem nodeId="1" label={text} sx={{ "& .MuiTreeItem-label": { fontSize: "1.0rem" } }}>
                        
                    </CustomTreeItem></> : ''}
                {text === 'Notification' ? <>
                <CustomTreeItem nodeId="1" label={text} sx={{ "& .MuiTreeItem-label": { fontSize: "1.0rem" } }}>
                    
                </CustomTreeItem></> : ''}          
                {text === 'Logout' ? <>
                    <CustomTreeItem nodeId="1" label={text} sx={{ "& .MuiTreeItem-label": { fontSize: "1.0rem" } }}    >
                    </CustomTreeItem></> : ''}
            </TreeView>
        );
    }
    ///tree view ends
    useEffect(() => {
        const saved = localStorage.getItem("userInfo");
        //setting up values to hide all navbar urls which are not necessory after login
        if(saved){
            const initialValue = JSON.parse(saved);
           // alert(JSON.stringify(initialValue))
            //for updating navbar conents after login getting content in userId
            if(initialValue)
            {
              setUserid(saved);
              setUpdateId(initialValue._id);
              setName(initialValue.name);
             /* setImageLoggedInUrl(initialValue.image.url); *///image url from cloudinary cloud from localStorage
              // Promise.resolve(getUserById(initialValue._id)).then((result)=>setImageLoggedInUrl(result.data.Image.url));
            }
        }
      },[userInfo]);
    useEffect(() => {
        if(!userInfo){
            setUserid('');
            navigate("/");
       }
    },[userInfo])
    return (
        <Container maxWidth="sm">
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="fixed" open={open} style={{ backgroundColor:'white',color:'#000' }}>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        style={{ pointerEvents: `${!userId ? "none" : ""}`, cursor: `${!userId ? "not-allowed" : ""}` }}
                        sx={{ mr: 2, ...(open && { display: 'none' }) }}
                    >
                        <MenuIcon disabled="disabled" />
                    </IconButton>
                    <Typography variant='h5' component="div" sx={{ flexGrow: 1 }} style={{ backgroundColor:'white',color:'#000' }}>MES Matrix Compliance Management</Typography>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    
                    <NavLink ><button type="button" class="icon-button">
                            <span class="material-icons">notifications</span>
                            <span class="icon-button__badge">2</span>
                        </button>
                    </NavLink>
                    <NavLink style={{ color: '#000' }} onClick={(e) => onLogout(e)} className={`${!userId ? "mystyle" : ""}`} ><LogoutIcon /></NavLink>
                    
                    <NavLink style={{ color: '#000' }} to="/" className={`${userId ? "mystyle" : ""}`} ><LoginIcon /></NavLink>
                    {/* <NavLink style={{ color: 'white' }} to="/register" className={`${userId ? "mystyle" : ""}`} >Register</NavLink> */}

                </Toolbar>
            </AppBar>
            {/*///side bar drawer code start*/}
            <IconButton variant="outlined" color="neutral" onClick={() => setOpen(true)}>
                <Menu />
            </IconButton>
            {userId ? <Drawer
                Drawer open={open} onClose={() => setOpen(false)}

            >
                    <Box
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: 0.5,
                                ml: 'auto',
                                mt: 1,
                                mr: 2,
                            }}
                    >
                    <Typography
                        component="label"
                        htmlFor="close-icon"
                        fontSize="sm"
                        fontWeight="lg"
                        sx={{ cursor: 'pointer' }}
                    >
                    Close
                </Typography>
                <ModalClose id="close-icon" sx={{ position: 'initial' }} />
                </Box>
                        <List
                        size="lg"
                        component="nav"
                        sx={{
                            flex: 'none',
                            fontSize: 'xl',
                            '& > div': { justifyContent: 'center' },
                        }}
                        > {userId && itemsListNotLoggedIn.map((item, index) => {

                            const { text, icon, onClick  } = item;
                            // alert(text)
                            return (
                                <ListItem key={text} onClick={onClick} style={{ width: '280px' }}>
                                {icon && <ListItemButton style={{ color: '#000', width: '280px' }}>{icon}
                                        {text === 'Dashboard' && IconExpansionTreeView(item)}
                                        {text === 'Compliances' && IconExpansionTreeView(item)}
                                        {text === 'Checklist' && IconExpansionTreeView(item)}
                                        {text === 'Audit' && IconExpansionTreeView(item)}
                                        {text === 'Companies' && IconExpansionTreeView(item)}
                                        {text === 'Users' && IconExpansionTreeView(item)}
                                        {text === 'Category' && IconExpansionTreeView(item)}
                                        {text === 'E-Library' && IconExpansionTreeView(item)}
                                        {text === 'Notification' && IconExpansionTreeView(item)}
                                    </ListItemButton>
                                }

                            </ListItem>
                            )
                        })}

                        </List>

                        <Divider />
                    </Drawer>
                        : ''}
                    {/*///side bar drawer code end*/}
                    <Main open={open}>

                    </Main>
                </Box>
        </Container>
    )
}

export default Navbar;




