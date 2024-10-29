-- CreateTable
CREATE TABLE "User" (
    "user_id" UUID NOT NULL,
    "user_name" TEXT NOT NULL,
    "user_lastname" TEXT NOT NULL,
    "user_email" TEXT NOT NULL,
    "user_password" TEXT NOT NULL,
    "user_avatar" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("user_id")
);

-- CreateTable
CREATE TABLE "Place" (
    "place_id" UUID NOT NULL,
    "place_name" TEXT NOT NULL,
    "place_latitude" DOUBLE PRECISION NOT NULL,
    "place_longitude" DOUBLE PRECISION NOT NULL,
    "place_rating" INTEGER NOT NULL,
    "place_reviews" INTEGER NOT NULL,
    "place_details" TEXT NOT NULL,
    "place_category" TEXT NOT NULL,
    "place_img" TEXT NOT NULL,

    CONSTRAINT "Place_pkey" PRIMARY KEY ("place_id")
);

-- CreateTable
CREATE TABLE "Review" (
    "review_id" UUID NOT NULL,
    "user_id" UUID NOT NULL,
    "place_id" UUID NOT NULL,
    "review_title" TEXT NOT NULL,
    "review_rating" INTEGER NOT NULL,
    "review_content" TEXT NOT NULL,

    CONSTRAINT "Review_pkey" PRIMARY KEY ("review_id")
);

-- AddForeignKey
ALTER TABLE "Review" ADD CONSTRAINT "Review_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("user_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Review" ADD CONSTRAINT "Review_place_id_fkey" FOREIGN KEY ("place_id") REFERENCES "Place"("place_id") ON DELETE RESTRICT ON UPDATE CASCADE;
