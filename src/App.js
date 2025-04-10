import React, { useState } from 'react';
import {
  Button, Typography, Container, Box, Card, CardContent,
  CardActions, Divider, Grid, Paper, ThemeProvider, createTheme,
  List, ListItem, IconButton, Link
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
  const [games, setGames] = useState([{ id: 0, price: 0, name: "None", selection: "none" }]);
  const [accessories, setAccessories] = useState([{ id: 0, price: 0, name: "None", selection: "none" }]);
  const [switchPrice, setSwitchPrice] = useState(449.99);
  const [switchSelection, setSwitchSelection] = useState("switch-standard");

  // Function to handle game selection change
  const handleGameChange = (index, event) => {
    const selectedId = event.target.value;

    // Map ID to price and name
    const gameInfo = {
      "none": { price: 0, name: "None" },
      "mario-kart": { price: 79.99, name: "Mario Kart World" },
      "donkey-kong": { price: 69.99, name: "Donkey Kong Bananza" },
      "other-game-59": { price: 59.99, name: "Other Game - $59.99" },
      "other-game-69": { price: 69.99, name: "Other Game - $69.99" }
    };

    const updatedGames = [...games];
    updatedGames[index] = {
      id: Date.now() + index,
      price: gameInfo[selectedId].price,
      name: gameInfo[selectedId].name,
      selection: selectedId // Store the selection ID
    };
    setGames(updatedGames);
  };

  // Function to add another game
  const addGame = () => {
    setGames([...games, { id: Date.now(), price: 0, name: "None", selection: "none" }]);
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
    const selectedId = event.target.value;

    // Map ID to price and name
    const accessoryInfo = {
      "none": { price: 0, name: "None" },
      "pro-controller": { price: 79.99, name: "Nintendo Switch 2 Pro Controller" },
      "joy-con": { price: 89.99, name: "Left and Right Joy-Con 2 Controllers" },
      "charging-grip": { price: 34.99, name: "Joy-Con 2 Charging Grip" },
      "strap": { price: 12.99, name: "Joy-Con 2 Strap" },
      "wheel": { price: 19.99, name: "Joy-Con 2 Wheel (set of two)" },
      "camera": { price: 49.99, name: "Nintendo Switch 2 Camera" },
      "dock": { price: 109.99, name: "Nintendo Switch 2 Dock Set" },
      "case": { price: 34.99, name: "Nintendo Switch 2 Carrying Case & Screen Protector" },
      "all-in-case": { price: 79.99, name: "Nintendo Switch 2 All-In-One Carrying Case" },
      "adapter": { price: 29.99, name: "Nintendo Switch 2 AC Adapter" }
    };

    const updatedAccessories = [...accessories];
    updatedAccessories[index] = {
      id: Date.now() + index,
      price: accessoryInfo[selectedId].price,
      name: accessoryInfo[selectedId].name,
      selection: selectedId // Store the selection ID
    };
    setAccessories(updatedAccessories);
  };

  const addAccessories = () => {
    setAccessories([...accessories, { id: Date.now(), price: 0, name: "None", selection: "none" }]);
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
    const selectedId = event.target.value;
    setSwitchSelection(selectedId); // Update the selection state

    const switchInfo = {
      "switch-standard": 449.99,
      "switch-bundle": 499.99
    };

    setSwitchPrice(switchInfo[selectedId]);
  };

  // Calculate total price including accessories
  const totalPrice = games.reduce((sum, game) => sum + game.price, 0) +
    accessories.reduce((sum, accessory) => sum + accessory.price, 0) +
    switchPrice;

  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="sm" sx={{ py: 4 }}>
        <Typography
          variant="h2"
          gutterBottom
          align="center"
          sx={{ mb: 3, color: 'primary.main' }}
        >
          Koopa Cost
        </Typography>
        <Typography
          variant="h3"
          gutterBottom
          align="center"
          sx={{ mb: 3, color: 'primary.main' }}
        >
          A Nintendo Switch 2 Price Estimator
        </Typography>

        <Card elevation={3} sx={{ mb: 4 }}>
          <CardContent>
            <Typography variant="h6" color="text.secondary" gutterBottom>
              Select Your Nintendo Switch 2 Model:
            </Typography>

            <Box sx={{ mb: 3 }}>
              <SwitchItem onChange={handleSwitchChange} value={switchSelection} />
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
                    <GameItem
                      onChange={(e) => handleGameChange(index, e)}
                      value={game.selection}
                    />
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
                    <AccessoriesItem
                      onChange={(e) => handleAccessoriesChange(index, e)}
                      value={accessory.selection}
                    />
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
        </Card>

        <Typography variant="body2" color="text.secondary" align="center">
          Prices shown are estimates and may vary by region and retailer
        </Typography>
      </Container>
      <Typography variant="body2" color="text.secondary" align="center" sx={{ mt: 2 }}>
        Vibecoded with ❤️ by <Link href="https://greatbritton.online" target="_blank" rel="noopener" color="primary">Samuel Britton</Link>
      </Typography>
    </ThemeProvider>
  );
}

export default App;
