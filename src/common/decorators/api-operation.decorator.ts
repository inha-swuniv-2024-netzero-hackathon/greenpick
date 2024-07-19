import { applyDecorators } from '@nestjs/common';

export function ApplySwagger({ operation, ...responses }) {
  return applyDecorators(operation, ...Object.values(responses));
}
