import 'dotenv/config'
import { app } from './app'

app.listen(process.env.PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`App listening on port ${process.env.PORT}`);
})
