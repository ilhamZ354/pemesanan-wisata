import * as React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import DirectionsIcon from '@mui/icons-material/Directions';
import { Button, ButtonGroup, Input } from "@nextui-org/react";

export const ButtonSearch = () => {
    return (
        <div className="flex justify-center items-center mt-4">
            <Paper
            component="form"
            sx={{ p: '4px 4px', display: 'flex', alignItems: 'center', height:40, width: 430, borderRadius: '16px', backgroundColor: 'rgba(255, 255, 255, 0.8)', }}
            >
                <InputBase
                    sx={{ flex: 3, ml:2, height:'fit-content', opacity:'initial' }}
                    placeholder="Search"
                    inputProps={{ 'aria-label': 'search google maps' }}
                />
                <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
                    <SearchIcon />
                </IconButton>
            </Paper>
        </div>
    )
}