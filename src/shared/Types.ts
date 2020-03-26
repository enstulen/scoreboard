export interface ChallengeObject {
  id: string
  name: string
  date: FirebaseDate
  comment: string
  tags: Array<TagObject>
}
export interface FirebaseDate {
  seconds: number
  nanoseconds: number
}
export interface TagObject {
  name: string
  color: string
}

export interface ReduxState {
  firestore: {
    ordered: {
      challenges: Array<ChallengeObject>
      tags: Array<TagObject>
    }
  }
}
