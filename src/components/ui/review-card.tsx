import { Star, ThumbsUp } from "lucide-react";

interface ReviewCardProps {
  name: string;
  rating: number;
  time: string;
  comment: string;
  helpfulVotes?: number;
}

export function ReviewCard({ name, rating, time, comment, helpfulVotes = 0 }: ReviewCardProps) {
  return (
    <div className="p-4 rounded-xl bg-foreground/5 border border-foreground/5 transition-all hover:bg-foreground/10 group">
      <div className="flex justify-between items-start mb-2">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-white/10 to-white/5 flex items-center justify-center font-bold text-foreground/80 border border-foreground/10">
            {name.charAt(0)}
          </div>
          <div>
            <div className="font-semibold text-foreground text-sm">{name}</div>
            <div className="text-xs text-foreground/40">{time}</div>
          </div>
        </div>
        <div className="flex gap-1">
          {[...Array(5)].map((_, j) => (
            <Star 
              key={j} 
              className={`w-4 h-4 ${j < rating ? "text-orange fill-orange" : "text-foreground/20"}`} 
            />
          ))}
        </div>
      </div>
      <p className="text-sm text-foreground/80 mt-3 leading-relaxed">{comment}</p>
      
      <div className="flex items-center gap-4 mt-4 pt-4 border-t border-foreground/5">
        <button className="flex items-center gap-1.5 text-xs font-medium text-foreground/50 hover:text-foreground transition-colors">
          <ThumbsUp className="w-3.5 h-3.5" />
          Helpful ({helpfulVotes})
        </button>
        <button className="text-xs font-medium text-foreground/50 hover:text-foreground transition-colors">
          Reply
        </button>
      </div>
    </div>
  );
}
