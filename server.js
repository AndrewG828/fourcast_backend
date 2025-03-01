const express = require('express');
const cors = require('cors');
const routes = require('./routes');
const { sequelize,Station } = require('./models');

const app = express();
const PORT = process.env.PORT || 5001;

app.use(cors());
app.use(express.json());

app.use('/api', routes);

async function addStation() {
    const newStation = await Station.create({
      name: "New York Weather Center",
      location: "New York, USA",
      latitude: 40.7128,
      longitude: -74.0060,
      regionType: "Coastal",
    });
  
    console.log("Created station:", newStation.toJSON());
  }
  
  addStation();

sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
});
