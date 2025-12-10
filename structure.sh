#!/bin/bash

echo "🚀 Iniciando configuración de la estructura..."

# 1. Crear la carpeta de componentes
mkdir -p src/components

# 2. Crear los archivos de los componentes
# Usamos 'touch' para crear los archivos vacíos primero
touch src/components/Navbar.tsx
touch src/components/Hero.tsx
touch src/components/TechStack.tsx
touch src/components/Services.tsx
touch src/components/ContactForm.tsx
touch src/components/Footer.tsx

# 3. Mensaje de confirmación
echo "✅ Estructura creada correctamente:"
echo "src/"
echo "└── components/"
echo "    ├── Navbar.tsx"
echo "    ├── Hero.tsx"
echo "    ├── TechStack.tsx"
echo "    ├── Services.tsx"
echo "    ├── ContactForm.tsx"
echo "    └── Footer.tsx"
echo ""
echo "👉 Siguientes pasos: Copia la lógica de cada sección del HTML en su componente correspondiente."