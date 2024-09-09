import UserData from "../../data/users"

// can't get the default [filenamedParam].ts to work so im just going to use a parameter instead for this
// couldn't find a good example that worked so i used this https://github.com/vercel/app-playground-api/blob/main/app/api/reviews/route.ts
export function GET(request: Request) {
  const { searchParams } = new URL(request.url);

  // We sometimes artificially delay a reponse for demo purposes.
  // Don't do this in real life :)
  const id = searchParams.get('id')
  const userId = parseInt(id || "NaN", 10)
  let userResponse
  if (userId > 0) {
    //you can get away wuth this because of zero being false, and the ids are all 1-based indexes....
    userResponse = UserData[userId - 1]
  } else {
    console.log(UserData)
    userResponse = UserData.map(({userId, firstName, lastName, username, image}) => ({userId, firstName, lastName, username, image}))

  }
    return new Response(JSON.stringify(userResponse), {
      status: 200,
      headers: {
        'content-type': 'application/json',
      },
    })
  }