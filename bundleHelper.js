import { np } from './dist/np';
if (typeof window !== 'undefined') {
    window.np = np;
}
else {
    exports.np = np;
}