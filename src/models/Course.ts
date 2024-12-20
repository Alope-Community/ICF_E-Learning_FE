import { BaseResponseAPI, BaseResponsePaginationAPI } from "./_BaseResponse";

export interface CourseBySlugResponse extends BaseResponseAPI {
  result: {
    data: Course;
    haveJoined: boolean;
  };
}

export type CourseResponse = BaseResponsePaginationAPI<Course[]>;

export interface Course {
  id: number;
  title: string;
  slug: string;
  body: string;
  user_id: string;
  category_id: number;
  description: string;
  created_at: string;
  updated_at: string;
  category: CourseCategory;
  user: CourseUser;
  forums: ForumCourse[];
}

export interface CourseCategory {
  id: number;
  title: string;
  slug: string;
  description: string;
  created_at?: string;
  updated_at?: string;
}
export interface CourseUser {
  id: number;
  nuptk: string;
  name: string;
  email: string;
  email_verified_at: string;
  profile?: string;
  created_at?: string;
  updated_at?: string;
  otp?: string;
}

export interface ForumCourse {
  id: number;
  course_id: number;
  title: string;
  created_at: string;
  updated_at: string;
  discussions: ForumDiscussion[];
}

export interface ForumDiscussion {
  id: number;
  forum_id: number;
  user_id: number;
  user: CourseUser;
  message: string;
  created_at: string;
  updated_at: string;
}
