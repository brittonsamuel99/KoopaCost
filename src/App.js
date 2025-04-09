import React, { useState } from 'react';
import {
  Button, Typography, Container, Box, Card, CardContent,
  CardActions, Divider, Grid, Paper, ThemeProvider, createTheme,
  List, ListItem, IconButton
} from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import SwitchItem from "./components/SwitchItem";
import GameItem from "./components/GameItem";
import AccessoriesItem from "./components/AccessoriesItem";

// Custom theme with Nintendo-inspired colors
const theme = createTheme({
  palette: {
    primary: {
      main: '#E60012', // Nintendo red
    },
    secondary: {
      main: '#00A6EB', // Nintendo blue
    },
    background: {
      default: '#f5f5f5',
    },
  },
  typography: {
    h3: {
      fontWeight: 600,
    },
    h5: {
      fontWeight: 500,
    },
  },
});

function App() {
  // Change to store multiple games
  const [games, setGames] = useState([{ id: 0, price: 0, name: "None" }]);
  const [accessories, setAccessories] = useState([{ id: 0, price: 0, name: "None" }]);
  const [switchPrice, setSwitchPrice] = useState(449.99);

  // Function to handle game selection change
  const handleGameChange = (index, event) => {
    const selectedValue = parseFloat(event.target.value);
    const selectedName = event.target.options[event.target.selectedIndex].text;

    const updatedGames = [...games];
    updatedGames[index] = {
      id: Date.now() + index,
      price: selectedValue,
      name: selectedName
    };
    setGames(updatedGames);
  };

  // Function to add another game
  const addGame = () => {
    setGames([...games, { id: Date.now(), price: 0, name: "None" }]);
  };

  // Function to remove a game
  const removeGame = (index) => {
    if (games.length > 1) {
      const updatedGames = [...games];
      updatedGames.splice(index, 1);
      setGames(updatedGames);
    }
  };

  const handleAccessoriesChange = (index, event) => {
    const selectedValue = parseFloat(event.target.value);
    const selectedName = event.target.options[event.target.selectedIndex].text;

    const updatedAccessories = [...accessories];
    updatedAccessories[index] = {
      id: Date.now() + index,
      price: selectedValue,
      name: selectedName
    };
    setAccessories(updatedAccessories);
  };

  const addAccessories = () => {
    setAccessories([...accessories, { id: Date.now(), price: 0, name: "None" }]);
  };

  // Function to remove accessories
  const removeAccessories = (index) => {
    if (accessories.length > 1) {
      const updatedAccessories = [...accessories];
      updatedAccessories.splice(index, 1);
      setAccessories(updatedAccessories);
    }
  };

  // Function to handle Switch model selection change
  const handleSwitchChange = (event) => {
    setSwitchPrice(parseFloat(event.target.value));
  };

  // Calculate total price including accessories
  const totalPrice = games.reduce((sum, game) => sum + game.price, 0) +
    accessories.reduce((sum, accessory) => sum + accessory.price, 0) +
    switchPrice;

  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="sm" sx={{ py: 4 }}>
        <Typography
          variant="h3"
          gutterBottom
          align="center"
          sx={{ mb: 3, color: 'primary.main' }}
        >
          Nintendo Switch 2 Price Estimator
        </Typography>

        <Card elevation={3} sx={{ mb: 4 }}>
          <CardContent>
            <Typography variant="h6" color="text.secondary" gutterBottom>
              Build Your Package
            </Typography>

            <Box sx={{ mb: 3 }}>
              <SwitchItem onChange={handleSwitchChange} />
            </Box>

            <Divider sx={{ my: 2 }} />

            <Typography variant="h6" color="text.secondary" gutterBottom>
              Select Games:
            </Typography>

            <List>
              {games.map((game, index) => (
                <ListItem
                  key={game.id}
                  sx={{ pl: 0, pr: 0, display: 'flex', alignItems: 'flex-start' }}
                  secondaryAction={
                    games.length > 1 && (
                      <IconButton
                        edge="end"
                        aria-label="delete"
                        onClick={() => removeGame(index)}
                        sx={{ mt: 1 }}
                      >
                        <DeleteIcon />
                      </IconButton>
                    )
                  }
                >
                  <Box sx={{ width: '100%', pr: 5 }}>
                    <GameItem onChange={(e) => handleGameChange(index, e)} />
                  </Box>
                </ListItem>
              ))}
            </List>

            <Button
              variant="contained"
              color="secondary"
              startIcon={<AddIcon />}
              onClick={addGame}
              size="small"
              sx={{ mt: 1, mb: 3 }}
            >
              Add Another Game
            </Button>

            <Divider sx={{ my: 2 }} />

            <Typography variant="h6" color="text.secondary" gutterBottom>
              Select Accessories:
            </Typography>

            <List>
              {accessories.map((accessory, index) => (
                <ListItem
                  key={accessory.id}
                  sx={{ pl: 0, pr: 0, display: 'flex', alignItems: 'flex-start' }}
                  secondaryAction={
                    accessories.length > 1 && (
                      <IconButton
                        edge="end"
                        aria-label="delete"
                        onClick={() => removeAccessories(index)}
                        sx={{ mt: 1 }}
                      >
                        <DeleteIcon />
                      </IconButton>
                    )
                  }
                >
                  <Box sx={{ width: '100%', pr: 5 }}>
                    <AccessoriesItem onChange={(e) => handleAccessoriesChange(index, e)} />
                  </Box>
                </ListItem>
              ))}
            </List>

            <Button
              variant="contained"
              color="secondary"
              startIcon={<AddIcon />}
              onClick={addAccessories}
              size="small"
              sx={{ mt: 1 }}
            >
              Add Another Accessory
            </Button>
          </CardContent>

          <Paper sx={{
            bgcolor: 'background.default',
            mx: 2,
            p: 2,
            mb: 2,
            borderRadius: 1
          }}>
            <Grid container justifyContent="space-between" alignItems="center">
              <Grid item>
                <Typography variant="h6">Total Estimate:</Typography>
              </Grid>
              <Grid item>
                <Typography variant="h5" color="primary.main">
                  ${totalPrice.toFixed(2)}
                </Typography>
              </Grid>
            </Grid>
          </Paper>

          <CardActions sx={{ justifyContent: 'center', pb: 3 }}>
            <Button
              variant="contained"
              color="primary"
              size="large"
              startIcon={<ShoppingCartIcon />}
              sx={{
                px: 4,
                py: 1,
                borderRadius: 2,
                boxShadow: 2,
                '&:hover': {
                  transform: 'translateY(-2px)',
                  boxShadow: 3,
                },
                transition: 'all 0.2s ease-in-out'
              }}
            >
              Get Detailed Estimate
            </Button>
          </CardActions>
        </Card>

        <Typography variant="body2" color="text.secondary" align="center">
          Prices shown are estimates and may vary by region and retailer
        </Typography>
      </Container>
    </ThemeProvider>
  );
}

export default App;
