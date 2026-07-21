import { useLanguage } from '../../context/LanguageContext'
import { experience } from '../../data/experience'
import BlogFeed from './BlogFeed'

function ExperienceWindow() {
  const { t } = useLanguage()

  const posts = experience.map((item) => ({
    id: item.id,
    title: item.role,
    subtitle: item.company,
    date: `${item.startDate} — ${item.endDate}`,
    body: item.description,
  }))

  return (
    <BlogFeed posts={posts} emptyLabel={t.blog?.empty ?? '—'} />
  )
}

export default ExperienceWindow;
