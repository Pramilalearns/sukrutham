import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
export const dynamic = 'force-static';

export async function GET() {
    try {
        const galleryPath = path.join(process.cwd(), 'public', 'room-gallery');
        
        // Check if gallery exists
        if (!fs.existsSync(galleryPath)) {
            return NextResponse.json({ error: 'Gallery folder not found' }, { status: 404 });
        }

        const roomFolders = fs.readdirSync(galleryPath, { withFileTypes: true })
            .filter(dirent => dirent.isDirectory())
            .map(dirent => dirent.name);

        const roomImages: Record<string, string[]> = {};

        roomFolders.forEach(folder => {
            const folderPath = path.join(galleryPath, folder);
            const files = fs.readdirSync(folderPath)
                .filter(file => {
                    const ext = path.extname(file).toLowerCase();
                    return ['.jpg', '.jpeg', '.png', '.webp'].includes(ext);
                })
                .map(file => `/room-gallery/${folder}/${file}`);
            
            // Return BOTH the original folder name AND the mapped ID for backward compatibility
            // and future-proofing the gallery component.
            roomImages[folder] = files;
            
            // Keep existing mapping for the visual tour
            let id = folder.toLowerCase();
            if (id.includes('paddy')) roomImages['paddy'] = files;
            else if (id.includes('tapioca')) roomImages['tapioca'] = files;
            else if (id.includes('pepper')) roomImages['pepper'] = files;
        });

        return NextResponse.json(roomImages);
    } catch (error: any) {
        console.error('Error reading gallery:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
