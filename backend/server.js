const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const authRoutes = require('./routes/authRoutes');
const sequelize = require('./config/database'); // your Sequelize instance
const User = require('./models/User');

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());


const PORT = process.env.PORT || 5000;

app.get('/', (req,res) => {
    res.send('Personal Growth Trcker API is working!');
});

// Sequelize sync and start server
sequelize.sync({ alter: true }) // or force: true for development only
  .then(() => {
    console.log('✅ Database synced');
    app.listen(PORT, () => {
      console.log(`🚀 Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error('❌ Error syncing database:', err);
  });


app.use('/api/auth', authRoutes);

