/* eslint-disable @typescript-eslint/no-explicit-any */
export interface Root {
  data: Daum[]
  included: any[]
  meta: Meta
}

export interface Daum {
  id: string
  type: string
  attributes: Attributes
  relationships: Relationships
}

export interface Attributes {
  title: string
  user: User
  addedAt: string
  attachments: Attachment[]
  images: Images
  currentUserReaction: number
  publishedAt: string
  likesCount: number
  isPublished: boolean
  lyrics?: string
}

export interface User {
  id: string
  name: string
}

export interface Attachment {
  id: string
  addedAt: string
  updatedAt: string
  version: number
  url: string
  contentType: string
  originalName: string
  fileSize: number
}

export interface Images {
  main: Main[]
}

export interface Main {
  type: string
  width: number
  height: number
  fileSize: number
  url: string
}

export interface Relationships {
  artists: Artists
}

export interface Artists {
  data: any[]
}

export interface Meta {
  page: number
  pageSize: number
  totalCount: number
  pagesCount: number
  nextCursor: any
}
