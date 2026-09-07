// src/mocks/handlers/posts.ts

import { http, HttpResponse } from "msw";

export const postsHandlers = [
    http.get("http://localhost:4000/posts/:id", ({ params }) => {
        return HttpResponse.json({
            id: Number(params.id),
            title: `첫 번째 게시글`,
            body: `내용 1`,
        });
    }),
];
