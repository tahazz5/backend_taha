const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Middleware de base
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Connexion MongoDB
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/myapp', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('✅ MongoDB connecté'))
.catch(err => console.log('❌ Erreur MongoDB:', err));

// Routes de base
app.get('/', (req, res) => {
  res.json({ 
    message: '🚀 Mon Backend Personnalisé',
    version: '1.0.0',
    endpoints: {
      auth: '/api/auth',
      users: '/api/users',
      posts: '/api/posts',
      products: '/api/products',
      // Ajoutez vos endpoints ici
    }
  });
});

// Importation des routes (vous les créerez au fur et à mesure)
app.use('/api/auth', require('./src/routes/auth'));
app.use('/api/users', require('./src/routes/users'));
app.use('/api/posts', require('./src/routes/posts'));
app.use('/api/products', require('./src/routes/products'));

// Middleware de gestion d'erreurs
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Quelque chose s\'est mal passé!' });
});

// Route 404
app.use('*', (req, res) => {
  res.status(404).json({ message: 'Route non trouvée' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🎯 Server running on port ${PORT}`);
  console.log(`📡 http://localhost:${PORT}`);
});