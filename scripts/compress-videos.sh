#!/bin/bash

# Video Compression Script for TerraGuard
# This script compresses video files for web optimization
# 
# Prerequisites:
#   brew install ffmpeg
#
# Usage:
#   chmod +x scripts/compress-videos.sh
#   ./scripts/compress-videos.sh

echo "🎬 TerraGuard - Video Compression Script"
echo "================================================="
echo ""

# Check for ffmpeg
if ! command -v ffmpeg &> /dev/null; then
    echo "❌ ffmpeg is not installed. Install with: brew install ffmpeg"
    exit 1
fi

# Set directories
PUBLIC_DIR="./public"
OUTPUT_DIR="./public/optimized"

mkdir -p "$OUTPUT_DIR"

# Compress video function
compress_video() {
    local input="$1"
    local filename=$(basename "$input")
    local name="${filename%.*}"
    local output="$OUTPUT_DIR/${name}-compressed.mp4"
    
    echo "🔄 Compressing: $filename"
    echo "   This may take a few minutes..."
    
    # Get original size
    original_size=$(stat -f%z "$input" 2>/dev/null || stat -c%s "$input" 2>/dev/null)
    
    # Compress with H.264, CRF 28 (good quality/size balance), scale to 1080p max
    ffmpeg -i "$input" \
        -vcodec libx264 \
        -crf 28 \
        -preset medium \
        -vf "scale='min(1920,iw)':min'(1080,ih)':force_original_aspect_ratio=decrease" \
        -acodec aac \
        -b:a 128k \
        -movflags +faststart \
        -y \
        "$output" 2>/dev/null
    
    if [ -f "$output" ]; then
        new_size=$(stat -f%z "$output" 2>/dev/null || stat -c%s "$output" 2>/dev/null)
        savings=$((100 - (new_size * 100 / original_size)))
        
        echo "   ✅ Compression complete!"
        echo "   Original: $(echo "scale=2; $original_size/1048576" | bc) MB"
        echo "   Compressed: $(echo "scale=2; $new_size/1048576" | bc) MB"
        echo "   Savings: ${savings}%"
    else
        echo "   ❌ Compression failed"
    fi
    echo ""
}

# Also create WebM version for better browser support
create_webm() {
    local input="$1"
    local filename=$(basename "$input")
    local name="${filename%.*}"
    local output="$OUTPUT_DIR/${name}.webm"
    
    echo "🔄 Creating WebM version: ${name}.webm"
    
    ffmpeg -i "$input" \
        -c:v libvpx-vp9 \
        -crf 30 \
        -b:v 0 \
        -vf "scale='min(1920,iw)':min'(1080,ih)':force_original_aspect_ratio=decrease" \
        -c:a libopus \
        -b:a 128k \
        -y \
        "$output" 2>/dev/null
    
    if [ -f "$output" ]; then
        echo "   ✅ WebM created: ${name}.webm"
    fi
    echo ""
}

echo "📁 Processing videos in $PUBLIC_DIR..."
echo ""

# Process all MP4 files
for file in "$PUBLIC_DIR"/*.mp4; do
    if [ -f "$file" ]; then
        compress_video "$file"
        create_webm "$file"
    fi
done

echo "✅ Video compression complete!"
echo ""
echo "📋 Next Steps:"
echo "1. Review compressed videos in: $OUTPUT_DIR"
echo "2. Replace original videos with compressed versions"
echo "3. Use <video> with multiple sources for browser support:"
echo ""
echo "Example usage:"
echo '  <video poster="/thumbnail.webp" preload="none">'
echo '    <source src="/video.webm" type="video/webm">'
echo '    <source src="/video-compressed.mp4" type="video/mp4">'
echo '  </video>'
