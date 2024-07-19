import { Expose } from 'class-transformer';
import { HttpStatus } from '@nestjs/common';
import { ApiProperty } from '@nestjs/swagger';

export class ResponseEntity<T> {
  @ApiProperty()
  @Expose()
  statusCode: number;

  @ApiProperty()
  @Expose()
  message: string;

  @ApiProperty({ type: 'object' })
  @Expose()
  data: T | null;

  constructor(statusCode: number, message: string, data: T) {
    this.statusCode = statusCode;
    this.message = message;
    this.data = data;
  }

  static OK<T>(data: T): ResponseEntity<T> {
    return new ResponseEntity<T>(HttpStatus.OK, 'Request successful', data);
  }

  static OK_WITH_MESSAGE<T>(data: T, message: string): ResponseEntity<T> {
    return new ResponseEntity<T>(HttpStatus.OK, message, data);
  }

  static ERROR(message: string): ResponseEntity<null> {
    return new ResponseEntity<null>(HttpStatus.BAD_REQUEST, message, null);
  }

  static ERROR_WITH_DATA<T>(
    message: string,
    code: number = HttpStatus.BAD_REQUEST,
    data: T,
  ): ResponseEntity<T> {
    return new ResponseEntity<T>(code, message, data);
  }

  static fromStatusCode<T>(
    statusCode: number,
    message: string,
    data: T | null,
  ): ResponseEntity<T> {
    return new ResponseEntity<T>(statusCode, message, data);
  }
}
