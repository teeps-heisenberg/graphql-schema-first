import { Query, Resolver } from "@nestjs/graphql";
import { Book } from "./book.schema";
import { Book as BookModel } from "src/graphql";

@Resolver((of) => Book)
export class BookResolver {

    @Query((returns) => [Book], { name: 'books' })
    getAllBooks() {
        const arr: BookModel[] = [{
            id: 1, title: "Harry Potter 1", price: 500,
        },
        {
            id: 2, title: "Harry Potter 2", price: 520,
        },
        {
            id: 3, title: "Harry Potter 3", price: 560,
        },];
        //return books
        return arr;
    }
}