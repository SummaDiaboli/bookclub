const getReadings = () => {
    return `{
        readings(order_by: {created_at: desc}) {
            id
            book
            created_at
            description
            start_time
            title
            user {
              firstname
              lastname
              id
            }
          }
    }`
}

const createReading = (
    userId: string,
    description: string,
    title: string,
    startTime: string,
    bookId: string
) => {
    return `mutation CreateReading{
        insert_readings_one(object: {author_id: "${userId}", description: "${description}", title: "${title}", start_time: "${startTime}", book: "${bookId}" }) {
            id
          }
    }`
}

export { createReading, getReadings }
