#!/bin/bash

# Image Optimization Script for TerraGuard
# This script converts images to WebP format and compresses them
# 
# Prerequisites:
#   brew install webp imagemagick ffmpeg
#
# Usage:
#   chmod +x scripts/optimize-images.sh
#   ./scripts/optimize-images.sh

echo "🖼️  TerraGuard - Image Optimization Script"
echo "=================================================="
echo ""

# Check for required tools
check_tool() {
    if ! command -v $1 &> /dev/null; then
        echo "❌ $1 is not installed. Install with: brew install $2"
        exit 1
    fi
}

check_tool "cwebp" "webp"
check_tool "convert" "imagemagick"

# Set directories
PUBLIC_DIR="./public"
OUTPUT_DIR="./public/optimized"

# Create output directory
mkdir -p "$OUTPUT_DIR"

echo "📁 Processing images in $PUBLIC_DIR..."
echo ""

# Convert PNG/JPG to WebP
convert_to_webp() {
    local input="$1"
    local filename=$(basename "$input")
    local name="${filename%.*}"
    local output="$OUTPUT_DIR/${name}.webp"
    
    echo "Converting: $filename -> ${name}.webp"
    cwebp -q 80 "$input" -o "$output" 2>/dev/null
    
    # Show size comparison
    original_size=$(stat -f%z "$input" 2>/dev/null || stat -c%s "$input" 2>/dev/null)
    new_size=$(stat -f%z "$output" 2>/dev/null || stat -c%s "$output" 2>/dev/null)
    savings=$((100 - (new_size * 100 / original_size)))
    
    echo "  Original: $(numfmt --to=iec $original_size 2>/dev/null || echo "${original_size} bytes")"
    echo "  WebP: $(numfmt --to=iec $new_size 2>/dev/null || echo "${new_size} bytes")"
    echo "  Savings: ${savings}%"
    echo ""
}

# Compress large images (resize if over 2000px)
compress_image() {
    local input="$1"
    local filename=$(basename "$input")
    local output="$OUTPUT_DIR/$filename"
    
    echo "Compressing: $filename"
    convert "$input" -resize "2000x2000>" -quality 85 "$output" 2>/dev/null
    
    original_size=$(stat -f%z "$input" 2>/dev/null || stat -c%s "$input" 2>/dev/null)
    new_size=$(stat -f%z "$output" 2>/dev/null || stat -c%s "$output" 2>/dev/null)
    savings=$((100 - (new_size * 100 / original_size)))
    
    echo "  Original: $(numfmt --to=iec $original_size 2>/dev/null || echo "${original_size} bytes")"
    echo "  Compressed: $(numfmt --to=iec $new_size 2>/dev/null || echo "${new_size} bytes")"
    echo "  Savings: ${savings}%"
    echo ""
}

# Process all PNG files
echo "🔄 Converting PNG files to WebP..."
echo "-----------------------------------"
for file in "$PUBLIC_DIR"/*.png; do
    [ -f "$file" ] && convert_to_webp "$file"
done

# Process all JPG files
echo "🔄 Converting JPG files to WebP..."
echo "-----------------------------------"
for file in "$PUBLIC_DIR"/*.jpg "$PUBLIC_DIR"/*.jpeg; do
    [ -f "$file" ] && convert_to_webp "$file"
done

# Process Project Gallery images
if [ -d "$PUBLIC_DIR/Project-Gallery" ]; then
    echo "🔄 Converting Project Gallery images..."
    echo "---------------------------------------"
    mkdir -p "$OUTPUT_DIR/Project-Gallery"
    for file in "$PUBLIC_DIR/Project-Gallery"/*.jpg "$PUBLIC_DIR/Project-Gallery"/*.png; do
        if [ -f "$file" ]; then
            filename=$(basename "$file")
            name="${filename%.*}"
            cwebp -q 80 "$file" -o "$OUTPUT_DIR/Project-Gallery/${name}.webp" 2>/dev/null
            echo "Converted: $filename -> ${name}.webp"
        fi
    done
fi

echo ""
echo "✅ Image optimization complete!"
echo ""
echo "📋 Next Steps:"
echo "1. Review optimized images in: $OUTPUT_DIR"
echo "2. Replace original images with optimized versions"
echo "3. Update image references in code to use .webp extension"
echo "4. Use <picture> element for browser fallback support"
echo ""
echo "Example <picture> usage:"
echo '  <picture>'
echo '    <source srcset="/optimized/image.webp" type="image/webp">'
echo '    <img src="/image.png" alt="Description">'
echo '  </picture>'
