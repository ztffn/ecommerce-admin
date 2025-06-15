
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Star } from "lucide-react";

const reviewData = {
  average: 4.5,
  total: 5500,
  distribution: [
    { stars: 5, count: 4000 },
    { stars: 4, count: 2100 },
    { stars: 3, count: 800 },
    { stars: 2, count: 631 },
    { stars: 1, count: 344 },
  ],
  featured: {
    author: 'Sarah J.',
    date: 'March 12, 2025',
    text: "I was skeptical at first, but this product has completely changed my daily routine. The quality is outstanding and it's so easy to use.",
    verified: true,
  }
}

export function CustomerReviews() {
  const totalReviews = reviewData.distribution.reduce((acc, item) => acc + item.count, 0);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Customer Reviews</CardTitle>
        <CardDescription>Based on {reviewData.total.toLocaleString()} verified purchases</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex gap-4 items-start mb-6">
          <div className="flex flex-col items-center">
            <span className="text-4xl font-bold">{reviewData.average.toFixed(1)}</span>
            <span className="text-sm text-muted-foreground">out of 5</span>
          </div>
          <div className="flex-1">
            <div className="flex items-center mb-1">
                {[...Array(5)].map((_, i) => (
                    <Star key={i} className={`h-5 w-5 ${i < Math.round(reviewData.average) ? 'text-yellow-400 fill-yellow-400' : 'text-muted-foreground/30'}`}/>
                ))}
            </div>
            <div className="space-y-1 mt-2">
              {reviewData.distribution.slice().reverse().map(item => (
                <div key={item.stars} className="flex items-center gap-2 text-sm">
                  <span>{item.stars}</span>
                  <Star className="h-3 w-3 text-yellow-400 fill-yellow-400"/>
                  <div className="flex-1 bg-muted rounded-full h-1.5">
                    <div className="bg-yellow-400 h-1.5 rounded-full" style={{ width: `${(item.count / totalReviews) * 100}%` }}></div>
                  </div>
                  <span className="w-12 text-right text-muted-foreground">{item.count.toLocaleString()}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t pt-4">
            <div className="flex justify-between items-center mb-2">
                <div className="flex items-center">
                    {[...Array(5)].map((_,i) => (
                        <Star key={i} className="h-4 w-4 text-yellow-400 fill-yellow-400"/>
                    ))}
                </div>
                <span className="text-xs text-muted-foreground">{reviewData.featured.date}</span>
            </div>
            <h4 className="font-semibold mb-1">Exceeded my expectations!</h4>
            <p className="text-sm text-muted-foreground mb-2">{reviewData.featured.text}</p>
            <div className="flex items-center gap-2">
                <span className="font-medium text-sm">{reviewData.featured.author}</span>
                {reviewData.featured.verified && <span className="text-xs text-emerald-600 bg-emerald-100 dark:bg-emerald-900 dark:text-emerald-400 px-2 py-0.5 rounded-full">Verified Purchase</span>}
            </div>
        </div>
      </CardContent>
    </Card>
  );
}
