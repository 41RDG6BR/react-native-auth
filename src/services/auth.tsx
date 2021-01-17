interface Response {
  token: string;
  user: {
    name: string;
    email: string;
  }
}

export function signIn(): Promise<Response> {
  return new Promise( resolve => {
    setTimeout(() => {
      resolve({
        token: 'fjagsdfhaklhsfahsi',
        user: {
          name: 'Rodrigo',
          email: 'rdg6@gmail.com'
        }
      })
    }, 2000);
  })
}