-- CreateTable
CREATE TABLE "StatisticsColor" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "via" TEXT NOT NULL,
    "text" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Statistics" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    CONSTRAINT "Statistics_id_fkey" FOREIGN KEY ("id") REFERENCES "StatisticsColor" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
