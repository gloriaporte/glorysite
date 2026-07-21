function parseDescription(description = '') {
  return description
    .split('•')
    .map((part) => part.replace(/\s+/g, ' ').trim())
    .filter(Boolean)
}

function BlogPost({ title, subtitle, date, body }) {
  const paragraphs = Array.isArray(body) ? body : parseDescription(body)

  return (
    <article className="blog-post">
      <header className="blog-post__header">
        <h3 className="blog-post__title">{title}</h3>
        {(subtitle || date) && (
          <p className="blog-post__meta">
            {subtitle && <span className="blog-post__subtitle">{subtitle}</span>}
            {subtitle && date && <span aria-hidden="true"> · </span>}
            {date && <time className="blog-post__date">{date}</time>}
          </p>
        )}
      </header>

      {paragraphs.length > 0 && (
        <div className="blog-post__body">
          <ul className="blog-post__list">
            {paragraphs.map((item) => (
              <li key={item} className="blog-post__item">
                {item}
              </li>
            ))}
          </ul>
        </div>
      )}
    </article>
  )
}

function BlogFeed({ posts, emptyLabel }) {
  if (!posts?.length) {
    return <p className="blog-feed__empty">{emptyLabel}</p>
  }

  return (
    <div className="blog-feed">
      {posts.map((post) => (
        <BlogPost key={post.id} {...post} />
      ))}
    </div>
  )
}

export { BlogPost, BlogFeed, parseDescription }
export default BlogFeed
