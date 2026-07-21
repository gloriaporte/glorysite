import { useLanguage } from '../../context/LanguageContext'
import { education } from '../../data/education'
import BlogFeed from './BlogFeed'

function EducationWindow() {
  const { t } = useLanguage()

  const posts = education.map((item) => ({
    id: item.id,
    title: item.course,
    subtitle: item.institution,
    date: `${item.startDate} — ${item.endDate}`,
    body: item.description,
  }))

  return (
    <BlogFeed posts={posts} emptyLabel={t.blog?.empty ?? '—'} />
  )
}

export default EducationWindow
