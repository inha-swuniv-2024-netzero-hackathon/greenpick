import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
  HttpStatus,
  Logger,
} from '@nestjs/common';
import { Response } from 'express';
import { plainToInstance } from 'class-transformer';
import { ResponseEntity } from '../response-entity';
import { QueryFailedError } from 'typeorm';

@Catch()
export class AllExceptionsFilter implements ExceptionFilter {
  private readonly logger = new Logger(AllExceptionsFilter.name);

  catch(exception: unknown, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();

    let status: number;
    let message: string;

    if (exception instanceof HttpException) {
      status = exception.getStatus();
      message = exception.getResponse() as string;
    } else if (exception instanceof QueryFailedError) {
      // TypeORM QueryFailedError 처리
      status = HttpStatus.BAD_REQUEST;
      message = exception.message;
    } else {
      status = HttpStatus.INTERNAL_SERVER_ERROR;
      message = 'Internal server error';
    }

    this.logger.error(
      `Exception caught: ${JSON.stringify(exception)}
      \nRequest: ${request.method} ${request.url}
      \nResponse Status: ${status}`,
    );

    const errorMessage =
      typeof message === 'string' ? message : (message as any).message;

    const errorResponse = plainToInstance(
      ResponseEntity,
      ResponseEntity.fromStatusCode(status, errorMessage, null),
    );

    response.status(status).json(errorResponse);
  }
}
