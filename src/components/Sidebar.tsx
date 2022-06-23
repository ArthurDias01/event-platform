import { gql, useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import { Lesson } from "./Lesson";

const GET_LESSONS_QUERY = gql`
  query {
  lessons(orderBy: availableAt_ASC, stage: PUBLISHED) {
    id
    lessonType
    availableAt
    slug
    title
  }
}
`
interface GetLessonsQueryResponse {
  lessons: {
    id: string;
    lessonType: 'live' | 'class';
    availableAt: string;
    slug: string;
    title: string;
  }[]
}


export function Sidebar() {
  const { data, loading } = useQuery<GetLessonsQueryResponse>(GET_LESSONS_QUERY);
  const { slug } = useParams<{ slug: string }>();
  return (
    <aside className="w-[348px] bg-gray-700 p-6 border-l border-gray-600 ">
      <span className="font-bold text-2xl pb-6 mb-6 border-b border-gray-500 block">Cronograma de Aulas</span>
      <div className="flex flex-col gap-8">
        {
          data?.lessons.map(lesson => (
            <Lesson
              key={lesson.id}
              availableAt={new Date(lesson.availableAt)}
              slug={lesson.slug}
              title={lesson.title}
              type={lesson.lessonType}
              isActive={slug ? slug === lesson.slug : false}
            />
          ))
        }
      </div>
    </aside>
  )
}
