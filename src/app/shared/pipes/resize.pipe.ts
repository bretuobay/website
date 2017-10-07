import { Pipe, PipeTransform } from '@angular/core';
/*
 * Apply Cloudinary Transformations
 * Usage:
 *   value | resize:modifiers
 * Example:
 *   {{ 'https://res.cloudinary.com/demo/upload/xyz.png' | resize:"w_500" }}
 *   formats to: https://res.cloudinary.com/demo/upload/w_500/xyz.png
*/
@Pipe({ name: 'resize' })
export class ResizePipe implements PipeTransform {
  transform(imageUrl: string, modifiers: string) {
    return imageUrl && imageUrl.replace('upload', 'upload/' + modifiers);
  }
}
