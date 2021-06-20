const getDiscussions = () => {
    return `{
        discussions(order_by: {created_at: desc}) {
            author {
              firstname
            }
            id
            title
            text
            created_at
          }
    }`
}

const createDiscussion = (userId: string, text: string, title: string) => {
    return `mutation CreateDiscussion{
        insert_discussions_one(object: {author_id: "${userId}", text: "${text}", title: "${title}"}) {
            id
          }
    }`
}

export { createDiscussion, getDiscussions }
