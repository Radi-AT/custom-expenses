import { clerkMiddleware, getAuth } from "@hono/clerk-auth";
import { Hono } from "hono";

const app = new Hono()
  .get(
    '/',
    clerkMiddleware(),
    (c) => {
      const auth = getAuth(c);
      if (!auth?.userId) {
        return c.json(
          { error: 'Unauthorized' },
          401
        );
      }

      return c.json({
        message: 'Hello user!',
        userId: auth.userId,
        yourAuth: auth,
      });
    }
  );

export default app;
