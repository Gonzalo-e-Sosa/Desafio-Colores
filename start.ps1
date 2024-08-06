Start-Process "dotnet" "run --project ./backend/api/api.csproj"

if (!$?) {
    Write-Error "Error starting backend"
    exit 1
}

Push-Location ".\frontend"
Invoke-Expression "bun run dev"

if (!$?) {
    Write-Error "Error starting frontend"
    exit 1
}