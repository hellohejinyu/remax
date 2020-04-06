import * as path from 'path';
import { RemaxOptions } from 'remax-types';

export default (options: RemaxOptions): { [key: string]: string } => ({
  '@': path.resolve(options.cwd, options.rootDir),
  react: path.resolve(options.cwd, 'node_modules', 'react'),
});
