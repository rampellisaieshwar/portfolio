#!/bin/bash

echo "🚀 Setting up AI/ML Portfolio..."

# Install dependencies
echo "📦 Installing dependencies..."
npm install

# Create public directory if it doesn't exist
mkdir -p public

# Copy profile image if it exists
if [ -f "me9.png" ]; then
    echo "📸 Copying profile image..."
    cp me9.png public/
fi

echo "✅ Setup complete!"
echo ""
echo "To start the development server:"
echo "npm run dev"
echo ""
echo "Then open http://localhost:3000 in your browser"
