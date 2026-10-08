#!/bin/bash
# Sequential image generation with retry & backoff for gunara.web.id
cd /home/z/my-project/public/gunara

gen() {
  local prompt="$1"; local out="$2"; local size="$3"; local attempt=1; local max=6
  while [ $attempt -le $max ]; do
    echo "[$(date +%H:%M:%S)] Attempt $attempt: $out"
    if z-ai image -p "$prompt" -o "./$out" -s "$size"; then
      echo "[$(date +%H:%M:%S)] OK: $out"
      return 0
    fi
    echo "[$(date +%H:%M:%S)] Failed attempt $attempt for $out, backing off..."
    sleep $((attempt * 20))
    attempt=$((attempt + 1))
  done
  echo "[$(date +%H:%M:%S)] GIVE UP: $out"
  return 1
}

gen "Epic cinematic wide panorama, majestic golden light breaking through dark storm clouds over a grand futuristic library-city merging Javanese temple candi architecture and modern glass towers, floating glowing manuscripts and golden data streams, deep charcoal black and rich gold amber palette, volumetric god rays, ultra detailed digital matte painting, sense of civilization wisdom and grandeur, no text, no words" "hero-bg.png" "1440x720"
sleep 8
gen "Dignified silhouette portrait of a wise Indonesian polymath scholar wearing Javanese blangkon headpiece and elegant modern suit, standing before glowing golden constellation map and floating holographic ancient books, dramatic gold rim lighting, deep dark brown-black background, cinematic powerful mysterious atmosphere, premium digital art, no text" "portrait.png" "864x1152"
sleep 8
gen "Abstract luxury book cover background art, golden geometric mountain and temple silhouette rising from darkness with gold leaf texture, deep black background, premium minimalist vertical composition, elegant negative space at center, no text, high quality" "book-strategi.png" "864x1152"
sleep 8
gen "Abstract book cover background art, flowing golden data streams and glowing circuit patterns merging with ancient manuscript parchment pages, deep dark background, gold amber accents, premium minimalist vertical composition, elegant negative space, no text, high quality" "book-ai.png" "864x1152"
sleep 8
gen "Abstract book cover background art, serene golden terraced rice field landscape under moonlight transforming into elegant geometric supply chain network lines and nodes, dark moody atmosphere, gold amber accents on deep black, premium minimalist vertical composition, no text, high quality" "book-pangan.png" "864x1152"
sleep 8
gen "Serene dark spiritual landscape, silhouette of a lone santri in prayer on a mountain cliff edge under vast starry night sky with golden milky way galaxy, soft mist over valley below, deep blacks with warm gold starlight, cinematic ultra wide shot, peaceful contemplative sacred atmosphere, no text" "santri-bg.png" "1440x720"
sleep 8
gen "Luxurious minimalist heraldic emblem, golden symmetrical crest combining eagle wings, open book, and rice grain stalk, intricate gold line art on deep dark charcoal background, premium royal seal style, centered composition, no text, high quality" "emblem.png" "1024x1024"

echo "ALL_IMAGES_DONE"
ls -la /home/z/my-project/public/gunara/
