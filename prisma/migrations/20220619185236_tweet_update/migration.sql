/*
  Warnings:

  - Added the required column `tweet` to the `Tweet` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Tweet" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "username" TEXT NOT NULL,
    "avatar" TEXT NOT NULL,
    "tweet" TEXT NOT NULL,
    CONSTRAINT "Tweet_username_fkey" FOREIGN KEY ("username") REFERENCES "SignUp" ("username") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Tweet" ("avatar", "createdAt", "id", "updatedAt", "username") SELECT "avatar", "createdAt", "id", "updatedAt", "username" FROM "Tweet";
DROP TABLE "Tweet";
ALTER TABLE "new_Tweet" RENAME TO "Tweet";
CREATE UNIQUE INDEX "Tweet_username_key" ON "Tweet"("username");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
