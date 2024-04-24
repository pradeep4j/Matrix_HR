import React,{useState} from 'react';
import { Typography, FormGroup, styled, Paper, Select, FormControl, MenuItem, InputLabel} from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
//import { styled } from '@mui/material/styles';
import { Card, Row, Col, NavLink } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import GroupsIcon from '@mui/icons-material/Groups';
import DashbordTables from "./DashbordTables";
const Container = styled(FormGroup)`
width: 75%;
margin: 2% 22% 0 22.5%;
& > div {
    margin-top:60px;
}
`

const Dashboard = () => {

    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(2),
        textAlign: 'left',
        color: theme.palette.text.secondary,
    }));

    return (

        <Container>
            <Grid container spacing={3} style={{ marginTop: '2%' }}>
                <Grid xs={3} >
                    <Item className="boxfeatures" style={{height:'80px',borderRadius:'5%' }} >
                        <Link to='' style={{ color: 'white', fontWeight: 'bold', textDecoration: 'none' }}>
                            <Card.Title >Total Companies</Card.Title>
                            <Card.Title style={{ fontSize:'25px',lineHeight:'2.1' }}>25</Card.Title>
                        </Link>
                    </Item>
                </Grid>
                <Grid xs={3} >
                    <Item className="boxfeatures" style={{height:'80px',borderRadius:'5%' }}>
                        <Link to='' style={{ color: 'white', fontWeight: 'bold', textDecoration: 'none' }}>
                            <Card.Title >Total Executives</Card.Title>
                            <Card.Title style={{ fontSize:'25px',lineHeight:'2.1' }}>25</Card.Title>   
                        </Link>
                    </Item>
                </Grid>
                <Grid xs={3}>
                    <Item className="boxfeatures" style={{height:'80px',borderRadius:'5%' }}>
                        <Link to='' style={{ color: 'white', fontWeight: 'bold', textDecoration: 'none' }}>
                            <Card.Title >Total Auditors</Card.Title>
                            <Card.Title style={{ fontSize:'25px',lineHeight:'2.1' }}>25</Card.Title>
                        </Link>
                    </Item>
                </Grid>
                <Grid xs={3} >
                    <Item className="boxfeatures" style={{height:'80px',borderRadius:'5%' }}>
                        <Link to='' style={{ color: 'white', fontWeight: 'bold', textDecoration: 'none' }}>
                            <Card.Title >Due Dates</Card.Title>
                            <Card.Title style={{ fontSize:'25px',lineHeight:'2.1' }}>25</Card.Title>
                        </Link>
                    </Item>
                </Grid>
                <Grid xs={3}>
                    <Item className="boxfeatures" style={{height:'80px',borderRadius:'5%' }}>
                        <Link to='' style={{ color: 'white', fontWeight: 'bold', textDecoration: 'none' }}>
                            <Card.Title >Over Dues</Card.Title>
                            <Card.Title style={{ fontSize:'25px',lineHeight:'2.1' }}>25</Card.Title>
                        </Link>
                    </Item>
                </Grid>
                <Grid xs={3} >
                    <Item className="boxfeatures" style={{height:'80px',borderRadius:'5%' }}>
                        <Link to='' style={{ color: 'white', fontWeight: 'bold', textDecoration: 'none' }}>
                            <Card.Title >Totak Checklist</Card.Title>
                            <Card.Title style={{ fontSize:'25px',lineHeight:'2.1' }}>25</Card.Title>
                        </Link>
                    </Item>
                </Grid>
                <Grid xs={3}>
                    <Item className="boxfeatures" style={{height:'80px',borderRadius:'5%' }}>
                        <Link to='' style={{ color: 'white', fontWeight: 'bold', textDecoration: 'none' }}>
                            <Card.Title >Total Audit</Card.Title>
                            <Card.Title style={{ fontSize:'25px',lineHeight:'2.1' }}>25</Card.Title>
                        </Link>
                    </Item>
                </Grid>
                <Grid xs={3} >
                    <Item className="boxfeatures" style={{height:'80px',borderRadius:'5%' }}>
                        <Link to='' style={{ color: 'white', fontWeight: 'bold', textDecoration: 'none' }}>
                            <Card.Title >Outgoing Audit</Card.Title>
                            <Card.Title style={{ fontSize:'25px',lineHeight:'2.1' }}>25</Card.Title>
                        </Link>
                    </Item>
                </Grid>
                <Grid xs={6} >
                    <DashbordTables />
                </Grid>
                <Grid xs={6} >
                    <DashbordTables />
                </Grid>
                <Grid xs={6} >
                    <DashbordTables />
                </Grid>
                <Grid xs={6} >
                    <DashbordTables />
                </Grid>
            </Grid>

        </Container>

    )
}

export default Dashboard;