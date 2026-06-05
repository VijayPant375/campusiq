import { PrismaClient } from '@prisma/client';
import * as fs from 'fs';
import * as path from 'path';

const prisma = new PrismaClient();

async function main() {
  const dataPath = path.join(__dirname, 'data', 'colleges.json');
  const rawData = fs.readFileSync(dataPath, 'utf-8');
  const colleges = JSON.parse(rawData);

  let inserted = 0;
  let updated = 0;

  for (let i = 0; i < colleges.length; i++) {
    const collegeData = colleges[i];
    console.log(`Importing college ${i + 1} of ${colleges.length}... (${collegeData.name})`);

    const existingCollege = await prisma.college.findUnique({
      where: { name: collegeData.name }
    });

    if (existingCollege) {
      updated++;
    } else {
      inserted++;
    }

    const { courses, placements, reviews, tags, ...collegeFields } = collegeData;

    const college = await prisma.college.upsert({
      where: { name: collegeData.name },
      update: collegeFields,
      create: collegeFields,
    });

    // Handle Tags
    if (tags && tags.length > 0) {
      await prisma.collegeTag.deleteMany({ where: { collegeId: college.id } });
      await prisma.collegeTag.createMany({
        data: tags.map((tag: string) => ({
          collegeId: college.id,
          tag
        }))
      });
    }

    // Handle Courses
    if (courses && courses.length > 0) {
      await prisma.course.deleteMany({ where: { collegeId: college.id } });
      await prisma.course.createMany({
        data: courses.map((c: any) => ({
          ...c,
          collegeId: college.id
        }))
      });
    }

    // Handle Placements
    if (placements && placements.length > 0) {
      await prisma.placement.deleteMany({ where: { collegeId: college.id } });
      await prisma.placement.createMany({
        data: placements.map((p: any) => ({
          ...p,
          collegeId: college.id
        }))
      });
    }

    // Handle Reviews
    if (reviews && reviews.length > 0) {
      await prisma.review.deleteMany({ where: { collegeId: college.id } });
      await prisma.review.createMany({
        data: reviews.map((r: any) => ({
          ...r,
          collegeId: college.id
        }))
      });
    }
  }

  console.log(`\nImport complete!`);
  console.log(`Total colleges inserted: ${inserted}`);
  console.log(`Total colleges updated: ${updated}`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
