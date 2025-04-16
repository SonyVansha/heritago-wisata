<template>
    <div class="container py-4">
      <!-- Navbar -->
      <div class="d-flex justify-content-between align-items-center mb-4">
        <div>
          <h5 class="fw-bold mb-0">Hi, Nisa 👋</h5>
          <small class="text-muted">Where your next trip going to be?</small>
        </div>
        <!-- <img src="/profile.png" alt="Profile" class="rounded-circle" width="45" height="45" /> -->
      </div>
  
      <!-- Search Bar -->
      <div class="input-group mb-4">
        <input type="text" class="form-control" placeholder="Search place..." />
        <span class="input-group-text"><i class="bi bi-search"></i></span>
      </div>
  
      <!-- Categories -->
      <div class="d-flex justify-content-between text-center mb-4">
        <div class="category-item">
          <div class="icon bg-primary text-white rounded-circle mb-1">
            <i class="bi bi-bank"></i>
          </div>
          <small>Heritage</small>
        </div>
        <div class="category-item">
          <div class="icon bg-success text-white rounded-circle mb-1">
            <i class="bi bi-tree"></i>
          </div>
          <small>Nature</small>
        </div>
        <div class="category-item">
          <div class="icon bg-warning text-white rounded-circle mb-1">
            <i class="bi bi-cup-straw"></i>
          </div>
          <small>Culinary</small>
        </div>
        <div class="category-item">
          <div class="icon bg-danger text-white rounded-circle mb-1">
            <i class="bi bi-camera"></i>
          </div>
          <small>Culture</small>
        </div>
      </div>
  
      <!-- Popular Destination Section -->
      <h5 class="fw-bold mb-3">Popular Places</h5>
      <div class="row g-3">
        <div class="col-6" v-for="place in popularPlaces" :key="place.name">
          <div class="card h-100 shadow-sm border-0">
            <img :src="place.image" class="card-img-top" alt="..." />
            <div class="card-body p-2">
              <h6 class="card-title mb-1">{{ place.name }}</h6>
              <small class="text-muted"><i class="bi bi-geo-alt-fill me-1"></i>{{ place.location }}</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  const popularPlaces = [
    { name: 'Borobudur', location: 'Magelang', image: '/places/borobudur.jpg' },
    { name: 'Bromo', location: 'East Java', image: '/places/bromo.jpg' },
    { name: 'Ubud', location: 'Bali', image: '/places/ubud.jpg' },
    { name: 'Lawang Sewu', location: 'Semarang', image: '/places/lawangsewu.jpg' }
  ]
  </script>
  
  <style scoped>
  .icon {
    width: 50px;
    height: 50px;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
  }
  
  .category-item {
    flex: 1;
  }
  </style>
  