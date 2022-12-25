import {defineConfig} from 'vite';
import {join, resolve} from 'path';
import vue from '@vitejs/plugin-vue';

const rootPath = import.meta.url.toString().replace('file://', '').replace('/vite.config.js', '').trim();

const aliases = [
    //{find: 'vue$', replacement: 'vue/dist/vue.runtime.esm.js'},
    {find: /~(.+)/, replacement: resolve(rootPath, './node_modules/$1')},
    {find: /@\//, replacement: resolve(rootPath, './src') + '/'},
];

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue()],
    resolve: {
        alias: aliases,
    },
    build: {
        target: 'esnext',
        lib: {
            entry: resolve(rootPath, 'src/index.js'),
            name: 'ApplicationLdJsonLib',
            fileName: (format) => `build.${format}.js`,
        },
        rollupOptions: {
            // make sure to externalize deps that shouldn't be bundled
            // into your library
            external: ['vue'],
            output: {
                // Provide global variables to use in the UMD build
                // for externalized deps
                globals: {
                    vue: 'Vue',
                },
            },
        },
    },
    test: {
        globals: true,
        environment: 'happy-dom',
    }
});
