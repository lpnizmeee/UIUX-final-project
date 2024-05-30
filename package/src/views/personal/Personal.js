import React from "react";
import { Grid, Box, Container, Avatar, Link } from "@mui/material";
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Information from "./personal-components/Information";

import tht from "../../assets/images/users/tht_full.jpg";

const avatar_radius = '300px'

const Personal = () => {
    return (
        <Box maxWidth="sm">
            <Typography variant="h1" >Personal Information</Typography>
            <Container maxWidth='sm'
                sx={{
                    m: 4,
                    mt: 8,
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'flex-start',
                }}>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        mb: 4,
                    }}
                >
                    <img
                        src={tht}
                        alt="Avatar"
                        style={{
                            width: avatar_radius,
                            margin: '10px', // Change this to your desired margin
                            marginBottom: '20px',
                        }}
                    />
                    {/* <Box
                        sx={{
                            ml: 4,
                        }}
                    >
                        <Link to="/" style={{ color: 'blue', textDecoration: 'none' }}>
                            <Typography variant="h5">Change Avatar</Typography>
                        </Link>
                    </Box> */}
                </Box>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'flex-start',
                        ml: 8,

                    }}
                >
                    <Information title="Name" data="Ta Hai Tung" />
                    <Information title="Email" data="tungth@soict.hust.edu.vn" />
                    <Information title="Date of birth" data="01/01/1999" />
                    <Information title="Phone" data="0987654321" />
                    <Information title="Place of work" data="HUST" />
                    <Information title="Position" data="Principal of SoICT" />
                </Box>
            </Container>
        </Box>
    );
}

export default Personal;