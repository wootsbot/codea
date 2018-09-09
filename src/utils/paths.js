const POSTS = 'posts-/'
const NEWS = 'news-/-news'
const CONTRIBUTE = 'contribute-/contribute'
const TUTORIALS = 'tutorials-/tutorials'

export const pathsKey = { POSTS, NEWS, CONTRIBUTE, TUTORIALS }

export const getPaths = [
  {
    key: POSTS,
    label: 'Blog',
    href: '/blog',
    active: true,
  },
  {
    key: NEWS,
    label: 'noticias',
    href: '/noticias',
    active: true,
  },
  {
    key: CONTRIBUTE,
    label: 'Contribuir',
    href: '/contribute',
    active: true,
  },
  {
    key: TUTORIALS,
    label: 'Cursos',
    href: '/tutorials',
    active: true,
  },
]

export function getPathsActives(getPaths) {
  return getPaths.filter(path => path.active)
}
