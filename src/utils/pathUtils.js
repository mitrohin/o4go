// Утилита для определения базового пути приложения
export function getBasePath() {
  // В development режиме используем корневой путь
  if (process.env.NODE_ENV === 'development') {
    return '';
  }
  
  // В production используем PUBLIC_URL для статических ресурсов
  // и определяем путь из window.location для динамических путей
  if (typeof window !== 'undefined') {
    const pathname = window.location.pathname;
    
    // Если приложение находится в корне домена
    if (pathname === '/' || pathname === '') {
      return process.env.PUBLIC_URL || '';
    }
    
    // Если приложение в подпапке, извлекаем путь
    // Например: /fmd/ -> /fmd/
    // Например: /subfolder/app/ -> /subfolder/app/
    const pathSegments = pathname.split('/').filter(Boolean);
    if (pathSegments.length > 0) {
      // Возвращаем путь с начальным и конечным слешем
      return '/' + pathSegments.join('/') + '/';
    }
  }
  
  // Fallback - используем PUBLIC_URL если доступен
  return process.env.PUBLIC_URL || '';
}

// Функция для создания полного пути к ресурсу
export function getAssetPath(relativePath) {
  const basePath = getBasePath();
  const cleanRelativePath = relativePath.startsWith('/') ? relativePath.slice(1) : relativePath;
  return basePath + cleanRelativePath;
}
