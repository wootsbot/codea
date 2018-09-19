// return list of posts filters

export function getPostsFilterTags(posts, path) {
  let arrayPost = []

  if (posts) {
    arrayPost = posts.edges.filter(edge => edge.node.frontmatter.path != path)
  }

  return arrayPost.reverse()
}
