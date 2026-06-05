import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(req: Request, { params }: { params: { id: string } }) {
  try {
    const questionId = params.id;
    
    // Increment views
    await prisma.question.update({
      where: { id: questionId },
      data: { views: { increment: 1 } }
    });

    const question = await prisma.question.findUnique({
      where: { id: questionId },
      include: {
        user: { select: { id: true, name: true, image: true } },
        tags: true,
        college: { select: { id: true, name: true } },
        answers: {
          include: {
            user: { select: { id: true, name: true, image: true } }
          },
          orderBy: [
            { isAccepted: 'desc' },
            { upvotes: 'desc' },
            { createdAt: 'asc' }
          ]
        }
      }
    });

    if (!question) {
      return NextResponse.json({ message: "Question not found" }, { status: 404 });
    }

    return NextResponse.json(question);
  } catch (error) {
    console.error("Error fetching question:", error);
    return NextResponse.json({ message: "Internal server error" }, { status: 500 });
  }
}

import { auth } from "@/auth";

export async function DELETE(req: Request, { params }: { params: { id: string } }) {
  const session = await auth();
  if (!session?.user?.id) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  try {
    const questionId = params.id;
    const question = await prisma.question.findUnique({
      where: { id: questionId }
    });

    if (!question) {
      return NextResponse.json({ message: "Question not found" }, { status: 404 });
    }

    if (question.userId !== session.user.id) {
      return NextResponse.json({ message: "Forbidden" }, { status: 403 });
    }

    await prisma.question.delete({
      where: { id: questionId }
    });

    return NextResponse.json({ message: "Deleted successfully" }, { status: 200 });
  } catch (error) {
    console.error("Error deleting question:", error);
    return NextResponse.json({ message: "Internal server error" }, { status: 500 });
  }
}
