import { ValidationPipe } from "@nestjs/common";
import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true }),
  ); // Без этого class-validator не будет работать:
  app.enableCors({
    origin: "*",
  });

  app.use((req, res, next) => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    console.log("🔍 Method:", req.method);
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    console.log("🔍 URL:", req.url);
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    console.log("🔍 Origin:", req.headers.origin);
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    console.log("🔍 Referer:", req.headers.referer);
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    console.log("🔍 User-Agent:", req.headers["user-agent"]);
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
    next();
  });

  await app.listen(process.env.PORT ?? 3000);
}

bootstrap();
//// origin: "https://3325-77-238-254-115.ngrok-free.app", // твой фронтенд (Vite)
