const getDiscussions = () => {
    return `{
        discussions(order_by: {created_at: desc}) {
            author {
              firstname
              lastname
            }
            id
            title
            text
            created_at
            comments {
                id
            }
          }
    }`
}

const getSpecificDiscussion = (id: string) => {
    return `{
        discussions(where: {id: {_eq: "${id}"}}) {
            author {
                id
                firstname
                lastname
            }
            id
            text
            title
            created_at
            club {
                id
                name
            }
            comments {
                id
                text
                author {
                    firstname
                    lastname
                    id
                }
                created_at
            }
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

const createReply = (userId: string, discussionId: string, text: string) => {
    return `mutation createReply {
        insert_comments_one(object: {discussion_id: "${discussionId}", author_id: "${userId}", text: "${text}"}) {
          id
        }
      }
      `
}

export { createDiscussion, createReply, getDiscussions, getSpecificDiscussion }
