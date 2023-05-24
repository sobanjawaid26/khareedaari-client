import React from 'react'
import { AppBar, Button, IconButton, Stack, Toolbar, Typography } from '@mui/material'

import CatchingPokemonIcon from '@mui/icons-material/CatchingPokemon';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const Navbar = () => {
  return (
    <div>
      <AppBar position='static'>
        <Toolbar>
            <IconButton size='large' edge='start' color='inherit' aria-label='logo'>
                <ShoppingCartIcon />
            </IconButton>
            <Typography variant='h6' component='div' sx={{ flexGrow: 1}}>
                KHAREEDAARI
            </Typography>
            <Stack direction='row' spacing={2}>
                <Button color='inherit'>Features</Button>
                <Button color='inherit'>Pricing</Button>
                <Button color='inherit'>About</Button>
                <Button color='inherit'>Login</Button>
            </Stack>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Navbar
