import serverless from "@vendia/serverless-express"
import { app } from "@/app"

if (process.env.NODE_ENV === "development") {
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    // eslint-disable-next-line no-console
    console.log(`App listening on port ${PORT}`);
  });
}

export const handler = serverless({ app })
