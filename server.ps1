# Simple Robust Static File HTTP Server in PowerShell using .NET HttpListener
$port = 8080
$prefix = "http://localhost:$port/"
$root = $PSScriptRoot

$listener = New-Object System.Net.HttpListener
$listener.Prefixes.Add($prefix)

try {
    $listener.Start()
    Write-Host "Server running at $prefix"
    Write-Host "Press Ctrl+C to stop."

    while ($listener.IsListening) {
        try {
            $context = $listener.GetContext()
            $request = $context.Request
            $response = $context.Response

            $urlPath = $request.Url.LocalPath.TrimStart('/')
            if ([string]::IsNullOrEmpty($urlPath)) {
                $urlPath = "index.html"
            }

            $filePath = Join-Path $root $urlPath

            # Prevent directory traversal
            $fullPath = [System.IO.Path]::GetFullPath($filePath)
            $expectedRoot = [System.IO.Path]::GetFullPath($root)

            if ($fullPath.StartsWith($expectedRoot) -and (Test-Path $fullPath -PathType Leaf)) {
                $extension = [System.IO.Path]::GetExtension($fullPath).ToLower()
                $contentType = switch ($extension) {
                    ".html" { "text/html; charset=utf-8" }
                    ".css"  { "text/css; charset=utf-8" }
                    ".js"   { "application/javascript; charset=utf-8" }
                    ".json" { "application/json; charset=utf-8" }
                    ".png"  { "image/png" }
                    ".jpg"  { "image/jpeg" }
                    ".jpeg" { "image/jpeg" }
                    ".svg"  { "image/svg+xml" }
                    default { "application/octet-stream" }
                }

                $bytes = [System.IO.File]::ReadAllBytes($fullPath)
                $response.ContentType = $contentType
                $response.ContentLength64 = $bytes.Length
                $response.StatusCode = 200

                # Only write body if not a HEAD request
                if ($request.HttpMethod -ne "HEAD") {
                    $response.OutputStream.Write($bytes, 0, $bytes.Length)
                }
            } else {
                $response.StatusCode = 404
                $notFoundBytes = [System.Text.Encoding]::UTF8.GetBytes("404 Not Found")
                $response.ContentLength64 = $notFoundBytes.Length
                if ($request.HttpMethod -ne "HEAD") {
                    $response.OutputStream.Write($notFoundBytes, 0, $notFoundBytes.Length)
                }
            }
            $response.Close()
        } catch {
            Write-Host "Request error: $_"
            try { $response.Close() } catch {}
        }
    }
} finally {
    try { $listener.Stop() } catch {}
    try { $listener.Close() } catch {}
}
