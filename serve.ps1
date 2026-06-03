# SafeDownload 本地服务器脚本
param(
    [int]$Port = 8765,
    [string]$Directory = "dist"
)

# 查找并停止占用端口的进程
$existing = Get-NetTCPConnection -LocalPort $Port -ErrorAction SilentlyContinue
if ($existing) {
    $existing | ForEach-Object {
        try {
            Stop-Process -Id $_.OwningProcess -Force -ErrorAction SilentlyContinue
            Write-Host "已停止占用端口 $Port 的进程 (PID: $($_.OwningProcess))" -ForegroundColor Yellow
        } catch {
            Write-Host "无法停止进程 $($_.OwningProcess)，尝试其他方法..." -ForegroundColor Red
        }
    }
    Start-Sleep 2
}

# 确保目录存在
if (-not (Test-Path $Directory)) {
    Write-Error "目录 $Directory 不存在，请先运行 npm run build"
    exit 1
}

# 启动服务器
Write-Host "启动服务器: http://localhost:$Port" -ForegroundColor Green
Write-Host "按 Ctrl+C 停止服务器" -ForegroundColor Gray

# 使用 .NET HttpListener 替代 Python，更稳定
$listener = New-Object System.Net.HttpListener
$listener.Prefixes.Add("http://localhost:$Port/")
$listener.Start()

try {
    while ($listener.IsListening) {
        $context = $listener.GetContext()
        $request = $context.Request
        $response = $context.Response
        
        # 获取请求路径
        $path = $request.Url.LocalPath
        if ($path -eq "/") { $path = "/index.html" }
        
        $filePath = Join-Path $Directory $path.TrimStart('/')
        
        if (Test-Path $filePath -PathType Leaf) {
            $content = [System.IO.File]::ReadAllBytes($filePath)
            $response.ContentType = [System.Web.MimeMapping]::GetMimeMapping($filePath)
            $response.ContentLength64 = $content.Length
            $response.OutputStream.Write($content, 0, $content.Length)
        } else {
            # 尝试返回 index.html（支持前端路由）
            $indexPath = Join-Path $Directory "index.html"
            if (Test-Path $indexPath) {
                $content = [System.IO.File]::ReadAllBytes($indexPath)
                $response.ContentType = "text/html"
                $response.ContentLength64 = $content.Length
                $response.OutputStream.Write($content, 0, $content.Length)
            } else {
                $response.StatusCode = 404
                $buffer = [System.Text.Encoding]::UTF8.GetBytes("404 - Not Found")
                $response.ContentLength64 = $buffer.Length
                $response.OutputStream.Write($buffer, 0, $buffer.Length)
            }
        }
        
        $response.Close()
    }
} finally {
    $listener.Stop()
    $listener.Close()
}
