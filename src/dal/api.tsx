import type { Daum, Root } from '../types'

export function getTrack(trackId: string) {
  const promise: Promise<Daum> = fetch('src/data.json').then((res) =>
    res.json()
  )
  // return fetch(
  //   'https://musicfun.it-incubator.app/api/1.0/playlists/tracks?pageNumber=1&pageSize=10',
  //   {
  //     headers: {
  //       'api-key': '330ba936-8d51-491e-8b64-ba3d20e26021'
  //     }
  //   }
  // ).then((res) => res.json())

  return promise
}
export function getTracksViaAPI() {
  const promise: Promise<Root> = fetch('src/data.json').then((res) =>
    res.json()
  )
  // return fetch(
  //   'https://musicfun.it-incubator.app/api/1.0/playlists/tracks?pageNumber=1&pageSize=10',
  //   {
  //     headers: {
  //       'api-key': '330ba936-8d51-491e-8b64-ba3d20e26021'
  //     }
  //   }
  // ).then((res) => res.json())

  return promise
}

// const api = {
//   getTracks: () => {
//     return fetch(
//       'https://musicfun.it-incubator.app/api/1.0/playlists/tracks?pageNumber=1&pageSize=10',
//       {
//         headers: {
//           'api-key': '330ba936-8d51-491e-8b64-ba3d20e26021'
//         }
//       }
//     ).then((res) => res.json())
//   }
// }

// user interFace ui -> business logic (bll) -> data access layer (dal)
