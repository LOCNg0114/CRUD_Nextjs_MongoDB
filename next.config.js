/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env:{
    MONGO_URI: "mongodb+srv://NextjsCRUD:admin123@cluster0.4ipvffq.mongodb.net/user_manager"
  }
}

module.exports = nextConfig
