import imagemin from 'imagemin';
import mozjpeg from 'imagemin-mozjpeg';
import pngquant from 'imagemin-pngquant';
import svgo from 'imagemin-svgo';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';
import sharp from 'sharp';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Конфигурация размеров для разных типов изображений
const imageSizes = {
  // Герои и фоновые изображения (высокое разрешение)
  hero: {
    width: 1920,
    height: 1080,
    quality: 85
  },
  // Карточки и контентные изображения (среднее разрешение)
  content: {
    width: 800,
    height: 600,
    quality: 80
  },
  // Отзывы и маленькие изображения (низкое разрешение)
  thumbnail: {
    width: 400,
    height: 300,
    quality: 75
  }
};

// Классификация изображений по их использованию
const imageClassification = {
  // Герои и фоновые изображения
  hero: [
    '2d6096cc70f9ecb84ca0bde4b0e6684b42ebf641.png', // Footer background
    '7ab6fa77487df21474a6b4653e637cc7caad8fce.png', // Hero background
    'eb887c71da61a943366ba35716d34aceb2baa294.png', // PriceDelivery
    'e46c27da5900e5918975108d4f5b9f28acca1234.png', // HowItWorks
    'bf969679f731867af2612ecc93d2eea9eb05950d.png'  // HowItWorks
  ],
  // Контентные изображения
  content: [
    '51fe215dffd44eaa93160bb4354e7d568e4659e6.png', // OgorodLight1
    '5f27dce26c5cad4400d27d3cb78d95e01859d3de.png', // 645Dcb5EDe3A42E28Da8Feba7D1F2E46
    '00ebf7531a21a826d4a2857215e34e0343be3b50.png', // OgorodLemon1
    '12c8cf32e4a3d4f8ada107fa6ebb677227abd750.png', // D639Be080Fb8F940Cc0Ee6Bc76422570
    '718ab106fc491b09a03ae1c53f1aa1f22f6692c7.png', // Visualelectric
    '25f5386586ebc47864eaa6e633c0dc359ad65608.png', // OgorodDark1
    '9410f0e5c99cf0a95483667fa98fc1a049cd3d23.png', // A84698Bb441631304A8600Dcc468C62F
    '303b6076284d4994603dec8e96091d4db5ae7500.png'  // Rectangle11
  ],
  // Отзывы и маленькие изображения
  thumbnail: [
    '80ebea45cf71ed33cd43d2ed32100df91052a8f9.png', // 5337324853826547944
    '6a8e4bbd4a44ae70b9c02fc021d2774f00e23353.png', // 5298832029774896687
    '800606f8e0f3eb34e53d928eedab55877e94d64e.png', // 5337324853826547946
    '4ebd650d94432a013758b3db9b590bfeed31680a.png'  // WhatsApp icon
  ]
};

// Функция для определения типа изображения
function getImageType(filename) {
  for (const [type, files] of Object.entries(imageClassification)) {
    if (files.includes(filename)) {
      return type;
    }
  }
  // По умолчанию считаем контентным
  return 'content';
}

// Функция ресайза изображения
async function resizeImage(inputPath, outputPath, type) {
  const config = imageSizes[type];
  const ext = path.extname(inputPath).toLowerCase();

  try {
    let pipeline = sharp(inputPath).resize(config.width, config.height, {
      fit: 'inside',
      withoutEnlargement: true
    });

    if (ext === '.png') {
      pipeline = pipeline.png({ quality: config.quality, compressionLevel: 9, adaptiveFiltering: true });
    } else if (ext === '.jpg' || ext === '.jpeg') {
      pipeline = pipeline.jpeg({ quality: config.quality });
    } else {
      // Для других форматов просто копируем
      fs.copyFileSync(inputPath, outputPath);
      console.log(`✓ Копия (без изменений): ${path.basename(inputPath)}`);
      return;
    }

    await pipeline.toFile(outputPath);
    console.log(`✓ Ресайз: ${path.basename(inputPath)} -> ${type} (${config.width}x${config.height})`);
  } catch (error) {
    console.error(`✗ Ошибка ресайза ${inputPath}:`, error.message);
    // Если ресайз не удался, копируем оригинал
    fs.copyFileSync(inputPath, outputPath);
  }
}

(async () => {
  try {
    const inputDir = path.join(__dirname, 'public/images/*.{jpg,jpeg,png,svg}');
    const outputDir = path.join(__dirname, 'public/images-optimized');
    
    console.log('Начинаю оптимизацию и ресайз изображений...');
    
    // Создаем временную папку
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
    }
    
    // Получаем список всех изображений
    const imageFiles = fs.readdirSync(path.join(__dirname, 'public/images'));
    const imageFilesToProcess = imageFiles.filter(file => 
      /\.(jpg|jpeg|png)$/i.test(file) && !file.startsWith('.')
    );
    
    console.log(`Найдено ${imageFilesToProcess.length} изображений для обработки`);
    
    // Обрабатываем каждое изображение
    for (const filename of imageFilesToProcess) {
      const inputPath = path.join(__dirname, 'public/images', filename);
      const outputPath = path.join(outputDir, filename);
      const imageType = getImageType(filename);
      
      // Ресайзим изображение
      await resizeImage(inputPath, outputPath, imageType);
    }
    
    // Оптимизируем SVG файлы
    const svgFiles = imageFiles.filter(file => 
      /\.svg$/i.test(file) && !file.startsWith('.')
    );
    
    if (svgFiles.length > 0) {
      console.log(`Найдено ${svgFiles.length} SVG файлов для оптимизации`);
      
      const svgInputDir = path.join(__dirname, 'public/images/*.svg');
      const svgFilesOptimized = await imagemin([svgInputDir], {
        destination: outputDir,
        plugins: [svgo()]
      });
      
      console.log(`Оптимизировано ${svgFilesOptimized.length} SVG файлов`);
    }
    
    // Копируем оптимизированные изображения обратно в public/images
    const optimizedFiles = fs.readdirSync(outputDir);
    optimizedFiles.forEach(file => {
      const sourcePath = path.join(outputDir, file);
      const destPath = path.join(__dirname, 'public/images', file);
      fs.copyFileSync(sourcePath, destPath);
    });
    
    // Удаляем временную папку
    fs.rmSync(outputDir, { recursive: true, force: true });
    
    console.log('✓ Оптимизация и ресайз изображений завершены!');
    console.log('✓ Оптимизированные изображения заменены в public/images/');
    
  } catch (error) {
    console.error('Ошибка при оптимизации изображений:', error);
    process.exit(1);
  }
})(); 