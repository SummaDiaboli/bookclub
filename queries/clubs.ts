const getClubs = () => {
    return `
    {
        clubs {
            id
            name
            picture
        }
    }
    `
}

const createClub = (id: string, name: string, about: string) => {
    return `mutation createClub {
        insert_clubs(objects: {moderator: "${id}", name: "${name}", about: "${about}"}) {
          returning {
            id
          }
        }
      }`
}

const getClub = (id: string) => {
    return `{
        clubs(where: {id: {_eq: "${id}"}}) {
            name
            about
            picture
            reading
        }
    }`
}

const getClubMembersCount = (id: string) => {
    return `{
        club_member_aggregate(where: {club_id: {_eq: "${id}"}}) {
          aggregate {
            count
          }
        }
      }
    `
}

const addClubMember = (userId: string, clubId: string) => {
    return `mutation addClubMember {
        insert_club_member(objects: {club_id: "${clubId}", user_id: "${userId}"}) {
            returning {
              club_id
            }
          }
    }`
}

export { getClubs, createClub, addClubMember, getClub, getClubMembersCount }
