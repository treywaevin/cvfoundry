import http from 'http';
import supertest from 'supertest';

import {http as rest} from 'msw';
import { setupServer } from 'msw/node';

export const handlers = [
  rest.post('/api/resume', (req: any, res: any, ctx: any) => {
    const {userId, title} = req.body;
    return res(
      ctx.status(201),
      ctx.json({userId: "123", title: "Software Engineer"})
    );
  }),
];
let server: http.Server<typeof http.IncomingMessage, typeof http.ServerResponse>;
const db = setupServer(...handlers);

// Setup tests
beforeAll(async () => {
  db.listen();
});
afterEach(() => db.resetHandlers());
afterAll(() => db.close());

test('creates a new resume', async () => {
  await supertest(server)
    .post('/api/resume')
    .send({ userId: '123', title: 'Software Engineer' })
    .then((res) => {
      expect(res.status).toBe(201);
      expect(res.body).toEqual({ userId: '123', title: 'Software Engineer' });
    })
});