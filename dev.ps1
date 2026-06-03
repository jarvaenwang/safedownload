# SafeDownload 一键构建并启动服务器
Write-Host "=== SafeDownload 开发脚本 ===" -ForegroundColor Cyan

# 步骤1: 停止现有服务器
Write-Host "`n[1/3] 检查并停止现有服务器..." -ForegroundColor Yellow
$port = 8765
$existing = Get-NetTCPConnection -LocalPort $port -ErrorAction SilentlyContinue
if ($existing) {
    $existing | ForEach-Object {
        try {
            if ($_.OwningProcess -ne 0) {
                Stop-Process -Id $_.OwningProcess -Force -ErrorAction SilentlyContinue
                Write-Host "  OK 已停止进程 PID: $($_.OwningProcess)" -ForegroundColor Green
            }
        } catch {
            Write-Host "  WARN 无法停止进程 $($_.OwningProcess)" -ForegroundColor Red
        }
    }
    Start-Sleep 1
} else {
    Write-Host "  OK 端口 $port 未被占用" -ForegroundColor Green
}

# 步骤2: 构建项目
Write-Host "`n[2/3] 开始构建项目..." -ForegroundColor Yellow
cd $PSScriptRoot
npm run build

if ($LASTEXITCODE -ne 0) {
    Write-Error "构建失败！请检查错误信息。"
    exit 1
}

Write-Host "  OK 构建成功" -ForegroundColor Green

# 步骤3: 启动服务器
Write-Host "`n[3/3] 启动本地服务器..." -ForegroundColor Yellow
Write-Host "  访问地址: http://localhost:$port" -ForegroundColor Cyan
Write-Host "  按 Ctrl+C 停止服务器`n" -ForegroundColor Gray

# 使用 Python 启动（如果可用），否则使用 PowerShell 替代
$python = Get-Command python -ErrorAction SilentlyContinue
if ($python) {
    python -m http.server $port --directory dist --bind 127.0.0.1
} else {
    Write-Host "Python 未找到，使用 PowerShell 替代方案..." -ForegroundColor Yellow
    $scriptPath = Join-Path $PSScriptRoot "serve.ps1"
    & $scriptPath -Port $port
}
