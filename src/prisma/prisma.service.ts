import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient {
  constructor(private readonly config: ConfigService) {
    super({
      datasources: {
        db: {
          url: 'mysql://myuser:password@localhost/testdb??socket=/cloudsql/test-gcp-book:asia-northeast1:testdb',
        },
      },
    });
  }
}
