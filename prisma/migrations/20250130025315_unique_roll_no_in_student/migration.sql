/*
  Warnings:

  - A unique constraint covering the columns `[roll]` on the table `Student` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Student_roll_key" ON "Student"("roll");
