const mongoose = require("mongoose");

const dbConecction = async () => {
  const options = {
    autoIndex: false, // Don't build indexes
    maxPoolSize: 10, // Maintain up to 10 socket connections
    serverSelectionTimeoutMS: 5000, // Keep trying to send operations for 5 seconds
    socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
    family: 4, // Use IPv4, skip trying IPv6
  };
  try {
    await mongoose.connect(process.env.MONGOSB_CNN, options);
    console.log("DB Online");
  } catch (error) {
    console.log("error", error);
    throw new Error("DB Connection Error");
  }
};

module.exports = {
  dbConecction,
};
