'use client'

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { BookOpen, Heart } from "lucide-react"
import { bibleBooks, Book } from "@/lib/bible-data"
import Link from "next/link"

export default function BookList() {
  const oldTestament = bibleBooks.filter(book => book.testament === 'old')
  const newTestament = bibleBooks.filter(book => book.testament === 'new')

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-primary mb-4 flex items-center justify-center gap-2">
          <BookOpen className="w-10 h-10" />
          Bíblia Sagrada
        </h1>
        <p className="text-lg text-muted-foreground">
          Nova Versão Internacional (NVI) - Versão atualizada para leitura moderna
        </p>
      </div>

      {/* Old Testament */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-6 text-secondary flex items-center gap-2">
          <Heart className="w-6 h-6" />
          Antigo Testamento
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {oldTestament.map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
      </div>

      {/* New Testament */}
      <div>
        <h2 className="text-2xl font-semibold mb-6 text-accent flex items-center gap-2">
          <Heart className="w-6 h-6" />
          Novo Testamento
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {newTestament.map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
      </div>
    </div>
  )
}

function BookCard({ book }: { book: Book }) {
  return (
    <Card className="hover:shadow-lg transition-shadow duration-300 border-l-4 border-l-primary">
      <CardHeader className="pb-3">
        <CardTitle className="text-lg">{book.name}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground mb-4">
          {book.chapters} capítulo{book.chapters !== 1 ? 's' : ''}
        </p>
        <Link href={`/books/${book.id}`}>
          <Button className="w-full" variant="outline">
            <BookOpen className="w-4 h-4 mr-2" />
            Ler
          </Button>
        </Link>
      </CardContent>
    </Card>
  )
}