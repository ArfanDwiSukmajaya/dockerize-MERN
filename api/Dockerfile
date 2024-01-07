# Gunakan image Node.js sebagai base image
FROM node:16-alpine

# Set direktori kerja di dalam kontainer
WORKDIR /app

# Salin package.json dan package-lock.json ke direktori kerja
COPY package*.json ./

# Install dependencies
RUN npm install

# Salin seluruh konten proyek ke dalam kontainer
COPY . .

# Port yang akan digunakan oleh aplikasi
EXPOSE 3000

# Command untuk menjalankan aplikasi saat kontainer dimulai
CMD ["npm", "run", "start"]
