export const PATH_ARTICLES = '/articles/'
export const PATH_NEWS = '/news/'
export const PATH_CONTRIBUTE = '/contribute/'
export const PATH_TUTORIALS = '/tutorials/'
export const PATH_ARCHIVE_TAGS = '/archive-tags/'

const LABEL_ARTICLES = 'Articulos'
const LABEL_NEWS = 'Noticias'
const LABEL_CONTRIBUTE = 'Contribuir'
const LABEL_COURSES = 'Cursos'

export const getKeyPath = {
  PATH_ARTICLES,
  PATH_NEWS,
  PATH_CONTRIBUTE,
  PATH_TUTORIALS,
}

export const getPaths = [
  {
    label: LABEL_ARTICLES,
    path: PATH_ARTICLES,
    active: true,
    disable: false,
  },
  {
    label: LABEL_NEWS,
    path: PATH_NEWS,
    active: true,
    disable: true,
  },
  {
    label: LABEL_CONTRIBUTE,
    path: PATH_CONTRIBUTE,
    active: true,
    disable: true,
  },
  {
    label: LABEL_COURSES,
    path: PATH_TUTORIALS,
    active: true,
    disable: true,
  },
]

export function getPathsActives(getPaths) {
  return getPaths.filter(path => path.active)
}

export function paginationPreviousPage(index, pathPrefix) {
  const previousUrl =
    index - 1 == 1 ? `${pathPrefix}` : `${pathPrefix}${(index - 1).toString()}`

  return previousUrl
}

export function paginationNextPage(index, pathPrefix) {
  const nextUrl = `${pathPrefix}${(index + 1).toString()}`

  return nextUrl
}
