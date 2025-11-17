'use client'

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { BookOpen, ArrowLeft } from "lucide-react"
import { Book } from "@/lib/bible-data"
import Link from "next/link"

interface ChapterListProps {
  book: Book
}

export default function ChapterList({ book }: ChapterListProps) {
  const chapters = Array.from({ length: book.chapters }, (_, i) => i + 1)

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <Link href="/" className="inline-flex items-center text-primary hover:text-primary/80 mb-4">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Voltar aos livros
        </Link>
        <h1 className="text-3xl font-bold text-primary mb-2">{book.name}</h1>
        <p className="text-muted-foreground">
          {book.chapters} capítulo{book.chapters !== 1 ? 's' : ''} - {book.testament === 'old' ? 'Antigo' : 'Novo'} Testamento
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {chapters.map((chapter) => (
          <Card key={chapter} className="hover:shadow-md transition-shadow duration-300">
            <CardContent className="p-4 text-center">
              <Link href={`/books/${book.id}/chapters/${chapter}`}>
                <Button variant="outline" className="w-full h-16 flex flex-col items-center justify-center">
                  <BookOpen className="w-5 h-5 mb-1" />
                  <span className="text-sm font-medium">{chapter}</span>
                </Button>
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}