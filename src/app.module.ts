import { ApolloDriver } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { BookModule } from './book/book.module';
import { join } from 'path';

@Module({
  imports: [
    GraphQLModule.forRoot({
      driver: ApolloDriver,
      playground: true,
      //for schema first approach
      // typePaths: [
      //   './**/*.graphql',
      // ],

      //for code first approach
      autoSchemaFile: join(process.cwd(), "src/schema.graphql"),
      definitions: {
        path: join(process.cwd(), "src/graphql.ts"),
      },
    }),
    BookModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
