-- CreateTable
CREATE TABLE "Courses" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "forMonth" BOOLEAN NOT NULL,
    "discount" INTEGER,
    "link" TEXT NOT NULL,
    "duration" TEXT NOT NULL
);
