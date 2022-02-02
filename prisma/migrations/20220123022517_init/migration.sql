-- CreateTable
CREATE TABLE "SignUp" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "firstName" VARCHAR(255) NOT NULL,
    "lastName" VARCHAR(255) NOT NULL,
    "email" VARCHAR(255) NOT NULL,
    "phone" VARCHAR(255) NOT NULL,
    "reason" VARCHAR(255) NOT NULL,

    CONSTRAINT "SignUp_pkey" PRIMARY KEY ("id")
);
