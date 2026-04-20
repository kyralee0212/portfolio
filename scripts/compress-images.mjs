import sharp from 'sharp'
import { readdirSync, statSync, renameSync } from 'fs'
import { join, extname, basename } from 'path'

const dir = 'src/assets/images'
const files = readdirSync(dir).filter(f => /\.(png|jpg|jpeg)$/i.test(f))

let totalBefore = 0
let totalAfter = 0

for (const file of files) {
  const src = join(dir, file)
  const name = basename(file, extname(file))
  const dest = join(dir, `${name}.webp`)

  const sizeBefore = statSync(src).size
  totalBefore += sizeBefore

  await sharp(src)
    .resize({ width: 1400, height: 1400, fit: 'inside', withoutEnlargement: true })
    .webp({ quality: 85 })
    .toFile(dest)

  const sizeAfter = statSync(dest).size
  totalAfter += sizeAfter

  const ratio = Math.round((1 - sizeAfter / sizeBefore) * 100)
  console.log(`✓ ${file} → ${name}.webp  ${(sizeBefore/1024/1024).toFixed(1)}MB → ${(sizeAfter/1024).toFixed(0)}KB  (-${ratio}%)`)
}

console.log(`\nTotal: ${(totalBefore/1024/1024).toFixed(1)}MB → ${(totalAfter/1024/1024).toFixed(1)}MB`)
