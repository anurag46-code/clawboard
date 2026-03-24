# 🎭 Laude Dashboard - One-Click Deploy Script
# Run this in PowerShell on your Windows machine

Write-Host "🚀 Deploying Laude Dashboard..." -ForegroundColor Cyan

# Navigate to app folder
Set-Location "C:\Users\Administrator\.openclaw\workspace\laude-app"

# Check if Git is installed
if (-not (Get-Command git -ErrorAction SilentlyContinue)) {
    Write-Host "❌ Git is not installed. Please install Git from https://git-scm.com/" -ForegroundColor Red
    exit 1
}

# Initialize Git
Write-Host "📦 Initializing Git repository..." -ForegroundColor Yellow
git init
git add .
git commit -m "Initial Laude mobile dashboard 🎭"
git branch -M main

# Add remote
Write-Host "🔗 Connecting to GitHub..." -ForegroundColor Yellow
git remote add origin https://github.com/anurag46-code/clawboard.git

# Push to GitHub
Write-Host "📤 Pushing to GitHub..." -ForegroundColor Yellow
git push -u origin main

if ($LASTEXITCODE -eq 0) {
    Write-Host "✅ Success! Repository pushed to GitHub." -ForegroundColor Green
    Write-Host ""
    Write-Host "🌐 Next Steps:" -ForegroundColor Cyan
    Write-Host "1. Go to https://vercel.com/new" -ForegroundColor White
    Write-Host "2. Click 'Import Git Repository'" -ForegroundColor White
    Write-Host "3. Select 'anurag46-code/clawboard'" -ForegroundColor White
    Write-Host "4. Click 'Deploy'" -ForegroundColor White
    Write-Host ""
    Write-Host "📱 Your app will be live at: https://clawboard.vercel.app" -ForegroundColor Green
    Write-Host ""
    Write-Host "🎭 Laude Dashboard is ready to rock!" -ForegroundColor Cyan
} else {
    Write-Host "❌ Push failed. Please check your GitHub token and try again." -ForegroundColor Red
}
