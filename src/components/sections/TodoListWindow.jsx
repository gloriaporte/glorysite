import { useLanguage } from '../../context/LanguageContext'

function TodoListWindow() {
  const { t } = useLanguage()
  const items = t.todolist?.items ?? []

  return (
    <ul className="sticky-note-list">
      {items.map((item) => (
        <li
          key={item.label}
          className={
            item.done
              ? 'sticky-note-list__item sticky-note-list__item--done'
              : 'sticky-note-list__item'
          }
        >
          {item.label}
        </li>
      ))}
    </ul>
  )
}

export default TodoListWindow
