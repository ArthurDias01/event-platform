import { CheckCircle, Lock } from 'phosphor-react';
import { isPast, format } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import { Link, useParams } from 'react-router-dom';

interface LessonProps {
  title: string;
  slug: string;
  availableAt: Date;
  type: 'live' | 'class';
}

export function Lesson({ availableAt, slug, title, type }: LessonProps) {

  const { slug: slugParam } = useParams<{ slug: string }>();
  const isLessonAvailable = isPast(availableAt);
  const availableDateFormatted = format(availableAt, "EEEE' • 'd' de ' MMMM' • 'k'h'mm", {
    locale: ptBR
  });

  const isActive = slugParam === slug;

  return (
    <Link to={`/event/lesson/${slug}`} className="group">
      <span className="text-gray-300">
        {availableDateFormatted}
      </span>
      <div className={
        isActive ?
          "bg-green-500 rounded border border-gray-500 p-4 mt-2 group-hover:border-green-500 transition-colors"
          :
          "rounded border border-gray-500 p-4 mt-2 group-hover:border-green-500 transition-colors"
      }>
        {
          isActive &&
          <span className="h-2 w-2 bg-green-500 block rotate-45 relative top-7 -left-5 -mb-2"></span>
        }
        <header className='flex items-center justify-between'>
          {isLessonAvailable ?
            <span className={`text-sm ${isActive ? 'text-white' : 'text-blue-500'} font-medium flex items-center gap-2`}>
              <CheckCircle size={20} />
              Conteúdo liberado
            </span>

            :
            <span className="text-sm text-orange-500 font-medium flex items-center gap-2">
              <Lock size={20} />
              Em Breve
            </span>
          }
          <span className={`text-xs rounded px-2 py-[0.125rem] text-white border ${isActive ? 'border-white' : 'border-green-300'}`}>
            {
              type === 'live' ? 'AO VIVO' : 'AULA PRÁTICA'
            }
          </span>
        </header>
        <strong className={`${isActive ? 'text-white' : 'text-gray-200'} mt-5 block`}>
          {title}
        </strong>
      </div>
    </Link>
  )
}
