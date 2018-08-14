export default {

  async regist_api(payload) {
    const query = `
      mutation add_user(
        $user_name:String!,
        $user_email:String!,
        $password:String!,
        $description:String
      ){
        add_user(
          user_name:$user_name,
          user_email:$user_email,
          password:$password,
          description:$description
        ){
          user_name
          user_email
        }
      }
    `
    const variables = {
      user_name: payload.user_name,
      user_email: payload.user_email,
      password: payload.password,
      description: payload.description
    }

    const res = await fetch('http://localhost:4000/graphql', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ query, variables })
    })
      .then(res => res.json())
      .then((res) => {
        console.log('regist_api fetch success!', res.data)
        return res.data
      })
      .catch((err) => { throw err })
    // const res = await a.json()
    // console.log('res ',res)
    return res
  }
}