import { env } from 'bun';
import { Elysia } from 'elysia';
import { productsRouter } from '../products/products.router';

export class Server {
  private app: Elysia<'/api'>;

  constructor() {
    this.app = new Elysia({ prefix: '/api' });
    this.app.group('/v1', (app) => {
      return app.use(productsRouter);
    });
  }

  public init(): void {
    this.app.listen(env.PORT ?? '3000', ({ port }) => {
      console.log(`Server running on PORT ${port}`);
    });
  }
}
