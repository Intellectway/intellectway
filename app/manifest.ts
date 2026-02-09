import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: 'Intellectway',
        short_name: 'Intellectway',
        description: 'Premier provider of training and educational solutions',
        start_url: '/',
        display: 'standalone',
        background_color: '#ffffff',
        theme_color: '#17AAC0',
        icons: [
            {
                src: '/MainLogo.png',
                sizes: 'any',
                type: 'image/png',
            },
        ],
    }
}
