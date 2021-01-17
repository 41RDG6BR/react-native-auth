export function signIn() {
  return new Promise((resolve) => {
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