export interface ChallengeObject {
  id: string
  name: string
  date: FirebaseDate
  comment: string
}
export interface FirebaseDate {
  seconds: number
  nanoseconds: number
}
