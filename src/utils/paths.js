const POSTS = 'posts-/'
const COLLABORATORS = 'collaborators-/collaborators'
const CONTRIBUTE = 'contribute-/contribute'
const TUTORIALS = 'tutorials-/tutorials'

export const pathsKey = { POSTS, COLLABORATORS, CONTRIBUTE, TUTORIALS }

export const getPaths = [
  {
    key: 'posts-/',
    label: 'Posts',
    href: '/',
    active: true,
  },
  {
    key: 'collaborators-/collaborators',
    label: 'Colaboradores',
    href: '/collaborators',
    active: true,
  },
  {
    key: 'contribute-/contribute',
    label: 'Contribuir',
    href: '/contribute',
    active: true,
  },
  {
    key: 'tutorials-/tutorials',
    label: 'Cursos',
    href: '/tutorials',
    active: true,
  },
]

export function getPathsActives(getPaths) {
  return getPaths.filter(path => path.active)
}
