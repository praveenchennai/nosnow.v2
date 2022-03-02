
import React, { useState} from 'react';
import { Box, List, ListItemButton, ListItemIcon, ListItemText, Divider,  } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { useHistory, useParams } from "react-router-dom";

const LeftMenu = (anchor) => {
    const navi = useHistory();
    const toggleDrawer = (anchor, a) =>{}
    const [open, setOpen] = useState(false)
    const [menus] = useState([
        {
            id: '1',
            title: 'Naples Real Estate', 
            secTitle: 'Manage My Account', 
            onclick: '/account/profile/view', 
            admin: true, 
            icon: 'add_circle',
            subMenu: [
                {title: 'Featured Residential', secTitle: '', onclick: 'https://www.nosnownaples.com/result/featured-res'},
                {title: 'Featured Land & Lots', secTitle: '', onclick: 'https://www.nosnownaples.com/result/featured-lot' },
                {title: 'Upcoming Open House', secTitle: '', onclick: 'https://nosnownaples.com/search/residential/openhouse'},
                {title: 'New Construction Southwest FL', secTitle: '', onclick: 'https://nosnownaples.com/search/residential/newconstructionyn_true'},
            ]
        },
        {
            id: '2',
            title: 'Naples Community', 
            secTitle: 'Manage Site Locations @ Work', 
            onclick: '/orgs/sit/list', 
            admin: true, 
            icon: 'add_circle',
            subMenu: [
                {title: 'View All Communities', secTitle: '', onclick: 'https://nosnownaples.com/#community'},
                {title: 'Ave Maria', secTitle: '', onclick: 'https://nosnownaples.com/community/ave-maria' },
                {title: 'Verona Walk', secTitle: '', onclick: 'https://nosnownaples.com/community/verona-walkt'},
                {title: 'Imperial Golf Estates', secTitle: '', onclick: 'https://nosnownaples.com/community/imperial-golf-estates'},
                {title: 'Orange Blossom Ranch', secTitle: '', onclick: 'https://nosnownaples.com/community/orange-blossom-ranch'},
                {title: 'Indigo Lakes', secTitle: '', onclick: 'https://nosnownaples.com/community/indigo-lakes'  },
                {title: 'Golden Gate Lakes', secTitle: '', onclick: 'https://nosnownaples.com/community/golden-gate-estates'  },
                {title: 'Naples Farm Sites', secTitle: '', onclick: 'https://nosnownaples.com/community/naples-farm-sites'}
            ]
        },
        {
            id: '3',
            title: 'Community Lifestyles', 
            secTitle: 'Manage Site Locations @ Work', 
            onclick: '/orgs/sit/list', 
            admin: true, 
            icon: 'add_circle',
            subMenu: [
                {title: 'Gated Communities', secTitle: '', onclick: 'https://nosnownaples.com/community/group/naples-bonita-springs-estero-gated-communities'},
                {title: 'Non-Gated Communities', secTitle: '', onclick: 'https://nosnownaples.com/community/group/naples-bonita-springs-estero-non-gated-communities' },
                {title: 'Golf Communities', secTitle: '', onclick: 'https://nosnownaples.com/community/group/golf-communities-naples-real-estate'},
                {title: 'Beach Front Condos', secTitle: '', onclick: 'https://nosnownaples.com/community/group/beach-front-condo-sunset-water-views-naples-real-estate'},
                {title: 'Estate Homes', secTitle: '', onclick: 'https://nosnownaples.com/community/group/estate-homes-are-for-more-space-naples-real-estate'},
                {title: 'Community Lifestyle', secTitle: '', onclick: '/https://nosnownaples.com/community/group'}
            ]
        },
        {
            id: '4',
            title: 'Real Estate Resources', 
            secTitle: 'Manage Site Locations @ Work', 
            onclick: '/orgs/sit/list', 
            admin: true, 
            icon: 'add_circle',
            subMenu: [
                {title: 'About the Parlante Group', secTitle: '', onclick: 'https://nosnownaples.com/content/about'},
                {title: 'Parlante Group Video', secTitle: '', onclick: 'https://nosnownaples.com/content/parlante-video' },
                {title: 'Messege on COVID-19', secTitle: '', onclick: 'https://nosnownaples.com/content/covid19'},
                {title: 'Real Estate Special Report', secTitle: '', onclick: '/https://nosnownaples.com/content/news'},
                {title: 'Whats Your Home Worth?', secTitle: '', onclick: 'http://www.nosnowevalue.com/'},
                {title: 'Mortgage Calculator', secTitle: '', onclick: '/https://nosnownaples.com/content/tcalc'}
            ]
        },
        {
            id: '5',
            title: 'Living in Naples', 
            secTitle: 'Manage Site Locations @ Work', 
            onclick: '/orgs/sit/list', 
            admin: true, 
            icon: 'add_circle',
            subMenu: [
                {title: 'Quality Of Life', onclick: 'https://content.nosnownaples.com/quality-of-life.html'},
                {title: 'Luxury Life Style', secTitle: '', onclick: 'https://content.nosnownaples.com/luxury-life-style.html' },
                {title: 'Best Place of Retirement', secTitle: '', onclick: 'https://content.nosnownaples.com/best-place-of-retirement.html'},
                {title: 'Top 5 reasons to move to Florida', secTitle: '', onclick: 'https://content.nosnownaples.com/top-5-reasons-to-live-in-florida.html'},
                {title: 'Naples Recreation', secTitle: '', onclick: 'https://content.nosnownaples.com/naples-recreation.html'},
                {title: 'Professional Sports', secTitle: '', onclick: 'https://content.nosnownaples.com/professional-sports.html'},
                {title: 'Sports For The Family', secTitle: '', onclick: 'https://content.nosnownaples.com/sports-for-the-family.html'},
                {title: 'Famous 5th Avenue District', secTitle: '', onclick: 'https://content.nosnownaples.com/famous-5th-avenue-district.html'},
                {title: 'Naples Collier County Hot Vacation', secTitle: '', onclick: 'https://content.nosnownaples.com/naples-collier-county-hot-vacation-home-spot.html'},
                {title: 'More', secTitle: '', onclick: 'https://content.nosnownaples.com/'}
            ]
        },
    ])

    const onHome = () =>{
        navi.push('/')
    }
    const onSearch = () =>{
        navi.push('/search')
    }

    const [menu2] = useState([
        {
            id: '2',
            title: 'News', 
            onclick: 'https://news.nosnownaples.com', 
        },
        {
            id: '3',
            title: 'News Archives', 
            onclick: 'https://news.nosnownaples.com', 
        }

    ])
    
    return (
        <Box role="presentation" onClick={toggleDrawer(anchor, false)} onKeyDown={toggleDrawer(anchor, false)}>
            <List> 
                <ListItemButton 
                        sx={{ height: 56 }}  
                        onClick={()=>onHome()}
                    >
                        <img
                    src={`https://nosnow-news-pdfs.s3.us-west-2.amazonaws.com/nosnowlogo.webp`}
                    alt="Nosnownaples logo"
                    loading="lazy"
                />
                    </ListItemButton >
            </List>
            <Divider sx={{borderColor: "rgba(255, 255, 255, 0.2)"}}/>
            <List>
                {menus.map((text, index) => (
                    <React.Fragment key={index}>
                    <ListItemButton 
                        sx={{ height: 56 }}  
                        onClick={()=>setOpen(open===text.id?'':text.id)}
                    >
                        <ListItemIcon sx={{color:"#fff", minWidth:40}}>
                            {text.id===open?<RemoveIcon />:<AddIcon />}
                        </ListItemIcon>
                        <ListItemText 
                            primary={text.title} 
                            primaryTypographyProps={{
                                color: '#fff',
                                fontWeight: 'medium',
                                variant: 'body1',
                            }}
                        />
                        <KeyboardArrowDown
                            sx={{
                                mr: -1,
                                opacity: 0,
                                transition: '0.2s',
                            }}
                        />
                    </ListItemButton >
                        {open===text.id && text.subMenu.map((item, i) => (
                            <ListItemButton 
                                key={i}
                                sx={{ 
                                    color: 'rgba(255,255,255,.8)',
                                    backgroundColor: "#56516b",
                                    maxHeight: "30px"
                                }}
                                onClick={() => window.open(item.onclick)}
                            >
                                
                                    <ListItemIcon>
                                        <ArrowRightIcon 
                                            sx={{ py: 1, color: 'rgba(255,255,255,.8)' }}
                                        />
                                    </ListItemIcon>
                                    <ListItemText 
                                        primary={item.title} 
                                        primaryTypographyProps={{
                                            color: '#fff',
                                            fontWeight: 'medium',
                                            variant: 'body1',
                                            fontSize: "12px"
                                        }}
                                    />
                                
                            </ListItemButton>
                        ))}
                    </React.Fragment>
                ))}
            </List>
            <Divider sx={{borderColor: "rgba(255, 255, 255, 0.2)"}}/>
            <List>
                {menu2.map((text, index) => (
                <ListItemButton key={index} onClick={() => window.open(text.onclick)}>
                    <ListItemIcon sx={{color:"#fff", minWidth:40}}>
                        <KeyboardArrowDown sx={{transform: 'rotate(-90deg)'}}/>
                    </ListItemIcon>
                    <ListItemText primary={text.title} />
                </ListItemButton>

                ))}
            </List>
            <List>
                {['Property Search'].map((text, index) => (
                <ListItemButton key={index} sx={{backgroundColor: "#0174f5"}} onClick={()=>onSearch()}>
                    <ListItemIcon sx={{color:"#fff", minWidth:40}}>
                        <AddIcon />
                    </ListItemIcon>
                    <ListItemText primary={text} />
                </ListItemButton>
                ))}
            </List>
        </Box>
      );
}

export default LeftMenu;