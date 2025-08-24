// src/types/index.ts

export type IPost = {
  id?: string; // Optional: Firestore doc ID
  caption: string;
  mediaUrl: string;
  mediaType: string; // e.g., 'image', 'video'
  createdAt: any; // or use FirebaseFirestoreTypes.Timestamp if you're strict
  username: string;
  privacy: 'public' | 'private';
  expiration?: any;
  likes: number;
  comments: number;
  uid: string;
  location?: string;
  tags?: string[];
};
