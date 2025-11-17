import { notFound } from 'next/navigation'
import ChapterList from '@/components/bible/ChapterList'
import { bibleBooks } from '@/lib/bible-data'

interface PageProps {
  params: Promise<{ book: string }>
}

export default async function BookPage({ params }: PageProps) {
  const { book } = await params
  const bookData = bibleBooks.find(b => b.id === book)

  if (!bookData) {
    notFound()
  }

  return <ChapterList book={bookData} />
}

export async function generateStaticParams() {
  return bibleBooks.map((book) => ({
    book: book.id,
  }))
}