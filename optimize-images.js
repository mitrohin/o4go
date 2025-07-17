const imagemin = require('imagemin');
const mozjpeg = require('imagemin-mozjpeg');
const pngquant = require('imagemin-pngquant');
const svgo = require('imagemin-svgo');
const path = require('path');

(async () => {
  try {
    const inputDir = path.join(__dirname, 'public/images/*.{jpg,jpeg,png,svg}');
const outputDir = path.join(__dirname, 'public/images-optimized');
    
    console.log('Начинаю оптимизацию изображений...');
    
    const files = await imagemin([inputDir], {
      destination: outputDir,
      plugins: [
        mozjpeg({ quality: 75 }),
        pngquant({ quality: [0.6, 0.8] }),
        svgo({
          plugins: [
            { removeViewBox: false },
            { removeEmptyAttrs: false }
          ]
        })
      ]
    });
    
    console.log(`Оптимизировано ${files.length} изображений!`);
    
    // Заменяем оригинальные изображения оптимизированными
    const fs = require('fs');
    const path = require('path');
    
    // Копируем оптимизированные изображения обратно в public/images
    const optimizedFiles = fs.readdirSync(outputDir);
    optimizedFiles.forEach(file => {
      const sourcePath = path.join(outputDir, file);
      const destPath = path.join(__dirname, 'public/images', file);
      fs.copyFileSync(sourcePath, destPath);
    });
    
    // Удаляем временную папку
    fs.rmSync(outputDir, { recursive: true, force: true });
    
    console.log('Оптимизированные изображения заменены в public/images/');
  } catch (error) {
    console.error('Ошибка при оптимизации изображений:', error);
    process.exit(1);
  }
})(); 