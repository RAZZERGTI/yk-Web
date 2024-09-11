import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import createMiddleware from 'next-intl/middleware';

const locales = ['ua', 'en', 'hu'];

export default function middleware(req: NextRequest) {
    const { pathname } = req.nextUrl;

    // Исключаем статические файлы и API из обработки middleware
    if (
        pathname.startsWith('/api') ||
        pathname.startsWith('/_next/static') ||
        pathname.startsWith('/_next/image') ||
        pathname === '/favicon.ico'
    ) {
        return NextResponse.next();
    }

    // Исключаем все файлы из папки public
    const publicFileExtensions = ['.png', '.jpg', '.jpeg', '.gif', '.svg', '.ico', '.webp'];
    if (publicFileExtensions.some(extension => pathname.endsWith(extension))) {
        return NextResponse.next();
    }

    // Проверяем наличие языкового префикса в URL
    const isLanguagePath = locales.some((locale) => pathname.startsWith(`/${locale}`));

    if (!isLanguagePath) {
        // Если префикс не найден, перенаправляем на /ua
        const url = req.nextUrl.clone();
        url.pathname = `/ua${pathname}`;
        return NextResponse.redirect(url);
    }

    // Если префикс найден, используем next-intl middleware
    const intlMiddleware = createMiddleware({
        locales,
        defaultLocale: 'ua'
    });

    return intlMiddleware(req);
}

export const config = {
    matcher: ['/:path*']
};