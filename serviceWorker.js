const staticDevCoffee = "dev-coffee-site-v1"
const assets = [
  "/",
  "/index.html",
]

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(staticDevCoffee).then(cache => {
      cache.addAll(assets)
    })
  )
})