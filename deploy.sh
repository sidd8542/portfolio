#!/bin/bash

# GitHub Pages Deployment Script
echo "🚀 Deploying to GitHub Pages..."

# Build the project
echo "📦 Building project..."
npm run build

# Switch to gh-pages branch
echo "🔄 Switching to gh-pages branch..."
git checkout gh-pages

# Remove old files (except .git)
rm -rf assets favicon* index.html robots.txt site.webmanifest .nojekyll

# Move build files to root
echo "📁 Moving build files..."
mv dist/* .
touch .nojekyll

# Add and commit
echo "💾 Committing changes..."
git add .
git commit -m "Update GitHub Pages deployment"

# Push to GitHub
echo "⬆️ Pushing to GitHub..."
git push origin gh-pages

# Switch back to main
echo "🔄 Switching back to main branch..."
git checkout main

echo "✅ Deployment complete!"
echo "🌐 Your portfolio will be available at: https://sidd8542.github.io/portfolio"
echo "⏱️ It may take a few minutes to update." 