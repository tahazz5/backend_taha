const DEFAULT_URI = 'mongodb://localhost:27017/myapp';

const connectDatabase = (mongoose) => {
  const uri = process.env.MONGODB_URI || DEFAULT_URI;

  mongoose.connect(uri)
    .then(() => console.log('✅ MongoDB connecté'))
    .catch((err) => console.log('❌ Erreur MongoDB:', err));
};

module.exports = connectDatabase;
